import axios from 'axios'
import { ROOT_URL } from '../config'

/**
 * Action Types
 */
export const REQUEST_LOAD_USERS = 'REQUEST_LOAD_USERS'
export const RECEIVE_LOAD_USERS = 'RECEIVE_LOAD_USERS'


/**
 * Action Creators
 */
function requestLoadlUsers() {
    return {
        type: REQUEST_LOAD_USERS
    }
}

function receiveLoadUsers(data) {
    return {
        type: RECEIVE_LOAD_USERS,
        payload: data
    }
}


/**
 * Async Actions
 */
export const yolo = () => dispatch => {
    dispatch(requestLoadlUsers())
}

export const loadUsers = () => dispatch => {
    dispatch(requestLoadlUsers())

    return axios.get(`${ROOT_URL}users`)
        .then(res => {
            console.log('Response Here: ', res)
            dispatch(receiveLoadUsers(res.data))
        })
}
