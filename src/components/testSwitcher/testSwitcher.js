import React, { useState } from 'react';
import TestItem from '../testItem';

const TestSwitcher = ({ tests = [], start, stop, processResult, finishTesting }) => {
    const testAmount = tests.length;
    // const [currentTest, setCurrentTest] = useState(null);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [testsIsFinished, setFinished] = useState(false);
    const isLast = currentIdx + 1 === testAmount;

    const goNext = () => {
        if (isLast) {
            console.log('finishTesting');
            setFinished(true);
            finishTesting();
        } else {
            console.log('next');
            setCurrentIdx((prev) => ++prev);
        }
    };

    if (testsIsFinished) return null;
    return (
        <TestItem
            key={currentIdx}
            {...tests[currentIdx]}
            goNext={goNext}
            stop={stop}
            start={start}
            processResult={processResult}
            isLast={isLast}
        />
    );
};

export default TestSwitcher;
