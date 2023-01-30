import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignInPage from './pages/signinPage/signInPage';
import ResultsPage from './pages/resultsPage';
import TestPage from './pages/testsPage/testsPage';
import {
    PATH_HOME,
    PATH_INSTRUCTIONS_PAGE,
    PATH_RESULTS_PAGE,
    PATH_SING_IN_PAGE,
    PATH_TESTS_PAGE,
    SAVED_USER_KEY,
    SAVED_USER_NAME,
} from './constants';
import HeatmapViewer from './components/heatmapViewer';
import InstructionPage from './pages/instructionPage';
import WelcomePage from './pages/welcomePage';
import generateSampleHeatMap from './utils/generateBg';

const App = () => {
    const [randomHeatmap, setRandomHeatmap] = useState([]);

    useEffect(() => {
        setRandomHeatmap(generateSampleHeatMap());
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={PATH_SING_IN_PAGE} element={<SignInPage />} />
                    <Route path={PATH_HOME} element={<WelcomePage />} />
                    <Route
                        path={PATH_INSTRUCTIONS_PAGE}
                        element={
                            <RequireAuth>
                                <InstructionPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path={PATH_TESTS_PAGE}
                        element={
                            <RequireAuth>
                                <TestPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path={PATH_RESULTS_PAGE}
                        element={
                            <RequireAuth>
                                <ResultsPage />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <HeatmapViewer
                config={{
                    radius: 50,
                    maxOpacity: 0.9,
                    minOpacity: 0,
                    blur: 1,
                }}
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                }}
                id="backgroundHeatmap"
                result={randomHeatmap}
            />
        </div>
    );
};

function RequireAuth({ children }) {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    let location = useLocation();

    if (!savedName || !savedKey) {
        return <Navigate to={PATH_HOME} state={{ from: location }} replace />;
    }

    return children;
}

export default App;
