import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH_SING_IN_PAGE, SAVED_USER_KEY, SAVED_USER_NAME, SAVED_USER_RESULT } from "../constants";

const TryAgainPage = () => {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem(SAVED_USER_NAME);
        localStorage.removeItem(SAVED_USER_KEY);
        localStorage.removeItem(SAVED_USER_RESULT);
        navigate(PATH_SING_IN_PAGE);
    }

    return (
        <>
            <h2>{`${String(savedName)} you have already passed the test`}</h2>
            <p>If you want to check results go <Link to="../results">Results</Link></p>
            <p>If you want to pass it again like new user press <button onClick={Logout}>Log out</button></p>
        </>

    )
}

export default TryAgainPage