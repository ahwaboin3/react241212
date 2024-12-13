import './App.css'
import Body from './component/Body'
import Body2 from './component/Body2'

//컴포넌트에 값 전달하기
//리액트 앱을 만들다 보면 컴포넌트가 다른 컴포넌트에 값을 전달해야 하는 상황이 생깁니다.

//Props란?
//리액트에서는 부모가 자식 컴포넌트에 단일 객체 형태로 값을 전달할 수 있습니다. 이 객체를 리액트에서는 Props(Properties)라고 합니다. 리액트에서는 보통 재사용하려는 요소를 컴포넌트로 만듭니다. 보통 리액트에서 컴포넌트에 값을 전달하는 경우는 세부 사항들, 즉 컴포넌트의 속성을 지정하는 경우가 대부분입니다. 따라서 컴포넌트에 값을 전달하는 속성들이라는 점에서 Properties라고 부르며, 이를 간단히 줄여 Props라고 합니다.

//Props로 값 전달하기
//Props는 부모만이 자식 컴포넌트에 전달할 수 있습니다.
//Props는 단일 객체입니다. 따라서 name프로퍼티가 추가됩니다.

//Props로 여러 개의 값 전달하기

//구조 분해 할당으로 여러 개의 값 사용하기
function App() {
  //배열 구조 분해 할당
  const [a,b]=[1,2]
  //객체 구조 분해 할당
  const {c,d}={c:1,d:2}
  console.log("구조 분해 할당",c,d)

  const name="리액트"
  const name1="JSX"
  return (
    <div className="App">
      <Body2 name={name} age={10+1}/>
      <Body name={name} age={11}/>
      <Body name={name1} age={11}/>
    </div>
  );
}

export default App;
