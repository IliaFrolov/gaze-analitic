import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignInPage from './pages/signInPage';
import ResultsPage from './pages/resultsPage';
import GazeCalibration from './components/gazeCalibration/gazeCalibration';
import TestPage from './pages/testPage';
import {
    PATH_CALIBRATION_PAGE,
    PATH_HOME,
    PATH_RESULTS_PAGE,
    PATH_SING_IN_PAGE,
    SAVED_USER_KEY,
    SAVED_USER_NAME,
} from './constants';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                {/* <ul style={{
          margin: '10px', display: 'flex', gap: '10px', zIndex: '2', position: 'absolute', bottom: '0', right: '0'
        }}>
          <Link to={PATH_CALIBRATION_PAGE}>Clibration</Link>
          <Link to={PATH_HOME}>Test</Link>
          <Link to={PATH_RESULTS_PAGE}>Results</Link>
          <Link to={PATH_TRY_AGAIN_PAGE}>Tryagain</Link>
          <Link to={PATH_SING_IN_PAGE}>Login</Link>
        </ul> */}
                <Routes>
                    <Route path={PATH_CALIBRATION_PAGE} element={<GazeCalibration />} />
                    <Route path={PATH_SING_IN_PAGE} element={<SignInPage />} />
                    <Route
                        path={PATH_HOME}
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
        </div>
    );
};

function RequireAuth({ children }) {
    const savedName = JSON.parse(localStorage.getItem(SAVED_USER_NAME));
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    let location = useLocation();

    if (!savedName || !savedKey) {
        return <Navigate to={PATH_SING_IN_PAGE} state={{ from: location }} replace />;
    }

    return children;
}

export default App;
