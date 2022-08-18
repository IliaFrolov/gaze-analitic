import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeatmapViewer from '../components/heatmapViewer';
import TestItem from '../components/testItem';
import { WebGazerLoader } from '../components/webGazerLoader';
import {
    PATH_TRY_AGAIN_PAGE,
    SAVED_USER_IS_CALIBRATED,
    SAVED_USER_KEY,
    SAVED_USER_RESULT,
} from '../constants';
import { updateUserData, pushUserResult } from '../firebase/api';
// require('./../utils/resizeUtils');

const TestPage = () => {
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    const savedResult = JSON.parse(localStorage.getItem(SAVED_USER_RESULT));
    const [result, setResult] = useState('');
    const navigate = useNavigate();

    // const navigateForward = () => navigate(PATH_TRY_AGAIN_PAGE)

    useEffect(() => {
        if (savedResult) {
            navigate(PATH_TRY_AGAIN_PAGE, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [savedResult]);

    const pushResult = async (testItemResult) => {
        console.log({ testItemResult });
        // localStorage.setItem(SAVED_USER_RESULT, JSON.stringify({ ...savedResult, testItemResult }));
        await pushUserResult(savedKey, testItemResult, () => console.log('Saved on firebase'));
    };

    const setUserIsCalibrated = () => {
        localStorage.setItem(SAVED_USER_IS_CALIBRATED, true);
    };

    const test1Props = {
        id: 'testId1',
        title: 'Test 1',
        description: 'what needs to do ... ',
        time: 5000,
        testComponent: (
            <div>
                <p>Some test text</p>
                <button>Button for test</button>
            </div>
        ),
    };

    return (
        <WebGazerLoader setUserIsCalibrated={setUserIsCalibrated} compotent={TestItem}>
            {(sessionResult, aditionalProps) => {
                console.log('renderProp', sessionResult);
                return (
                    <>
                        <TestItem
                            {...test1Props}
                            {...aditionalProps}
                            processResult={() => {
                                console.log('processResult', sessionResult);
                                return pushResult({ [test1Props.id]: sessionResult });
                            }}
                        />
                        {/* <TestItem {...test1Props} processResult={()=>pushResult({ [test1Props.id]: sessionResult })} /> */}
                    </>
                );
            }}

            {/* <HeatmapViewer result={result} /> */}
            {/* <TestItem {...test1Props} processResult={pushResult} /> */}

            {/* {webGazeProps => (
                <TestItem {...test1Props} {...webGazeProps} processResult={pushResult} />
            )} */}
        </WebGazerLoader>
    );
};

export default TestPage;
