import axios from 'axios'
import { ROOT_URL } from '../config'
import { push } from 'react-router-redux';

/**
 * Action Types
 */
export const REQUEST_LOAD_USERS = 'REQUEST_LOAD_USERS'
export const RECEIVE_LOAD_USERS = 'RECEIVE_LOAD_USERS'
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER'
export const RECEIVE_CREATE_USER = 'RECEIVE_CREATE_USER'
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR'

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

function requestCreateUser() {
    return {
        type: REQUEST_CREATE_USER
    }
}

function receiveCreateUser(data) {
    return {
        type: RECEIVE_CREATE_USER,
        payload: data
    }
}

function createUserError(data) {
    console.log("Create User Error: ", data)
    return {
        type: CREATE_USER_ERROR,
        payload: data.message
    }
}

/**
 * Async Actions
 */
export const loadUsers = () => dispatch => {
    dispatch(requestLoadlUsers())
 
    return axios.get(`${ROOT_URL}users`)
        .then(res => {
            dispatch(receiveLoadUsers(res.data))
        })
}

export const createUser = newUserData => dispatch => {
    dispatch(requestCreateUser())

    return axios.post(`${ROOT_URL}users`, newUserData)
        .then(res => {
            dispatch(receiveCreateUser(res.data))
            dispatch(push('/'));
        })
        .catch(error => {
            window.scrollTo(0, 0);
            if (error.response) {
                dispatch(createUserError(error.response.data))
            } else if (error.request) {
                dispatch(createUserError({message: 'A network error occurred.'}))
            } else {
                dispatch(createUserError({message: 'An error as occurred. Please refresh the page and try again.'}))
            }
        })
}
