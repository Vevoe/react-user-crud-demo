import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './usersIndex.css'
import { loadUsers } from '../actions/users'
import PageTitle from '../components/pageTitle'
import UserList from '../components/userList'
import NoUsers from '../components/utils/noUsers'
import Loading from '../components/utils/loading'

class UsersIndex extends Component {
    componentDidMount() {
        this.props.loadUsers()
    }
    
    renderUsers() {
        const { list, isLoading } = this.props.users
        if (isLoading) {
            return <Loading />
        }

        if (_.isEmpty(list)) {
            return <NoUsers />
        }

        return <UserList users={list} />
    }

    render() {
        return (
            <div className="container">
                <PageTitle
                    title="Users"
                    to="/users/create"
                    btnText="Create New User"
                    btnClass="btn btn-primary"
                />

                {this.renderUsers()}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(loadUsers())
    }
}

export default UsersIndex = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersIndex)
