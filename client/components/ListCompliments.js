import React from 'react'
import { useSelector } from 'react-redux'


const ListCompliments = () => {
 
  const compliments = useSelector((state) => state.compliments)
 
  // only want the last 5 compliments
  while(compliments.length > 5) {
    compliments.pop()
  }
  // trimmed off the 'sent from a trial account' header
  const trimmed = compliments.map(compliment => {
    return compliment.slice(38)
  })
  
  console.log('COMPLIMENTS', compliments)
  return (
    <div>
      <h3>Here are the last 5 compliments that were sent:</h3>
      <div id="compliment-container">
        <ul>
          {trimmed ? trimmed.map(compliment => {
            return <li key={trimmed.indexOf(compliment)}>{compliment}</li>}) : 'no compliments yet'}
        </ul>
      </div>
    </div>
  )
}

export default ListCompliments