import React from 'react';
import { Link } from 'react-router-dom'

const UsersIndex = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Link
                        className="btn btn-primary pull-right"
                        to="/users/create"
                    >
                        Create New Users
                    </Link>
                    <h1>All Users</h1>
                </div>
            </div>
        </div>
    );
};

export default UsersIndex;
