import "./App.css";
import { useState, useEffect, use } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

//App.js 복사해서 App01.js 만든다.
//6장 라이프 사이클
//리액트 컴포넌트의 라이프 사이클
//리액트 컴포넌트의 라이프 사이클은 크게 3단계로 구분합니다.
//- 마운트(Mount):컴포넌트를 페이지에 처음 렌더링할 때
//- 업데이트(Update):State나 Props의 값이 바뀌거나 부모 컴포넌트가 리렌더해 자신도 리렌더될 때
//- 언마운트(Unmount):더 이상 페이지에 컴포넌트를 렌더링하지 않을 때
//라이프 사이클을 이용하면 컴포넌트가 처음 렌더링될 때 특정 동작을 하도록 만들거나, 업데이트할 때 적절한지 검사하거나, 페이지에서 사라질 때 메모리를 정리하는 여러 유용한 작업을 단계에 맞게 할 수 있습니다. 이를 라이프 사이클 제어(Lifecycle Control)라고 합니다. 리액트 훅의 하나인 함수 useEffect를 이용하면 이 사이클을 쉽게 제어할 수 있습니다.

// useEffect
// 함수 useEffect는 어떤 값이 변경될 때마다 특정 코드를 실행하는 리액트 훅입니다. 이를 "특정 값을 검사한다"라고 표현합니다.

//하나의 값 검사하기
//App컴포넌트에서 State변수 count의 값이 바뀌면, 변경된 값을 콘솔에 출력하겠습니다.

function App01() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  //useEffect를 호출하고 두 개의 인수를 전달합니다. 첫 번째 인수로 콜백 함수를, 두 번째 인수로 배열을 전달합니다.
  //두 번째 인수로 전달한 배열을 의존성 배열(Dependency Array, 줄여서 deps)이라고 하는데, useEffect는 이 배열 요소의 값이 변경되면 첫 번째 인수로 전달한 콜백 함수를 실행합니다.
  //State값을 초기화할 때도 useEffect가 이 변화를 감지 하기 때문에 count 업데이트: 0이 콘솔에 출력됩니다.

  //App컴포넌트에서 State변수 count외에는 변경할 수 있는 값이 없습니다. 따라서 임시로 입력 폼을 추가하고, 이 폼에 입력한 데이터를 처리하고 text라는 이름의 State변수를 하나 더 만듭니다.
  const [text,setText]=useState("")
  const handleChangeText=(e)=>{
    setText(e.target.value)
  }

  //여러 개의 값 검사하기
  //의존성 배열에서 하나의 요소만 바꿔도 콜백 함수가 실행됩니다.
  useEffect(()=>{
    console.log("count 업데이트: ", count, text)
  },[count,text])

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
export default App01;
