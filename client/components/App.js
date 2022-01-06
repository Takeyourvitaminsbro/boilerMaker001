import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCompliments } from '../store/compliments';
import SendCompliments from './SendCompliments';
import ListCompliments from './ListCompliments';
import "babel-polyfill"

const App = () => {
  const { compliments } = useSelector((state) => {
    return {
      compliments: state.compliments
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCompliments())
  }, [])

  return (
    <div>
      <h1>Hello World</h1>
      <ListCompliments />
      <SendCompliments />
    </div>
  )
}

export default App
