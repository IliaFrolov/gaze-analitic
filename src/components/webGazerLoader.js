import React, { useEffect, useState } from "react";
import Script from 'react-load-script';
import { Spinner } from "./spinner/spinner";

export const WebGazerLoader = ({ online, processResult, callback }) => {
    const [isLoading, setLoading] = useState(true)
    const [x, setX] = useState(-1);
    const [y, setY] = useState(-1);
    const [result, setResult] = useState([]);
    const [calibrated, setCalibrated] = useState(false);
    // console.log({ x: x, y: y });

    useEffect(() => {
        if (x !== -1 && y !== x) {

            setResult((prev) => [...prev, { x, y }])
            // console.log({ x, y });
            online(result);
        }
    }, [x, y])

    const handleScriptLoad = () => {
        setLoading(false);
        window.webgazer.setRegression("ridge");
        window.webgazer.setGazeListener(function (data, elapsedTime) {
            if (data == null) {
                return;
            }
            setX(data.x); //these x coordinates are relative to the viewport
            setY(data.y); //these y coordinates are relative to the viewport
            //console.log(elapsedTime); //elapsed time is based on time since begin was called
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
                <div style={{ float: 'right' }}>
                    <button onClick={onPause}> Pause</button>
                    <button onClick={window.webgazer.resume}> Resume</button>
                    <button onClick={onFinish}> Finish</button>
                </div>
            }
        </>

    );
}