const Sequelize = require('sequelize')
const { STRING } = Sequelize.DataTypes
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const axios = require('axios')

const SALT_ROUNDS = 5;

const User = db.define('users', {
  username: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: STRING
  }
})

User.prototype.correctPassword = candidatePwd => {
  return bcrypt.compoare(candidatePwd, this.password)
}

User.prototype.generateToken = () => {
  return jwt.sign({id: this.id}, process.env.JWT)
}

User.authenticate = async ({username, password}) => {
  const user = await this.findOne({where: { username }})
  if(!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect username/password')
    error.status = 401;
    throw error;
  }
  return user.generateToken();
}

User.findByToken = async (token) => {
  try {
    const {id} = await jwt.verify(token, process.env.JWT)
    const user = User.findByPk(id)
    if(!user) {
      throw 'noooo'
    }
    return user
  } catch (error) {
    error = Error('bad token')
    error.status = 401
    throw error
  }
}

const hashPassword = async (user) => {
  if(user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS)
  }
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)
User.beforeBulkCreate(users => Promise.all(users.map(hashPassword)))

module.exports = User
