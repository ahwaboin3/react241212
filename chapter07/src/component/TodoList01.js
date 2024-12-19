import { useContext,useState, useMemo } from "react";
import "./TodoList.css";
import { TodoContext, TodoStateContext } from "../App01";
import TodoItem01 from "./TodoItem01";

//. TodoList컴포넌트에서 Context데이터 사용하기
//. TodoList컴포넌트에서 데이터를 꺼내 사용하겠습니다.
// Context도 다른 파일에서 불러올 수 있도록 export로 내보내야 합니다.

const TodoList01 = () => {
  //useContext를 호출하고 TodoContext를 인수로 전달해 이 Context가 공급하는 데이터를 storeData에 저장합니다.
  //const storeData=useContext(TodoContext)
  const todo=useContext(TodoStateContext)

  const [search, setSearch] = useState("");

  const analyzeTodo=useMemo(()=>{
    const totalCount=todo.length
    const doneCount=todo.filter((it)=>it.isDone).length
    const notDoneCount=totalCount-doneCount
    return{
      totalCount,
      doneCount,
      notDoneCount,
    }
  },[todo])
  const {totalCount,doneCount,notDoneCount}=analyzeTodo

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  //. TodoItem컴포넌트에서 Context데이터 사용하기
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem01
            key={it.id}
            {...it}
          />
        ))}
      </div>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
    </div>
  );
};
export default TodoList01;
