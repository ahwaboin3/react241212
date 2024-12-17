//useEffect로 라이프 사이클 제어하기
//컴포넌의 3단계 라이프 사이클 중 업데이트가 발생하면 특정 코드를 실행하겠습니다.
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App02() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const [text,setText]=useState("")
  const handleChangeText=(e)=>{
    setText(e.target.value)
  }
  //두 번째 요소인 의존성 배열에 아무것도 전달하지 않으면, useEffect는 컴포넌트를 렌더링할 때ㅔ마다 콜백 함수를 실행합니다. 처음 페이지에 렌더링하는 마운트 시점 한 번과 컴포넌트를 리렌더하는 업데이트 시점 두 번의 결과가 콘솔에 출력된다.
  /* useEffect(()=>{
    console.log("컴포넌트 업데이트")
  }) */
  //이번에는 useEfeect에서 마운트 시점은 제외하고 업데이트 시점에만 콜백 함수를 실행하겠습니다. 즉, 페이지에 처음 렌더링할 때 콜백 함수를 실행하지 않고 리렌더될 때만 실행하겠다는 뜻입니다. 이를 위해 함수 useRef도 이용합니다.
  const didMountRef=useRef(false)
  useEffect(()=>{
    if(!didMountRef.current){
      didMountRef.current=true
      return
    }else{
      console.log("컴포넌트 업데이트")
    }
  })
  //컴포넌트의 마운트 제어하기
  //컴포넌트의 마운트 시점에 실행되는 코드를 작성하겠습니다.
  //함수 useEffect를 하나 더 만들고 의존성 배열에는 빈 배열을 전달합니다. useEffect에서 빈 배열을 전달하면 컴포넌트의 마운트 시점에만 콜백 함수를 실행합니다.
  useEffect(()=>{
    console.log("컴포넌트 마운트")
  },[])

  //컴포넌트 언마운트 제어하기
  //언마운트 컴포넌트가 페이지에서 제거될 때입니다.
  //클린업
  //리액트 컴포넌트의 언마운트 시점을 제어하기 위해서는 먼저 클린업(Cleanup) 기능을 이해해야 합니다.
  //useEffect를 호출하고 의존성 배열을 전달하지 않습니다. 따라서 App컴포넌트를 렌더링할 때마다 첫 번째 인수로 전달한 콜백 함수가 실행됩니다.
  //페이지에서 버튼을 누르면 여러 번 리렌더됩니다. 그래서 함수 setInterval에서 정한 인터벌(1초)이 아닌 매우 빠른 속도로 깜짝 문자열이 콘솔에 출력되는 현상을 볼 수 있습니다.
  //두 가지 이유가 복합적으로 얽혀 있기 때문입니다.
  //하나는 App컴포넌트를 렌더링할 때마다 useEffect의 콜백 함수는 새로운 setInterval함수를 만들고 새 인터벌을 생성한다는 점입니다.
  //또 하나는 함수 setInterval에서 인터벨을 생성한 다음에 이를 종료하지 않았기 때문입니다. 인터벌을 종료하는 clearInterval이라는 또 다른 내장 함수를 호출하지 않으면 문자열 출력은 멈추지 않습니다.
  //리렌더될 때마다 새로운 인터벌이 생성되고 기존 인터벌을 종료하지 않았기 때문에 여러 개의 인터벌이 중복으로 만들어져 출력 속도가 빨라지게 됩니다.
  //이럴 때 요긴하게 사용하는 기능이 바로 useEffect의 클린업 기능입니다.
  useEffect(()=>{
    const intervalID=setInterval(()=>{
      console.log("깜빡")
    },1000)
    //useEffect의 콜백 함수가 반환하는 함수를 클린업 함수라고 합니다. 이 함수는 콜백 함수를 다시 호출하기 전에 실행됩니다. 따라서 컴포넌트를 렌더링할때마다 새 인터벌을 생성하고 기존 인터벌은 삭제합니다.
    return ()=>{
      console.log("클린업")
      clearInterval(intervalID)
    }
  })

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
export default App02;
