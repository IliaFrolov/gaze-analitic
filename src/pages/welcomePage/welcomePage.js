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
                    <h1>{t('welcome')}</h1>
                    <LangSwitcher className={s.lang} />
                </div>
                <div className={s.text}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim,
                        nulla at facilisis porttitor, odio orci sodales sem, faucibus scelerisque
                        libero urna sit amet erat. Duis ipsum erat, luctus id ultricies in, sodales
                        sed erat. Etiam vitae nunc sem. Donec in metus odio. Morbi luctus ligula
                        elementum odio dignissim, eget vehicula lacus posuere. In sed sem tincidunt
                        magna mattis rutrum. Phasellus suscipit a mauris iaculis vestibulum. Vivamus
                        id placerat justo. Praesent ut egestas risus, eu eleifend odio. Cras
                        viverra, erat id porttitor sollicitudin, ipsum mauris fringilla odio, sit
                        amet varius purus sapien id erat. Vestibulum nec lorem vitae ipsum posuere
                        posuere. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Phasellus aliquam, lorem sit amet
                        ullamcorper interdum, tortor velit euismod odio, at tempus dolor erat
                        consequat purus. Duis vel sapien nulla. Phasellus orci dui, porta id
                        vulputate vel, congue eu mi.
                    </span>
                </div>
                <SigninForm nextPath={PATH_INSTRUCTIONS_PAGE} className={s.form} />
            </div>
        </div>
    );
};

export default WelcomePage;
