import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal';
import TestItem from '../../components/testItem';
import TestSwitcher from '../../components/testSwitcher';
import { WebGazerLoader } from '../../components/webGazerLoader';
import {
    PATH_RESULTS_PAGE,
    SAVED_USER_IS_CALIBRATED,
    SAVED_USER_KEY,
    SAVED_USER_HAS_RESULT,
} from '../../constants';
import { pushUserResult } from '../../firebase/api';
import useModal from '../../hooks/useModal';
import Logout from './../../components/logout';
import tests from '../../testScreens';
// require('./../utils/resizeUtils');

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
        // window.localstream.getTracks()[0].stop();
        navigator.getUserMedia(
            { audio: false, video: true },
            function (stream) {
                // can also use getAudioTracks() or getVideoTracks()
                var track = stream.getTracks()[0]; // if only one media track
                // ...
                track.stop();
            },
            function (error) {
                console.log('getUserMedia() error', error);
            },
        );
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
                bodyText={'Now you can view your results or logout and try again'}
            />
        </>
    );
};

export { tests };
export default TestPage;
