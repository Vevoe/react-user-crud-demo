import React from 'react';
import { Link } from 'react-router-dom'

const PageTitle = ({title, to, btnText, btnClass}) => {
    return (
    <div className="row">
        <div className="col-sm-12">
            <Link
                className={btnClass}
                to={to}
            >
                {btnText}
            </Link>
            <h1>{title}</h1>
        </div>
    </div>
    );
};

export default PageTitle;