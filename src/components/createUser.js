import React from 'react';
import { Link } from 'react-router-dom'

const CreateUser = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Link
                        className="btn btn-danger pull-right"
                        to="/"
                    >
                        Cancel
                    </Link>
                    <h1>Create User</h1>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;