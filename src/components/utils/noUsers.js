import React from 'react';
import { Link } from 'react-router-dom'

const NoUsers = () => {
    return (
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <p className="title">You have no Users!</p>
                        <p>Click "Create New User" to get started.</p>
                        <Link
                            className="btn btn-primary btn-lg"
                            to="/users/create"
                        >
                            Create New User
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoUsers;
