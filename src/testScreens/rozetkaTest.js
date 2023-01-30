/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import s from './testScreen.module.css';
const rozetkaImg = require('./rozetka.png');

const RozetkaTest = () => {
    return (
        <div className={s.iframe}>
            <img src={rozetkaImg} alt="rozetka" />
        </div>
    );
};

export default RozetkaTest;
