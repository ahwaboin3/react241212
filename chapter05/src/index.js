//사용하지 않는 파일 삭제하기
//src/App.test.js
//src/logo.svg
//src/reportWebVitals.js
//src/setupTest.js

//사용하지 않을 코드 삭제하기
//repostWebVitals는 앞서 삭제한 파일입니다. 임포트 문을 삭제했습니다.
//React.StrictMode 리액트 앱 내부의 잠재적인 문제를 검사하거나 코드상의 부작용을 탐지하거나 구버전 리액트 기능을 사용하는지 등을 살핍니다.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
