/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import { SAVED_USER_KEY, SAVED_USER_NAME } from '../../constants';
import { createUser } from '../../firebase/api';
// import gs from './../../styles/global.module.css';
import s from './signinForm.module.css';
import Checkbox from '../checkbox/checkbox';
import useModal from '../../hooks/useModal';
import Modal from '../modal';

const SignInForm = ({ className, nextPath }) => {
    const [name, setName] = useState('');
    const [isValid, setValid] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const [isBlured, setIsBlured] = useState(false);
    const { isShowing, toggle } = useModal();

    const [error, setError] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (isBlured) handleValidation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, isAccepted, isBlured]);

    const handleValidation = () => {
        setError(null);
        let errors = {};
        let formIsValid = true;
        setValid(formIsValid);
        if (name.length < 3) {
            errors.name = 'too short name';
            formIsValid = false;
        }
        if (name.length > 10) {
            errors.name = 'too long name';
            formIsValid = false;
        }
        if (!isAccepted) {
            errors.tac = 'needs accept terms and conditions';
            formIsValid = false;
        }
        setError(errors);
        setValid(formIsValid);
        return formIsValid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            localStorage.setItem(SAVED_USER_NAME, JSON.stringify(name));

            createUser(name, (key) => {
                localStorage.setItem(SAVED_USER_KEY, JSON.stringify(key));
                nextPath && navigate(nextPath);
            });
        }
    };
    const tacContent = (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, nulla at
                facilisis porttitor, odio orci sodales sem, faucibus scelerisque libero urna sit
                amet erat. Duis ipsum erat, luctus id ultricies in, sodales sed erat. Etiam vitae
                nunc sem. Donec in metus odio. Morbi luctus ligula elementum odio dignissim, eget
                vehicula lacus posuere. In sed sem tincidunt magna mattis rutrum. Phasellus suscipit
                a mauris iaculis vestibulum. Vivamus id placerat justo. Praesent ut egestas risus,
                eu eleifend odio. Cras viverra, erat id porttitor sollicitudin, ipsum mauris
                fringilla odio, sit amet varius purus sapien id erat. Vestibulum nec lorem vitae
                ipsum posuere posuere. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Phasellus aliquam, lorem sit amet ullamcorper
                interdum, tortor velit euismod odio, at tempus dolor erat consequat purus. Duis vel
                sapien nulla. Phasellus orci dui, porta id vulputate vel, congue eu mi.
            </p>
            <p>
                <a target="_blank" href="*">
                    Link on project github repo
                </a>
            </p>
            <p>
                <a target="_blank" href="*">
                    Link on repo of webgazer
                </a>
            </p>
        </div>
    );
    return (
        <>
            <form className={classNames(s.form, className)}>
                <div className={s.inputLine}>
                    <input
                        className={s.input}
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            // handleValidation();
                        }}
                        onBlur={() => setIsBlured(true)}
                        placeholder="Nick name"
                        aria-label="Nick name"
                    />
                    {error.name && <p className={s.error}>{error.name}</p>}
                </div>
                <div className={s.inputLine}>
                    <Checkbox
                        checked={isAccepted}
                        onChange={() => {
                            setIsAccepted((prev) => !prev);
                        }}
                    >
                        I'm accept{' '}
                        <a
                            style={{ display: 'contents' }}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                toggle();
                            }}
                        >
                            terms and conditions
                        </a>
                    </Checkbox>
                    {error.tac && <p className={s.error}>{error.tac}</p>}
                </div>

                <div className={s.inputLine}>
                    <Button disabled={!isValid} onClick={onSubmit}>
                        Start
                    </Button>
                </div>
            </form>
            <Modal
                header="Terms and conditions"
                bodyContent={tacContent}
                isShowing={isShowing}
                hide={toggle}
                action={() => setIsAccepted(true)}
                buttonLabel="Accept"
            />
        </>
    );
};

export default SignInForm;
