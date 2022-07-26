import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TryAgainPage = () => {
    const user = JSON.parse(localStorage.getItem("name"));
    console.log({ user });
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("key");
        navigate("../login");
    }

    return (
        <>
            <h2>{`${String(user)} you have already passed the test`}</h2>
            <p>If you want to check results go <Link to="../results">Results</Link></p>
            <p>If you want to pass it again like new user press <button onClick={Logout}>Log out</button></p>
        </>

    )
}

export default TryAgainPage