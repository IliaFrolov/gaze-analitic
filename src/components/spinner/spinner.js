import React from "react";
import s from './spinner.module.css';
export const Spinner = () => (
    <div className={s.wrapper}>
        <div className={s.ldsGrid}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>
)