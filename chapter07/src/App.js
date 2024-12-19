import "./App.css";
import { useCallback, useRef, useReducer } from "react";
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

//App컴포넌트의 함수 onUpdate와 onDelete를 useCallback으로 메모이제이션해 이 함수들을 다시 생성하지 않도록 만듭니다. 다시 말해 TodoItem이 불필요한 상황에서 리렌더되지 않도록 합니다.
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
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    })}
  ,[])

  //할 일 삭제 구현하기
  const onDelete = useCallback((targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })}
  ,[])
  //useReducer가 반환하는 함수 dispatch는 함수 reducer를 호출하는데, 이 reducer는 항상 최신 State를 인수로 받습니다. 따라서 State 관리 도구로 useSate가 아닌 useReducer를 이용할 때는 함수형 업데이트를 사용하지 않아도 됩니다. 따라서 TodoItem컴포넌트에 함수로 전달되는 Props인 onUpdate와 onDelete만 다시 생성하지 않도록 useCallback을 이용해 최적화합니다.
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
export default App;
