import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserForm from '../components/userForm'
import PageTitle from '../components/pageTitle'
import ErrorBox from '../components/utils/errorBox'

// Temp fill in for some default values
const tempDefaultValues = {
    email: 'test@test.com',
    userName: 'Test',
    first_name: 'Michael'
}

class EditUser extends Component {
    render() {
        return (
            <div className="container">
                <PageTitle
                    title="Edit User"
                    to="/"
                    btnText="Cancel"
                    btnClass="btn btn-danger"
                />

                {this.props.users.hasError && 
                    <ErrorBox message={this.props.users.hasError} />
                }
                <UserForm onSubmit={this.onSubmit} initialValues={tempDefaultValues} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default EditUser = withRouter(
    connect(mapStateToProps)(EditUser)
)
