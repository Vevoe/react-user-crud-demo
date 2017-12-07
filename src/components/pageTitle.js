import React from 'react';
import { Link } from 'react-router-dom'
import './pageTitle.css';

const PageTitle = ({title, to, btnText, btnClass}) => {
    return (
    <div className="row">
        <div className="col-sm-12">
            <div className="page-title-container">
                <Link
                    className={btnClass}
                    to={to}
                >
                    {btnText}
                </Link>
                <h1>{title}</h1>
            </div>
        </div>
    </div>
    );
};

export default PageTitle;