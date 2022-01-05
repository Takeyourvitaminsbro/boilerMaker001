const db = require('./db')

const User = require('./models/User')

// associations

module.exports = {
  db,
  models: {
    User
  }
}