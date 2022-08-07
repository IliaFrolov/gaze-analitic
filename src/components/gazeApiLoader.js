import React, { useEffect, useState } from "react";
import Script from 'react-load-script';
import * as heatmap from "heatmap.js";
// FrameNr: 2253
// GazeX: 1131.8
// GazeY: 367.8
// HeadPitch: 36
// HeadRoll: 1.6
// HeadX: 2.4
// HeadY: 0
// HeadYaw: 2.5
// HeadZ: 41.9
// Xview: 0.8842187499999999
// Yview: 0.6739906609195403
// docX: 719.7540624999999
// docY: 410.46031250000004
// rh: 223
// rw: 223
// rx: 238
// ry: 186
// state: 0
// time: 1659801534447
export const GazeCloudAPILoader = ({ callback }) => {
    const [x, setX] = useState(-1);
    const [y, setY] = useState(-1);
    const [result, setResult] = useState([]);
    const [calibrated, setCalibrated] = useState(false);
    // console.log({ x: x, y: y });

    useEffect(() => {
        if (x !== -1 && y !== x && calibrated) {
            setResult((prev) => [...prev, { x, y }])
        }
    }, [x, y])

    // useEffect(() => {
    //     if (calibrated) {
    //         setTimeout(() => {
    //             onStop();
    //             console.log('Stoped by time');
    //         }, 59900)
    //     }
    // }, [calibrated])

    const handleScriptLoad = () => {
        function processGaze(GazeData) {
            // console.log(GazeData);
            let x_ = GazeData.docX;
            let y_ = GazeData.docY;
            document.getElementById("gazeX").innerHTML = x_;//GazeData.GazeX;
            document.getElementById("gazeY").innerHTML = y_;//GazeData.GazeY;

            setX(x_);
            setY(y_);

            var gaze = document.getElementById("gaze");
            x_ -= gaze.clientWidth / 2;
            y_ -= gaze.clientHeight / 2;

            // console.log(x_, y_);

            gaze.style.left = x_ + "px";
            gaze.style.top = y_ + "px";

            // console.log(GazeData.state);

            if (GazeData.state !== 0) {
                if (gaze.style.display === 'block')
                    gaze.style.display = 'none';
            } else {
                if (gaze.style.display === 'none')
                    gaze.style.display = 'block';
            }
        }

        window.GazeCloudAPI.OnCalibrationComplete = function () {
            setCalibrated(true);
            console.log('gaze Calibration Complete');
        }
        window.GazeCloudAPI.OnCamDenied = function () { console.log('camera access denied') }
        window.GazeCloudAPI.OnError = function (msg) { console.log('err: ' + msg) }
        // window.GazeCloudAPI.UseClickRecalibration = true;
        window.GazeCloudAPI.OnResult = processGaze;

    }

    const handleScriptError = () => {
        console.log('Script loading Error!');
    }

    const onStop = () => {
        window.GazeCloudAPI.StopEyeTracking();
        callback(result);
    }
    // console.log(result);

    return (
        <>
            <Script
                url="https://api.gazerecorder.com/GazeCloudAPI.js"
                onLoad={handleScriptLoad}
                onError={handleScriptError}
            />
            <button onClick={() => window.GazeCloudAPI.StartEyeTracking()}> Calibrate </button>
            <button onClick={onStop}> Stop Tracking </button>
        </>

    );
}