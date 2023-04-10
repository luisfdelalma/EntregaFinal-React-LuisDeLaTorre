import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5UPoKDvspr8t5TYfTT2tIjIulxAzZ2_M",
  authDomain: "todomotos-6f86e.firebaseapp.com",
  projectId: "todomotos-6f86e",
  storageBucket: "todomotos-6f86e.appspot.com",
  messagingSenderId: "961612964280",
  appId: "1:961612964280:web:21b35be8fc0409502faf4d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
