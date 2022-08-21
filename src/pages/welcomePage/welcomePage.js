import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SigninForm from '../../components/signinForm';
import { PATH_INSTRUCTIONS_PAGE, SAVED_USER_KEY, SAVED_USER_NAME } from '../../constants';
import gs from './../../styles/global.module.css';
import s from './welcomePage.module.css';
import { useTranslation } from 'react-i18next';
import LangSwitcher from '../../components/langSwitcher';

const WelcomePage = () => {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));

    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        if (savedName && savedKey) {
            navigate(PATH_INSTRUCTIONS_PAGE, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savedName, savedKey]);

    return (
        <div className={gs.flexFullScreenCenterCenter}>
            <div className={classNames(gs.box, s.box)}>
                <div className={s.header}>
                    <h1>{t('welcome-header')}</h1>
                    <LangSwitcher className={s.lang} />
                </div>
                <div className={s.text}>
                    <span>{t('welcome-body')}</span>
                </div>
                <SigninForm nextPath={PATH_INSTRUCTIONS_PAGE} className={s.form} />
            </div>
        </div>
    );
};

export default WelcomePage;
