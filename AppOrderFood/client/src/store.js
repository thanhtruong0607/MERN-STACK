import { combineReducers } from 'redux'

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzasReducer } from './reducers/pizzaReducers'

const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer
})

const initalState = {}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initalState, composeEnhancers(applyMiddleware(thunk)))

export default store