import classNames from 'classnames';
import React from 'react';
import s from './button.module.css';

const Button = ({ children, type, puched, disabled, size, ...restProps }) => {
    return (
        <button
            {...restProps}
            disabled={disabled}
            className={classNames(
                s.button,
                s[size],
                disabled && s.buttonDisabled,
                puched && s.buttonPushed,
                type === 'primary' && s.buttonPrimary,
                type === 'link' && s.buttonLink,
            )}
        >
            {children}
        </button>
    );
};

export default Button;
