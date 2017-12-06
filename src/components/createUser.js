import React from 'react';
import PageTitle from './pageTitle'

const CreateUser = () => {
    return (
        <div className="container">
            <PageTitle
                title="Create User"
                to="/"
                btnText="Cancel"
                btnClass="btn btn-danger pull-right"
            />
        </div>
    );
};

export default CreateUser;
