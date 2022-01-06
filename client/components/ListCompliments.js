import React from 'react'
import { useSelector } from 'react-redux'

const ListCompliments = () => {
  const { compliments } = useSelector((state) => {
    return {
      compliments: state.compliments
    }
  })
  
  console.log('COMPLIMENTS', compliments)
  return (
    <div>
      <h3>List of Sent Compliments</h3>
      <div id="compliment-container">
        <ul>
          {compliments ? compliments.map(compliment => {
            return <li key={compliments.indexOf(compliment)}>{compliment}</li>}) : 'no compliments yet'}
        </ul>
      </div>
    </div>
  )
}

export default ListCompliments