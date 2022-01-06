import axios from 'axios'

// action type constants

const SET_COMPLIMENTS = 'SET_COMPLIMENTS'
const SEND_COMPLIMENT = 'SEND_COMPLIMENT'

// action creators

const _setCompliments = (compliments) => {
  return {
    type: SET_COMPLIMENTS,
    compliments
  }
}

const _sendCompliment = (compliment) => {
  return {
    type: SEND_COMPLIMENT,
    compliment
  }
}

// THUNKS

export const fetchCompliments = () => async dispatch => {
  const compliments = (await axios.get('/api/compliments')).data
  dispatch(_setCompliments(compliments))
}

export const sendCompliment = (compliment) => async dispatch => {
  const created = await (await axios.post('/api/compliments', compliment)).data
  dispatch(_sendCompliment(created))
}


export default (state = [], action) => {
  switch(action.type) {
    case SET_COMPLIMENTS:
      return action.compliments
    case SEND_COMPLIMENT:
      return [...state, action.compliment]
    default:
      return state
  }
}