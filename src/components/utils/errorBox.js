import React from 'react';

const ErrorBox = ({message}) => {
    return (
        <div 
            className="alert alert-danger" role="alert">
            <b>Error!</b> {message}
        </div>
    );
};

export default ErrorBox;