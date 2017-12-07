import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import users from './users'

const rootReducer = combineReducers({
    users,
    router: routerReducer,
    form: formReducer
})

export default rootReducer
