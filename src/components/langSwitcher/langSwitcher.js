import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { USER_LANG } from '../../constants';
import Button from '../button';
import gs from './../../styles/global.module.css';

const LangSwitcher = ({ className }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const changeLanguageHandler = (lang) => {
        const languageValue = lang;
        i18n.changeLanguage(languageValue);
        localStorage.setItem(USER_LANG, JSON.stringify(lang));
    };
    return (
        <div className={classNames(gs.flexWrapperRowCenter, className)}>
            <Button
                size="sm"
                puched={currentLang === 'en'}
                onClick={() => changeLanguageHandler('en')}
            >
                EN
            </Button>
            <Button
                size="sm"
                puched={currentLang === 'ua'}
                onClick={() => changeLanguageHandler('ua')}
            >
                UA
            </Button>
        </div>
    );
};

export default LangSwitcher;
