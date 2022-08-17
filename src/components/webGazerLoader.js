import React, { useEffect, useState } from "react";
import Script from 'react-load-script';
import Calibration from "./gazeCalibration";
import Spinner from "./spinner";

export const WebGazerLoader = ({ online, processResult, children }) => {
    const [isLoading, setLoading] = useState(true)
    const [x, setX] = useState(-1);
    const [y, setY] = useState(-1);
    const [sessionResult, setSessionResult] = useState([]);
    const [result, setResult] = useState([]);
    const [calibrated, setCalibrated] = useState(false);
    const [webgazerInstance, setWebgazerInstance] = useState(null);

    useEffect(() => {
        if (x !== -1 && y !== x && calibrated) {
            setSessionResult((prev) => [...prev, { x, y }])
            online(result);
            console.log({ sessionResult });
        }
    }, [x, y])

    useEffect(() => {
        console.log({ result });
    }, [result])

    const handleScriptLoad = () => {
        setLoading(false);
        window.webgazer.setRegression("ridge");
        setWebgazerInstance(window.webgazer.setGazeListener(function (data, elapsedTime) {
            if (data == null) {
                return;
            }
            setX(data.x);
            setY(data.y);
        }))
    }

    const handleScriptError = () => {
        setLoading(false)
        console.log('Script loading Error!');
    }

    const start = () => {
        if (!isLoading) {
            setSessionResult([]);
            webgazerInstance.begin();
        }
    }

    const pause = async () => {
        window.webgazer.pause();
        setResult(sessionResult);
    }

    const resume = () => {
        setSessionResult([]);
        window.webgazer.resume();
    }

    const finish = async () => {
        window.webgazer.pause();
        setResult(sessionResult);
    }

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { start, pause, resume, finish });
        }
        console.log('!isValidElement');
        return child;
    });

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
                    <button onClick={pause}> Pause</button>
                    <button onClick={resume}> Resume</button>
                    <button onClick={finish}> Finish</button>
                </div>}

            {!isLoading && (!calibrated ? <Calibration start={start} pause={pause} resume={resume} finish={finish} onSuccess={setCalibrated} /> : childrenWithProps)
            }
            <canvas id="plotting_canvas" width="500" height="500" style={{ display: 'none', cursor: 'crosshair' }}></canvas>
        </>

    );
}