import React, { useEffect, useState } from "react";
import cn from "classnames";
import s from "./gazeCalibration.module.css"

const Calibration = () => {
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
    const [calibrationPoints, setCalibrationPoints] = useState(defaultCalibrationButtons);
    const [pointCalibrate, setPointCalibrate] = useState(0);
    const [id5IsVisible, setId5IsVisible] = useState(false);

    console.log({ pointCalibrate });
    const store_points_variable = () => {
        window.webgazer.params.storingPoints = true;
    }
    const stop_storing_points_variable = () => {
        window.webgazer.params.storingPoints = false;
    }

    const incrementPressedTimes = (id, prev) => {
        return ({ ...prev, [id]: { ...prev[id], pressedTimes: prev[id].pressedTimes + 1 } }
        )
    }

    const setPassed = (id, prev) => (
        { ...prev, [id]: { ...prev[id], passed: true } }
    )

    useEffect(() => {
        for (const btnInx in calibrationPoints) {
            const btn = calibrationPoints[btnInx]
            if (btn.pressedTimes === 5 && !btn.passed) {
                setCalibrationPoints((prev) => setPassed(btnInx, prev))
                setPointCalibrate((prev) => ++prev)
            }
        }
        if (pointCalibrate === 8) { setId5IsVisible(true) }
    }, [calibrationPoints])

    const onCalibrationButtonClick = (e) => {
        const id = e.target.id;
        setCalibrationPoints((prev) => incrementPressedTimes(id, prev))
    }
    const renderButtons = () => {
        return Object.keys(calibrationPoints).map((btnInx) => {
            const btn = calibrationPoints[btnInx]
            const opacity = (btn.pressedTimes + 1) * 0.2;
            const is5thVisible = btnInx !== 'id5' || id5IsVisible
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
    return (
        <div className={s.calibrationWrapper}>
            {renderButtons()}
        </div>
    )
}

export default Calibration;