import React, { useEffect, useState } from "react";
import { SAVED_USER_KEY, SAVED_USER_NAME } from "../constants";
import { getUserData } from "../firebase/api";

const ResultsPage = () => {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    const [result, setResult] = useState('');

    useEffect(() => {
        getUserData(savedKey, (res) => setResult(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <p>Results of {savedName}</p>
            <p>{String(result)}</p>
        </>
    )
}

export default ResultsPage