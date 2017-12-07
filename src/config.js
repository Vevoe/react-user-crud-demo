import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { routerMiddleware } from 'react-router-redux'

export const configureStore = (history) => {
    return createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history)
        )
    )
}

export const ROOT_URL = 'https://ofwrhb3qxd.execute-api.us-west-2.amazonaws.com/test/'