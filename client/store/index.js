import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { dummyReducer } from '../redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import complimentsReducer from './compliments'

const rootReducer = combineReducers({
  compliments: complimentsReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;

