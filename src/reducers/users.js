import _ from 'lodash'
import { REQUEST_LOAD_USERS, RECEIVE_LOAD_USERS } from '../actions/users'

const users = (
    state = {
        isCreating: false,
        isLoading: false,
        list: {}
    },
    action
) => {
    switch(action.type) {
        case REQUEST_LOAD_USERS:
            return Object.assign({}, state, {
                isLoading: true
            })
        case RECEIVE_LOAD_USERS:
            return Object.assign({}, state, {
                isLoading: false,
                users: _.mapKeys(action.payload.data, 'id')
            })
        default:
            return state
    }   
}

export default users
