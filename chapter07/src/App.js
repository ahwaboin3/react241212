import "./App.css";
import { useState, useRef, useReducer } from "react";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

//[할 일 관리] 앱 업그레이드
//함수 useReducer로 상태 변화 코드를 컴포넌트와 분리해 [할 일 관리]앱을 한 단계 업그레이드하겠습니다. 

function reducer(state, action){
  switch (action.type){
    case "CREATE":
      return [action.newItem,...state]
    case "UPDATE":
      return state.map((it)=>
        it.id===action.targetId?{...it,isDone:!it.isDone}:it
      )
    case "DELETE":
      return state.filter((it)=>{
        return it.id !== action.targetId})
    default:
      return state
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer,mockTodo);
  const idRef = useRef(3);

  //할 일 아이템 추가하기
  //dispatch를 호출하고, 인수로 할 일 정보를 담은 action객체를 전달합니다.
  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem:{
        id:idRef.current,
        content,
        isDone:false,
        createdDate:new Date().getTime(),
      }
    })
    idRef.current+=1
  };

  //할 일 아이템 수정하기
  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    })
  };

  //할 일 삭제 구현하기
  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
export default App;
