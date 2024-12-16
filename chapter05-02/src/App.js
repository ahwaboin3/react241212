import './App.css';
import Body from './component/Body';
import EventObj from './component/EventObj';
import Focus from './component/Focus';
import InputManage from './component/InputManage';
import ManyInput from './component/ManyInput';
import PropsState from './component/PropsState';
import RefHook from './component/RefHook';
import StateComp from './component/StateComp';

// 이벤트 처리하기
// 이벤트란 웹 페이지에서 일어나는 사용자의 행위입니다.
// 리액트의 이벤트 핸들링
// 리액트 이벤트 핸들링 특징
//1. 리액트는 카멜 케이스 문법에 따라 onClick으로 표기합니다.
//2. onClick={}문법으로 이벤트 핸들러를 설정합니다
//3. 이벤트 핸들러를 설정할 때는 함수 호출의 결괏값을 전달하는 것이 아니라 콜백 함수처럼 함수 그 자체를 전달합니다.
//4. 리액트에서는 소괄호 없이 함수 이름만 명시합니다.

//이벤트 객체 사용하기
//리액트에서는 이벤트가 발생하면 이벤트 핸들러에게 이벤트 객체를 매개변수로 전달합니다.

//컴포넌트와 상태
//지금까지는 값이 변하지 않는 정적인 리액트 컴포넌트를 만들었습니다. 지금부터는 사용자의 행위나 시간 변동에 따라 값이 변하는 동적인 리액트 컴포넌트를 만들어 보겠습니다. 이를 위해서는 리액트의 핵심 기능 중 하나인 State를 알아야 합니다. 
// State이해하기
// State는 상태라는 뜻입니다. 상태는 어떤 사물의 형편이나 모양을 일컫는 말로 일상 생활에서도 흔히 사용합니다.
//리액트 컴포넌트는 State값에 따라 다른 결과를 렌더링합니다.
function App() {
  return (
    <div className="App">
      <Focus />
      <RefHook />
      <PropsState />
      <ManyInput />
      <InputManage />
      <Body />
      <EventObj />
      <StateComp />
    </div>
  );
}

export default App;
