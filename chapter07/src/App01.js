//9장 컴포넌트 트리에 데이터 공급하기
//Context
//리액트 컴포넌트 트리 전체를 대상으로 데이터를 공급하는 기능인 Context입니다.
//Context를 사용하는 이유
//Props Drilling 문제를 해결하기 위해서입니다.
//리액트에서는 자식의 자식 즉 트리에서 2단계 이상 떨어져 있는 컴포넌트에 직접 데이터를 전달하는 것이 불가능합니다.
//원하는 목적지까지 데이터를 전달하기 위해서 경로상에 있는 모든 컴포넌트에 일일이 Props를 전달해야 합니다. 이를 Props Drilling문제라고 합니다.

//Context란?
//리액트에서 Context는 같은 문맥 아래에 있는 컴포넌트 그룹에 데이터를 공급하는 기능이라는 의미로 사용됩니다. Context를 이용하면 단계마다 일일이 Props를 전달하지 않고도 컴포넌트 트리 전역에 데이터를 공급할 수 있어 Props Drilling문제를 간단히 해결할 수 있습니다.

//ContextAPI
//ContextAPI는 Context를 만들고 다루는 리액트 기능입니다. 

//Context만들기
//import React from "react"
//const MyContext=React.createContext(defaultValue)
//인수로 전달하는 값은 Context의 기본값으로 생략할 수 있습니다.

//Context에 데이터 공급하기
//Context에서 데이터를 공급하려면 Context.Provider기능을 사용하면 됩니다.
//Provider 컴포넌트는 Props로 공급할 데이터를 받아, 컴포넌트 트리에서 자신보다 하위에 있는 모든 컴포넌트에 데이터를 공급합니다.

//Context가 공급하는 데이터 사용하기
//useContext는 특정 Context가 공급하는 데이터를 불러오는 리액트 훅입니다.

//Context로 [할 일 관리]앱 리팩토링하기
//Context를 어떻게 적용할 것인가?
//App에서 TodoItem까지 Props가 전달되는 구조를 살펴보면, App에서 전달하는 Props중 함수 onDelete와 onUpdate는 TodoList에서는 사용하지 않고 TodoItem컴포넌트에서 사용합니다. TodoItem이 이 Props를 사용하려면, 리액트의 데이터 전달 구조 특성상 TodoList컴포넌트를 거쳐서 전달해야 합니다. 이것을 개선해야 할 것 같습니다.

import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList01 from "./component/TodoList01";
//. TodoContext를 만들어 데이터 공급하기
// import React from "react";
import React, { useCallback, useRef, useReducer,useMemo } from "react";

//. TodoContext만들기
//Context는 반드시 컴포넌트 밖에서 생성해야 한다는 점에 유의해야 합니다. 만약 안에서 생성하면 컴포넌트가 리렌더될 때마다 Context를 새롭게 생성하기 때문에 의도대로 동작하지 않습니다.
//export const TodoContext=React.createContext()
export const TodoStateContext=React.createContext()
export const TodoDispatchContext=React.createContext()

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

function App01() {
  const [todo, dispatch] = useReducer(reducer,mockTodo);
  const idRef = useRef(3);

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

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    })}
  ,[])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })}
  ,[])
  //데이터 공급하기
  //Provider를 배치해 데이터 공급 설정을 합니다.
  //Props(value)를 객체로 설정합니다. 이 객체에는 Context에 소속된 컴포넌트에 공급할 모든 값을 담습니다.
  //. TodoContext하위에 배치한 컴포넌트는 이제 이 Context에서 데이터를 받으므로 굳이 다른 경로로 Props를 받을 필요가 없습니다.

  //할 일이 추가 될  때 todo가 변하면, TodoContext.Provider에서 전달하는 모든 Props 또한 바뀌게 되고 onCreate, onUpdate, onDelete만 받는 컴포넌트도 불필요한 리렌더가 발생합니다.
  //문제의 원인은 State변수 todo와 onCreate,onUpdate,onDelete와 같은 함수들이 하나의 객체로 묶여 동일한 Context에 Props로 전달되기 때문입니다.
  //Context를 역할에 따라 분리하는게 바람직합니다.
  const memoizedDispatches=useMemo(()=>{
    return {onCreate, onUpdate,onDelete}
  },[])
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList01 />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}
export default App01;
