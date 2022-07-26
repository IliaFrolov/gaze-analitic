import React, { useState } from "react";
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import config from "./firebase-config";

function App() {
  const s = (a) => JSON.stringify(a, null, 2);
  const [limit, setLimit] = useState(2);

  return (
    <div className="App">
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <FirebaseDatabaseNode
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
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
    </div>
  );
}

export default App;
