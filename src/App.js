import React, { useState } from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from './pages/login';
import ResultsPage from './pages/results';
import TryAgainPage from './pages/try-again';
import TestPage from "./pages/test";


const App = () => {
  const s = (a) => JSON.stringify(a, null, 2);
  const [limit, setLimit] = useState(2);

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">Test</Link></li>
          <li><Link to="/results">Results</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/tryagain">tryagain</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="tryagain" element={<TryAgainPage />} />
        </Routes>
      </BrowserRouter>
      {/* <FirebaseDatabaseNode
          path="users/"
          limitToFirst={limit}
        >
          {d => {
            return (
              <>
                <pre>Path {d.path}</pre>
                <pre style={{ height: 300, overflow: "auto" }}>
                  Value {s(d.value)}
                </pre>
                <button
                  onClick={() => {
                    setLimit(limit + 2);
                  }}
                >
                  Load more
                </button>
              </>
            );
          }}
        </FirebaseDatabaseNode> */}
    </div>
  );
}

export default App;
