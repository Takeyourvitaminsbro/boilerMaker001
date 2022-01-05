// const { db } = require('./db') 

const PORT = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
const app = require('./app')

// const seed = require('../script/seed')

const init = async () => {
  try {
    if(process.env.SEED === 'true') {
      // await seed()
      console.log('todo seed')
    }
    else {
      // await db.sync()
      console.log('todo db sync')
    }
    // start listening on PORT
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (error) {
    console.log(error)
  }
}

init()