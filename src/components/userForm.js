import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderBasicInput } from './fieldTypes'
import './userForm.css'

const CreateUserForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>

            <fieldset>
                <legend>Account Information</legend>
                <div className="row">
                    <div className="col-sm-6">
                        <Field
                            label="Email"
                            name="email"
                            component={renderBasicInput}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field
                            label="User Name"
                            name="userName"
                            component={renderBasicInput}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Field
                            label="Password"
                            name="password"
                            type="password"
                            component={renderBasicInput}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field
                            label="Confirm Password"
                            name="confirm_password"
                            type="password"
                            component={renderBasicInput}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Field
                            label="First Name"
                            name="first_name"
                            component={renderBasicInput}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field
                            label="Last Name"
                            name="last_name"
                            component={renderBasicInput}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Field
                            label="Phone"
                            name="phone"
                            component={renderBasicInput}
                        />
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Billing Information</legend>

                <div className="row">
                    <div className="col-sm-12">
                        <Field
                            label="Address"
                            name="address"
                            component={renderBasicInput}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <Field
                            label="City"
                            name="user_city"
                            component={renderBasicInput}
                        />
                    </div>
                    <div className="col-sm-4">
                        <Field
                            label="State"
                            name="user_state"
                            component={renderBasicInput}
                        />
                    </div>
                    <div className="col-sm-4">
                        <Field
                            label="Postal"
                            name="user_postal"
                            component={renderBasicInput}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Field
                            label="Country"
                            name="user_country"
                            component={renderBasicInput}
                        />
                    </div>
                </div>
            </fieldset>
            
            <fieldset>
                <legend>Artist Information</legend>
                <div className="row">
                    <div className="col-sm-6">
                        <Field
                            label="Artist Name"
                            name="artistName"
                            component={renderBasicInput}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Field
                            label="Business Name"
                            name="businessName"
                            component={renderBasicInput}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <Field
                            label="Performance Rights"
                            name="perfRights"
                            component={renderBasicInput}
                        />
                    </div>
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = "This field is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    
    if (!values.password) {
        errors.password = "This field is required"
    }

    if (!values.confirm_password) {
        errors.confirm_password = "This field is required"
    } else if (values.password !== values.confirm_password) {
        errors.confirm_password = 'Confirm Password does not match Password'
    }
    
    return errors
}

// export default CreateUserForm;
export default reduxForm({
    validate,
    form: 'CreateNewUserForm'
})(CreateUserForm)
