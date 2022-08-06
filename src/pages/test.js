import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GazeCloudAPILoader } from "../components/gazeApiLoader";
import { PATH_TRY_AGAIN_PAGE, SAVED_USER_KEY, SAVED_USER_RESULT } from "../constants";
import { updateUserData } from "../firebase/api";

const TestPage = () => {
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    const savedResult = JSON.parse(localStorage.getItem(SAVED_USER_RESULT));
    const [result, setResult] = useState('');
    const navigate = useNavigate();
    // const [script1IsLoaded, setScript1IsLoaded] = useState(false);
    // const [script2IsLoaded, setScript2IsLoaded] = useState(false)

    useEffect(() => {
        if (savedResult) {
            navigate(PATH_TRY_AGAIN_PAGE, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     if (script1IsLoaded && script2IsLoaded) {
    //         function processGaze(GazeData) {
    //             var x_ = GazeData.docX;
    //             var y_ = GazeData.docY;
    //             document.getElementById("gazeX").innerHTML = x_;//GazeData.GazeX;
    //             document.getElementById("gazeY").innerHTML = y_;//GazeData.GazeY;

    //             this.setState({ context: { x: x_, y: y_ } });

    //             var gaze = document.getElementById("gaze");
    //             x_ -= gaze.clientWidth / 2;
    //             y_ -= gaze.clientHeight / 2;

    //             // console.log(x_, y_);

    //             gaze.style.left = x_ + "px";
    //             gaze.style.top = y_ + "px";

    //             if (GazeData.state !== 0) {
    //                 if (gaze.style.display === 'block')
    //                     gaze.style.display = 'none';
    //             } else {
    //                 if (gaze.style.display === 'none')
    //                     gaze.style.display = 'block';
    //             }


    //         }
    //         GazeCloudAPI.OnCalibrationComplete = function () {
    //             console.log('gaze Calibration Complete');
    //         }
    //         GazeCloudAPI.OnCamDenied = function () { console.log('camera access denied') }
    //         GazeCloudAPI.OnError = function (msg) { console.log('err: ' + msg) }
    //         GazeCloudAPI.UseClickRecalibration = true;
    //         GazeCloudAPI.OnResult = processGaze.bind(this);
    //     }
    // })
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = 'js/GazeCloudAPI.js';
    //     script.async = true;
    //     script.onload = () => setScript1IsLoaded(true);

    //     document.body.appendChild(script);
    // })

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "js/GazeRecorderAPI.js";
    //     script.async = true;
    //     script.onload = () => setScript2IsLoaded(true);

    //     document.body.appendChild(script);
    // })

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     updateUserData(savedKey, result, () => {
    //         localStorage.setItem(SAVED_USER_RESULT, JSON.stringify(result));
    //     });
    //     setResult('');
    //     console.log({ result });
    // }
    // window.GazeCloudAPI.OnCalibrationComplete = function () {
    //     console.log('gaze Calibration Complete');
    // }
    return (
        <>

            <GazeCloudAPILoader callback={(res) => console.log('callback', res)} />
            <div id='gaze' style={{ position: "absolute", background: 'red', width: '10px', height: '10px', borderRadius: '50%', zIndex: '999' }} />
            <div id='gazeX' />
            <div id='gazeY' />
            {/* {script1IsLoaded && script2IsLoaded && <>
                <button onClick={window.GazeCloudAPI.StartEyeTracking()}>Run</button>
                <button onClick={() => {
                    window.GazeCloudAPI.StopEyeTracking();
                    setResult(window.GazeRecorderAPI.GetRecData());
                    console.log(result);
                }
                }>Stop</button>
            </>} */}
        </>
    )
}

export default TestPage