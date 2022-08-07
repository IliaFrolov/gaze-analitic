import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import SignInPage from './pages/signIn';
import ResultsPage from './pages/results';
import TryAgainPage from './pages/tryAgain';
import TestPage from "./pages/test";
import { PATH_HOME, PATH_RESULTS_PAGE, PATH_SING_IN_PAGE, PATH_TRY_AGAIN_PAGE, SAVED_USER_KEY, SAVED_USER_NAME, SAVED_USER_RESULT } from "./constants";



const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <ul style={{
          margin: '10px', display: 'flex', gap: '10px', zIndex: '999', position: 'absolute', bottom: '0', right: '0'
        }}>
          <Link to={PATH_HOME}>Test</Link>
          <Link to={PATH_RESULTS_PAGE}>Results</Link>
          <Link to={PATH_TRY_AGAIN_PAGE}>Tryagain</Link>
          <Link to={PATH_SING_IN_PAGE}>Login</Link>
        </ul>
        <Routes>
          <Route path={PATH_SING_IN_PAGE} element={<SignInPage />} />
          <Route path={PATH_HOME} element={<RequireAuth><TestPage /></RequireAuth>} />
          <Route path={PATH_RESULTS_PAGE} element={<RequireAuth><ResultsPage /></RequireAuth>} />
          <Route path={PATH_TRY_AGAIN_PAGE} element={<RequireAuth><TryAgainPage /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

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
