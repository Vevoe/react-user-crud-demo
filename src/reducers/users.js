import _ from 'lodash'
import { 
    REQUEST_LOAD_USERS,
    RECEIVE_LOAD_USERS,
    REQUEST_CREATE_USER,
    RECEIVE_CREATE_USER,
    CREATE_USER_ERROR
} from '../actions/users'

const users = (
    state = {
        isCreating: false,
        isLoading: false,
        hasError: '',
        list: {}
    },
    action
) => {
    switch(action.type) {
        case REQUEST_LOAD_USERS:
            return Object.assign({}, state, {
                hasError: '',
                isLoading: true
            })
        case RECEIVE_LOAD_USERS:
            return Object.assign({}, state, {
                isLoading: false,
                users: _.mapKeys(action.payload.data, 'id')
            })
        case REQUEST_CREATE_USER:
            return Object.assign({}, state, {
                hasError: '',
                isCreating: true
            })
        case RECEIVE_CREATE_USER:
            return Object.assign({}, state, {
                [action.payload.data.id]: action.payload.data
            })
        case CREATE_USER_ERROR:
            return Object.assign({}, state, {
                hasError: action.payload
            })
        default:
            return state
    }   
}

export default users
