import React from 'react';
import PageTitle from './pageTitle'

const EditUser = () => {
    return (
        <div className="container">
            <PageTitle
                title="Edit User"
                to="/"
                btnText="Cancel"
                btnClass="btn btn-danger pull-right"
            />
        </div>
    );
};

export default EditUser;
