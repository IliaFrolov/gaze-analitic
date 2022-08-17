import React, { useEffect, useState } from "react";
import cn from "classnames";
import s from "./gazeCalibration.module.css"
import { calculatePrecision } from "../../utils/precisionUtils";
import Modal from "../modal/modal";
import useModal from "../../hooks/useModal";

const Calibration = ({ onSuccess, pause, resume, result, start, finish }) => {
    const defaultCalibrationButtons = {
        id1: { pressedTimes: 0, passed: false },
        id2: { pressedTimes: 0, passed: false },
        id3: { pressedTimes: 0, passed: false },
        id4: { pressedTimes: 0, passed: false },
        id5: { pressedTimes: 0, passed: false },
        id6: { pressedTimes: 0, passed: false },
        id7: { pressedTimes: 0, passed: false },
        id8: { pressedTimes: 0, passed: false },
        id9: { pressedTimes: 0, passed: false },
    }
    const [step, setStep] = useState('1');
    const [calibrationPoints, setCalibrationPoints] = useState(defaultCalibrationButtons);
    const [pointCalibrate, setPointCalibrate] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const idReadyToMeasure = step === '2';

    const { isShowing: isShowing1, toggle: toggle1 } = useModal(true);
    const { isShowing: isShowing2, toggle: toggle2 } = useModal(true);

    const store_points_variable = () => {
        window.webgazer.params.storingPoints = true;
    }
    const stop_storing_points_variable = () => {
        window.webgazer.params.storingPoints = false;
    }

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const incrementPressedTimes = (id, prev) => {
        return ({ ...prev, [id]: { ...prev[id], pressedTimes: prev[id].pressedTimes + 1 } }
        )
    }

    const setPassed = (id, prev) => (
        { ...prev, [id]: { ...prev[id], passed: true } }
    )

    // useEffect(() => {
    //     start();
    // }, [])

    useEffect(() => {
        for (const btnInx in calibrationPoints) {
            const btn = calibrationPoints[btnInx]
            if (btn.pressedTimes === 5 && !btn.passed) {
                setCalibrationPoints((prev) => setPassed(btnInx, prev))
                setPointCalibrate((prev) => ++prev)
            }
        }
        if (pointCalibrate === 8) { setStep('2') }
    }, [calibrationPoints, pointCalibrate]);

    useEffect(() => {
        if (idReadyToMeasure) {
            pause();
        }
    }, [step, idReadyToMeasure]);

    const precisionMeasurement = () => {
        resume();
        store_points_variable();
        sleep(5000).then(() => {
            stop_storing_points_variable(); // stop storing the prediction points
            const past50 = window.webgazer.getStoredPoints(); // retrieve the stored points
            const precision_measurement = calculatePrecision(past50);
            console.log({ precision_measurement });
            pause();
            setAccuracy(precision_measurement);

            setStep('3');

        });
    }

    const onCalibrationButtonClick = (e) => {
        const id = e.target.id;
        setCalibrationPoints((prev) => incrementPressedTimes(id, prev))
    }

    const recalibrate = () => {
        setCalibrationPoints(defaultCalibrationButtons);
        setPointCalibrate(0);
        window.webgazer.clearData();
        setAccuracy(0);
        setStep('1');
        resume();
    }
    const renderButtons = () => {
        return Object.keys(calibrationPoints).map((btnInx) => {
            const btn = calibrationPoints[btnInx]
            const opacity = (btn.pressedTimes + 1) * 0.2;

            const is5thVisible = (btnInx !== 'id5' && !idReadyToMeasure) || (btnInx === 'id5' && idReadyToMeasure);
            return <button
                id={btnInx}
                key={btnInx}
                className={cn(s.calibrationBtn, btn.passed && s.passed, s[`btn-${btnInx}`])}
                style={{ opacity: opacity, visibility: is5thVisible ? "visible" : 'hidden' }}
                onClick={onCalibrationButtonClick}
                disabled={btn.passed}
            ></button>
        })

    }
    const firstStep = () => (
        <div className={s.calibrationWrapper}>
            {renderButtons()}
            <Modal
                header='Calibration'
                bodyText="blabbla blaala"
                isShowing={isShowing1}
                hide={toggle1}
                action={start}
            />
        </div>
    )

    const secondStep = () => (
        <div className={s.calibrationWrapper}>
            <Modal
                header='Precision measurement'
                bodyText="blabbla blaala"
                isShowing={isShowing2}
                hide={toggle2}
                action={precisionMeasurement}
            />
            <button
                id='id5'
                className={cn(s.calibrationBtn, s[`btn-id5`])}
            ></button>
        </div>
    )

    const thirdStep = () => (
        <div className={s.calibrationWrapper}>
            <h3 style={{ marginBottom: '100px' }}>{`Your accuracy measure is ${accuracy} % `}</h3>
            <button onClick={() => onSuccess(true)}>Go to test</button>
            <button onClick={recalibrate}>Recalibrate</button>
        </div>
    )

    switch (step) {
        case '2': return secondStep();
        case '3': return thirdStep();
        default: return firstStep();
    }
}

export default Calibration;