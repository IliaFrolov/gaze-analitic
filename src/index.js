import React from 'react';
import ReactDOM from 'react-dom/client';
import firebase from "firebase/app";
import "firebase/database";
import config from "./firebase-config";
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <App />
    </FirebaseDatabaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
