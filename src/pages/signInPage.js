
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_HOME, PATH_TRY_AGAIN_PAGE, SAVED_USER_KEY, SAVED_USER_NAME } from "../constants";
import { createUser } from "../firebase/api";
import s from './pages.module.css';

const SignInPage = () => {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));

    const [name, setName] = useState("");
    const [isValid, setValid] = useState(false)


    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (savedName && savedKey) {
            navigate(PATH_TRY_AGAIN_PAGE, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savedName, savedKey]);

    const handleValidation = () => {
        setError(null);
        let errors = [];
        let formIsValid = true;
        setValid(formIsValid);
        if (name.length < 3) { errors.push('too short name'); formIsValid = false; };
        if (name.length > 10) { errors.push('too long name'); formIsValid = false; };
        setError(errors.join(', '))
        setValid(formIsValid);
        return (formIsValid);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (handleValidation()) {
            localStorage.setItem(SAVED_USER_NAME, JSON.stringify(name));

            createUser(name, (key) => {
                localStorage.setItem(SAVED_USER_KEY, JSON.stringify(key));
                navigate(PATH_HOME);
            });
        };
    };


    return (
        <div className={s.flexFullScreenCenterCenter}>
            <form className={s.flexCenterAuto}>
                <div>
                    <input
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
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <button
                        disabled={!isValid}
                        onClick={onSubmit}
                    >
                        Start
                    </button>
                </div>

            </form>
        </div>



    )
}

export default SignInPage