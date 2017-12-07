import React from 'react';

export const renderBasicInput = (field) => {
    const { type="text", meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-error' : ''}`

    return (
        <div className={className}>
            <label>{field.label}</label>
            <input
                type={type}
                className="form-control"
                {...field.input}
            />
            <div className="help-block">
                {touched ? error : ''}
            </div>
        </div>
    )
}