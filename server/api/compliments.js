const router = require('express').Router()
module.exports = router
const Twilio = require('twilio')
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER} = require('../../public/key.js')

const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

router.get('/', async (req, res, next) => {
  try {
    const sentMessages = await client.messages.list({from: TWILIO_PHONE_NUMBER})
    const compliments = sentMessages.map(message => message.body)
    res.json(compliments)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const to = req.body.to
  const from = TWILIO_PHONE_NUMBER
  let body
  if(req.body.receiver !== 'You'){
    body = `${req.body.sender} says: ${req.body.receiver} is ${req.body.compliment}.`
  } else body = `${req.body.receiver} are ${req.body.compliment}.`
  try {
    await client.messages.create({ body, from, to})
    res.send('sent!')
  } catch (error) {
    next(error)
  }
})