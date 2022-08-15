import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeatmapViewer from "../components/heatmapViewer";
import { WebGazerLoader } from "../components/webGazerLoader";
import { PATH_TRY_AGAIN_PAGE, SAVED_USER_KEY, SAVED_USER_RESULT } from "../constants";
import { updateUserData } from "../firebase/api";
// require('./../utils/resizeUtils');

const TestPage = () => {
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    const savedResult = JSON.parse(localStorage.getItem(SAVED_USER_RESULT));
    const [result, setResult] = useState('');
    const navigate = useNavigate();

    const navigateForward = () => navigate(PATH_TRY_AGAIN_PAGE)

    useEffect(() => {
        if (savedResult) {
            navigate(PATH_TRY_AGAIN_PAGE, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savedResult]);

    const processResult = async () => {
        localStorage.setItem(SAVED_USER_RESULT, JSON.stringify(result));
        await updateUserData(savedKey, result, navigateForward)
    }
    return (
        <>
            <WebGazerLoader online={setResult} processResult={processResult} />
            <HeatmapViewer result={result} />
        </>
    )
}

export default TestPage