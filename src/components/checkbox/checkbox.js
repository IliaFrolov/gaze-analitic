import React from 'react';
import s from './checkbox.module.css';

const Checkbox = ({ children, checked, onChange, ...restProps }) => {
    return (
        <label className={s.checkboxWrapper}>
            <input
                {...restProps}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={s.input}
            />
            <div className={s.checkbox} />
            {children}
        </label>
    );
};

export default Checkbox;
