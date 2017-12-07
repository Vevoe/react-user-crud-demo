import _ from 'lodash'
import React from 'react';

const UsersList = ({users}) => {
    const renderList = () => {
        return _.map(users, user => {
            return <tr key={user.id}>
                <td>{user.email}</td>
                <td></td>
            </tr>
        })
    }
    
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <td>Email</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
