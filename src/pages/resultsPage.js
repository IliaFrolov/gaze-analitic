import React, { useEffect, useState } from "react";
import HeatmapViewer from "../components/heatmapViewer";
import { SAVED_USER_KEY, SAVED_USER_NAME, SAVED_USER_RESULT } from "../constants";
import { getUserData } from "../firebase/api";

const ResultsPage = () => {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));

    const savedResult = JSON.parse(localStorage.getItem(SAVED_USER_RESULT));
    const [result, setResult] = useState('');

    useEffect(() => {
        getUserData(savedKey, (res) => setResult(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log('savedResult', savedResult);
    return (
        <>
            <p>Results of {savedName}</p>
            <HeatmapViewer result={result} />
        </>
    )
}

export default ResultsPage