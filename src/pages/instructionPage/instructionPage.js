import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import { PATH_TESTS_PAGE, SAVED_USER_IS_CALIBRATED } from '../../constants';
import gs from './../../styles/global.module.css';
import s from './instructionPage.module.css';

const InstructionPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const isCalibrated = JSON.parse(localStorage.getItem(SAVED_USER_IS_CALIBRATED));
    return (
        <div className={gs.flexFullScreenCenterCenter}>
            <div className={classNames(gs.box, s.box)}>
                {/* <div className={s.boxInner}> */}
                <h1>{t('instruction-title')}</h1>
                <div className={s.text}>
                    <span>{t('instruction-body')}</span>
                </div>
                {/* </div> */}
                {/* <div className={s.boxInner}> */}
                <Button onClick={() => navigate(PATH_TESTS_PAGE)}>
                    {isCalibrated
                        ? t('instruction-to-tests-label')
                        : t('instruction-calibration-label')}
                </Button>
                {/* </div> */}
            </div>
        </div>
    );
};

export default InstructionPage;
