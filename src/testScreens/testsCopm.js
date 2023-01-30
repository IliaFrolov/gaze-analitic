import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './testScreen.module.css';
const rozetkaImg = require('./rozetka.png');
const zolotoyvekImg = require('./zolotoyvek.png');
const hotlineFullImg = require('./hotlineFull.png');
const hotlineFinanceImg = require('./hotlineFinance.png');

const Tests = () => {
    const { t } = useTranslation();

    return [
        {
            id: 'testId1',
            title: t('1test-title'),
            startDescription: t('1test-start-description'),
            endDescription: t('1test-end-description'),
            time: 10000,
            testComponent: (
                <div className={s.iframe}>
                    <img src={rozetkaImg} alt="rozetka" />
                </div>
            ),
        },
        {
            id: 'testId2',
            title: t('2test-title'),
            startDescription: t('2test-start-description'),
            endDescription: t('2test-end-description'),
            time: 10000,
            testComponent: (
                <div className={s.iframe}>
                    <img src={zolotoyvekImg} alt="zolotoyvek" />
                </div>
            ),
        },
        {
            id: 'testId3',
            title: t('3test-title'),
            startDescription: t('3test-start-description'),
            endDescription: t('3test-end-description'),
            time: 10000,
            testComponent: (
                <div className={s.iframe}>
                    <img src={hotlineFullImg} alt="hotlineFull" />
                </div>
            ),
        },
        {
            id: 'testId4',
            title: t('4test-title'),
            startDescription: t('4test-start-description'),
            endDescription: t('4test-end-description'),
            time: 10000,
            testComponent: (
                <div className={s.iframe}>
                    <img src={hotlineFinanceImg} alt="hotlineFinance" />
                </div>
            ),
        },
    ];
};

export default Tests;
