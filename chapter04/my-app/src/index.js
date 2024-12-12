import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import문으로 여러 개의 모듈을 불러옵니다.

//ReactDOM.createRoot()는 인수로 전달한 요소를 리액트 앱의 루트로 만들어 반환하는 메서드입니다.
//여기서 루트(root)란 뿌리라는 뜻이며, 트리 형태의 돔에서 자바스크립트 함수로 작성된 컴포넌트들의 루트 요소를 가리킵니다.
//render 메서드는 인수로 리액트 컴포넌트를 전달하는데, 이 컴포넌트를 돔 루트에 추가합니다. 따라서 render메서드가 수행되면 전달된 리액트 컴포넌트가 돔에 추가되어 페이지에 나타납니다. 결론적으로 이 코드는 App컴포넌트를 돔 루트에 추가하므로, 페이지에 App컴포넌트에서 정의한 HTML요소가 표시됩니다.
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
