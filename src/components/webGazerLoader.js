import React, { useEffect, useState } from "react";
import Script from 'react-load-script';
import Calibration from "./gazeCalibration/gazeCalibration";
import { Spinner } from "./spinner/spinner";

export const WebGazerLoader = ({ online, processResult, callback }) => {
    const [isLoading, setLoading] = useState(true)
    const [x, setX] = useState(-1);
    const [y, setY] = useState(-1);
    const [result, setResult] = useState([]);
    const [calibrated, setCalibrated] = useState(false);
    // console.log({ x: x, y: y });

    useEffect(() => {
        if (x !== -1 && y !== x && calibrated) {

            setResult((prev) => [...prev, { x, y }])
            // console.log({ x, y });
            online(result);
        }
    }, [x, y])

    // useEffect(() => {
    //     if (!isLoading) {
    //         return (window.webgazer.clearData());
    //     }
    // })

    const handleScriptLoad = () => {
        setLoading(false);
        window.webgazer.setRegression("ridge");
        window.webgazer.setGazeListener(function (data, elapsedTime) {
            if (data == null) {
                return;
            }
            setX(data.x); //these x coordinates are relative to the viewport
            setY(data.y); //these y coordinates are relative to the viewport
        }).begin();
    }

    const handleScriptError = () => {
        setLoading(false)
        console.log('Script loading Error!');
    }

    const onPause = () => {
        window.webgazer.pause();
    }
    const onFinish = () => {
        window.webgazer.pause();
        // window.webgazer.getCurrentPrediction();
        processResult(window.webgazer.getCurrentPrediction());
    }

    return (
        <>
            {isLoading && <Spinner />}
            <Script
                url="js/Webgazer.js"
                // onCreate={setLoading(true)}
                onLoad={handleScriptLoad}
                onError={handleScriptError}
            />
            {!isLoading &&

                (!calibrated ? <Calibration onSuccess={setCalibrated} /> :
                    <div style={{ float: 'right' }}>
                        <button onClick={onPause}> Pause</button>
                        <button onClick={window.webgazer.resume}> Resume</button>
                        <button onClick={onFinish}> Finish</button>
                    </div>
                )
            }
            <canvas id="plotting_canvas" width="500" height="500" style={{ cursor: 'crosshair' }}></canvas>
        </>

    );
}