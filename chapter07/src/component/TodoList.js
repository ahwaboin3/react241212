import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

// 8장 최적화
// 최적화와 메모이제이션
// 리액트 앱에서는 연산 최적화는 대부분 메모이제이션 기법을 이용합니다. 메모이제이션이란 말뜻 그대로 '메모하는 방법'입니다. 메모이제이션은 특정 입력에 대한 결과를 계산해 메모리 어딘가에 저장했다가 동일한 요청이 들어 오면 저장한 결괏값을 제공해 빠르게 응답하는 기술입니다. 알고리즘에서는 동적 계획법이라고 쓰입니다.

//함수의 불필요한 재호출 방지하기
//할 일 분석 기능 추가하기
//이 기능은 추가한 할 일 아이템이 모두 몇 개인지, 또 완료 아이템과 미완료 아이템은 각각 몇 개인지 검색해 페이지에 렌더링합니다.

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  //문제점 파악하기
  //함수 analyzeTodo를 불필요하게 호출하는 일이 일어나지 않아야 합니다. 함수에 대한 불필요한 호출이 있는 확인하도록 하겠습니다. 호출할 때마다 콘솔에 메세지를 출력합니다. 
  //검색 폼에 검색어를 입력할때 문자 하나하나 마다 analyzeTodo 함수 호출이라는 메시지가 콘솔에 출력됩니다.
  /* const analyzeTodo=()=>{
    console.log("analyzeTodo 함수 호출")
    const totalCount=todo.length
    const doneCount=todo.filter((it)=>it.isDone).length
    const notDoneCount=totalCount-doneCount
    return{
      totalCount,
      doneCount,
      notDoneCount,
    }
  }

  const {totalCount,doneCount,notDoneCount}=analyzeTodo() */

  //useMemo를 이용해 [할 일 관리] 앱 최적화하기
  //useMemo의 기본 사용법
  //useMemo를 사용하면 특정 함수를 호출했을 때 그 함수의 반환값을 기억합니다. 그리고 같은 함수를 다시 호출하면 기억해 두었던 값을 반환합니다. 따라서 useMemo를 이용하면 함수의 반환값을 다시 구하는 불필요한 연산을 수행하지 않아 성능을 최적화할 수 있습니다. 이처럼 함수의 연산 결과를 기억하는 행위를 "메모이제이션 한다"라고 표현합니다.
  //기본형
  //const value=useMemo(callback,deps)
  //callback - 콜백 함수 , deps - 의존성 배열
  //의존성 배열에 담긴 값이 바뀌면 콜백 함수를 다시 실행하고 결괏값을 반환합니다.
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
  //useMemo는 함수가 아닌 값을 반환하므로 함수 analyzeTodo에는 값이 저장됩니다. 따라서 구조 분해 할당의 대상을 기존의 analyzeTodo()가 아닌 analyzeTodo로 변경해야 합니다.
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
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
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
export default TodoList;
