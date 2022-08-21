import React, { useEffect, useRef, useState } from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../modal/modal';

const TestItem = ({
    id,
    title,
    startDescription,
    endDescription,
    time,
    stop,
    start,
    testComponent,
    processResult,
    goNext,
    isLast,
}) => {
    const { isShowing: startModalShow, toggle: toggleStartModal } = useModal(true);
    const { isShowing: endModalShow, toggle: toggleEndModal } = useModal(false);
    const [started, setStarted] = useState(false);
    const testTimer = useRef(null);
    const [isTimerFinished, setIsTimerFinished] = useState(false);
    const [isProcessed, setIsProcessed] = useState(false);

    const startTest = () => {
        setStarted(true);
        start();
    };

    useEffect(() => {
        if (isTimerFinished && !isProcessed) {
            const screenSize = { height: window.innerHeight, width: window.innerWidth };
            setIsProcessed(true);
            processResult(id, screenSize);
            stop(isLast);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTimerFinished, processResult, isProcessed]);

    useEffect(() => {
        if (time > 0 && started && !testTimer.current) {
            console.log('Created timer');
            testTimer.current = setTimeout(() => {
                setIsTimerFinished(true);
                toggleEndModal();
                console.log('Time is over');
            }, time);
        }
    }, [started, time, processResult, id, toggleEndModal]);

    useEffect(() => {
        return () => {
            if (time) {
                clearTimeout(testTimer.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log('Timer', testTimer.current);
    return (
        <>
            <Modal
                isShowing={startModalShow}
                action={startTest}
                hide={toggleStartModal}
                header={title}
                bodyText={startDescription}
                b
            />
            {testComponent}
            <Modal
                isShowing={endModalShow}
                action={goNext}
                hide={toggleEndModal}
                header={title}
                bodyText={endDescription}
                buttonLabel={isLast ? 'Ok' : 'Next'}
            />
            {/* <button onClick={retry}>Retry</button> */}
        </>
    );
};

export default TestItem;
