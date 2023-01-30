import React from 'react';
import ReactDOM from 'react-dom/client';
import * as firebase from 'firebase/app';
import 'firebase/database';
import config from './firebaseConfig';
import App from './App';
import './index.css';
import './i18n.js';

firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
