import React, { useEffect, useRef, useState } from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../modal/modal';

const TestItem = ({ id, title, description, time, stop, resume, testComponent, processResult }) => {
    const { isShowing, toggle } = useModal(true);
    const [started, setStarted] = useState(false);
    const testTimer = useRef(null);
    const [isTimerFinished, setIsTimerFinished] = useState(false);

    const retry = () => {
        stop();
        toggle();
        setStarted(false);
        clearTimeout(testTimer.current);
    };

    const startTest = () => {
        setStarted(true);
        resume();
    };

    useEffect(() => {
        if (isTimerFinished) {
            processResult();
            stop();
        }
    }, [isTimerFinished, processResult]);

    useEffect(() => {
        if (time > 0 && started && !testTimer.current) {
            testTimer.current = setTimeout(() => {
                setIsTimerFinished(true);
                console.log('Time is over');
            }, time);
        }
    }, [started, time, processResult]);

    useEffect(() => {
        return () => {
            if (time) {
                clearTimeout(testTimer.current);
            }
        };
    }, []);

    return (
        <div>
            <Modal
                isShowing={isShowing}
                action={startTest}
                hide={toggle}
                header={title}
                bodyContent={description}
            />
            {testComponent}
            <button onClick={retry}>Retry</button>
            <button onClick={stop}>stop</button>
        </div>
    );
};

export default TestItem;
