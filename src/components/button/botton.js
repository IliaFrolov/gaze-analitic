import classNames from 'classnames';
import React from 'react';
import s from './button.module.css';

const Button = ({ children, primary, puched, disabled, ...restProps }) => {
    return (
        <button
            {...restProps}
            disabled={disabled}
            className={classNames(
                s.button,
                disabled && s.buttonDisabled,
                puched && s.buttonPushed,
                primary && s.buttonPrimary,
            )}
        >
            {children}
        </button>
    );
};

export default Button;
