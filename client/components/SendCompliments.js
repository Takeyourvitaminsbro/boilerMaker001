import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendCompliment } from '../store/compliments'

const SendCompliments = () => {
  const dispatch = useDispatch()

  const [toNumber, setToNumber] = useState('')
  const [yourName, setYourName] = useState('')
  const [toName, setToName] = useState('')
  const [yourCompliment, setYourCompliment] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const comp = {
      to: toNumber,
      compliment: yourCompliment,
      sender: yourName,
      receiver: toName
    }
    dispatch(sendCompliment(comp))
    document.getElementById("compliments-form").reset()
    window.location.reload()
  }

  return (
    <div>
      Send a Compliment!:
      <p id="trial">Since I have a trial Twilio account, it will only work if you send the compliments to my phone number, +18059159336. You will know it worked if it shows up in the most recent compliments.
      The compliment will display as: "YourName" says: "PersonToCompliment" is "YourCompliment".
      Unless you type "You" in "PersonToCompliment," then it will display as: You are "yourCompliment."</p>
      <form id="compliments-form" onSubmit={handleSubmit}>
          <label htmlFor="toNumber">Number to compliment:</label>
          <input
            onChange={(e) => setToNumber(e.target.value)}
            name="toNumber"
            placeholder='+18059159336'
          />

          <label htmlFor="yourName">Your name:</label>
          <input
            onChange={(e) => setYourName(e.target.value)}
            name="yourName"
            placeholder='Jason'
          />

          <label htmlFor="to-name">Person to compliment:</label>
          <input 
            onChange={(e) => setToName(e.target.value)}
            name="to-name"
            placeholder='Venessa'
          />

          <label htmlFor="your-compliment">Your compliment:</label>
          <input
            onChange={(e) => setYourCompliment(e.target.value)}
            name="your-compliment"
            placeholder='THE GREATEST'
          />

          <button id="send-compliment" type="submit">Send Compliment</button>
        </form>
    </div>
  )
}

export default SendCompliments