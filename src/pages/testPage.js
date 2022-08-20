import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/modal/modal';
import TestItem from '../components/testItem';
import TestSwitcher from '../components/testSwitcher/testSwitcher';
import { WebGazerLoader } from '../components/webGazerLoader';
import {
    PATH_RESULTS_PAGE,
    SAVED_USER_IS_CALIBRATED,
    SAVED_USER_KEY,
    SAVED_USER_HAS_RESULT,
} from '../constants';
import { pushUserResult } from '../firebase/api';
import useModal from '../hooks/useModal';
import { Logout } from './signInPage';
// require('./../utils/resizeUtils');

const tests = [
    // {
    //     id: 'testId1',
    //     title: 'Test 1',
    //     startDescription: 'what needs to do ... ',
    //     endDescription: 'Thanks for compleating test 1',
    //     time: 5000,
    //     testComponent: (
    //         <div>
    //             <p>Some test text</p>
    //             <button>Button for test</button>
    //         </div>
    //     ),
    // },
    // {
    //     id: 'testId2',
    //     title: 'Test 2',
    //     startDescription: 'what needs to do second time ... ',
    //     endDescription: 'Thanks for compleating test 2',
    //     time: 5000,
    //     testComponent: (
    //         <div>
    //             <p>Some test text</p>
    //             <button>Button for test</button>
    //         </div>
    //     ),
    // },
    {
        id: 'testId3',
        title: 'Test 3',
        startDescription: 'what needs to do second time ... ',
        endDescription: 'Thanks for compleating test 3',
        time: 5000,
        testComponent: (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p>Some test text</p>
                <button>Button for test</button>
            </div>
        ),
    },
];

const TestPage = () => {
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    const hasResult = JSON.parse(localStorage.getItem(SAVED_USER_HAS_RESULT));
    const navigate = useNavigate();
    const { isShowing, toggle } = useModal(false);
    // const navigateForward = () => navigate(PATH_TRY_AGAIN_PAGE)

    useEffect(() => {
        if (hasResult) {
            toggle(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasResult]);

    const pushResult = async (testItemResult) => {
        console.log({ testItemResult });
        // localStorage.setItem(SAVED_USER_RESULT, JSON.stringify({ ...savedResult, testItemResult }));
        await pushUserResult(savedKey, testItemResult, () => console.log('Saved on firebase'));
    };

    const setUserIsCalibrated = () => {
        localStorage.setItem(SAVED_USER_IS_CALIBRATED, true);
    };

    const finishTesting = () => {
        console.log('finishTesting action');
        localStorage.setItem(SAVED_USER_HAS_RESULT, JSON.stringify(true));
        toggle(true);
    };

    return (
        <>
            <WebGazerLoader setUserIsCalibrated={setUserIsCalibrated} compotent={TestItem}>
                {!hasResult
                    ? (sessionResult, aditionalProps) => (
                          <TestSwitcher
                              tests={tests}
                              {...aditionalProps}
                              finishTesting={finishTesting}
                              processResult={(id, screenSize) => {
                                  console.log('processResult', id);
                                  pushResult({ testName: id, result: sessionResult, screenSize });
                              }}
                          />
                      )
                    : null}
            </WebGazerLoader>
            <Modal
                isShowing={isShowing}
                action={[() => Logout(navigate), () => navigate(PATH_RESULTS_PAGE)]}
                buttonLabel={['Logout', 'Results']}
                hide={toggle}
                header={'Thank you for passing all tests'}
                bodyContent={'Now you can view your results or logout and try again'}
            />
        </>
    );
};

export { tests };
export default TestPage;
