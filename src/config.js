import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

// Set up Redux Store
export const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    )
}

export const ROOT_URL = 'https://ofwrhb3qxd.execute-api.us-west-2.amazonaws.com/test/'
