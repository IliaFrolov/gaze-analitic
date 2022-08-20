import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/botton';
import {
    PATH_HOME,
    PATH_SING_IN_PAGE,
    SAVED_USER_IS_CALIBRATED,
    SAVED_USER_KEY,
    SAVED_USER_NAME,
    SAVED_USER_HAS_RESULT,
} from '../constants';
import { createUser } from '../firebase/api';
import gs from './../styles/global.module.css';
import s from './signInPage.module.css';

const Logout = (navigate) => {
    localStorage.removeItem(SAVED_USER_NAME);
    localStorage.removeItem(SAVED_USER_KEY);
    localStorage.removeItem(SAVED_USER_HAS_RESULT);
    localStorage.removeItem(SAVED_USER_IS_CALIBRATED);
    navigate(PATH_SING_IN_PAGE);
};

const SignInPage = () => {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));

    const [name, setName] = useState('');
    const [isValid, setValid] = useState(false);

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (savedName && savedKey) {
            navigate(PATH_HOME, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savedName, savedKey]);

    const handleValidation = () => {
        setError(null);
        let errors = [];
        let formIsValid = true;
        setValid(formIsValid);
        if (name.length < 3) {
            errors.push('too short name');
            formIsValid = false;
        }
        if (name.length > 10) {
            errors.push('too long name');
            formIsValid = false;
        }
        setError(errors.join(', '));
        setValid(formIsValid);
        return formIsValid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (handleValidation()) {
            localStorage.setItem(SAVED_USER_NAME, JSON.stringify(name));

            createUser(name, (key) => {
                localStorage.setItem(SAVED_USER_KEY, JSON.stringify(key));
                navigate(PATH_HOME);
            });
        }
    };

    return (
        <div className={gs.flexFullScreenCenterCenter}>
            <form className={classNames(gs.flexWrapperRowCenter, gs.box)}>
                <div style={{ position: 'relative' }}>
                    <input
                        className={s.input}
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            handleValidation();
                        }}
                        onBlur={handleValidation}
                        placeholder="Full name"
                        aria-label="fullname"
                    />
                    {error && (
                        <p
                            style={{
                                top: '100%',
                                color: 'red',
                                position: 'absolute',
                                width: '100%',
                                textAlign: 'center',
                                margin: '0.5rem 0',
                            }}
                        >
                            {error}
                        </p>
                    )}
                </div>

                <div>
                    <Button disabled={!isValid} onClick={onSubmit}>
                        Start
                    </Button>
                </div>
            </form>
        </div>
    );
};
export { Logout };
export default SignInPage;
