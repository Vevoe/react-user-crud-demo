import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadUsers, yolo } from '../actions/users'
import PageTitle from './pageTitle'

class UsersIndex extends Component {
    componentDidMount() {
        this.props.loadUsers()
    }
    
    renderUsers() {
        if (this.props.users.isLoading) {
            return <div>Loading...</div>
        }

        if (_.isEmpty(this.props.users.list)) {
            return <div>No Users</div>
        }

        return <div>There are Users</div>
    }

    render() {
        return (
            <div className="container">
                <PageTitle
                    title="Users"
                    to="/users/create"
                    btnText="Create New User"
                    btnClass="btn btn-primary pull-right"
                />

                <div className="row">
                    <div className="col-sm-12">
                        {this.renderUsers()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(loadUsers()),
        yolo: () => dispatch(yolo())
    }
}

// export default UsersIndex = connect(mapStateToProps, mapDispatchToProps)(UsersIndex)

export default UsersIndex = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersIndex)