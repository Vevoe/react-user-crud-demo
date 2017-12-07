import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createUser } from '../actions/users'
import UserForm from '../components/userForm'
import PageTitle from '../components/pageTitle'
import ErrorBox from '../components/utils/errorBox'

class CreateUser extends Component {
    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onSubmit(values) {
        this.props.createUser(values)
    }

    render() {
        return (
            <div className="container">
                <PageTitle
                    title="Create User"
                    to="/"
                    btnText="Cancel"
                    btnClass="btn btn-danger"
                />

                {this.props.users.hasError && 
                    <ErrorBox message={this.props.users.hasError} />
                }
                <UserForm onSubmit={this.onSubmit} initialValues={{}} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default CreateUser = withRouter(connect(
    mapStateToProps,
    { createUser }
)(CreateUser))
  