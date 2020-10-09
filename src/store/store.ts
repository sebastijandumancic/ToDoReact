import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { taskReducer } from '../reducers/taskReducer'
import thunk from 'redux-thunk'

export const Store = createStore(combineReducers({ tasks: taskReducer }), composeWithDevTools(applyMiddleware(thunk)))