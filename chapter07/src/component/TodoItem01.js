import { TodoContext, TodoDispatchContext } from "../App01";
import "./TodoItem.css";
import React,{useContext} from "react";

const TodoItem01 = ({ id, content, isDone, createdDate}) => {
  //. TodoItem컴포넌트에서 useContext로 함수 onUpdate와 onDelete를 받아 사용할 수 있도록 수정합니다.
  const {onUpdate,onDelete}=useContext(TodoDispatchContext)

  //. TodoItem컴포넌트에 적용했던 React.memo가 리팩토링 이후에도 제대로 동작하는지 다시 확인합니다.
  console.log(`${id} TodoItem 업데이트`)
  //React.memo가 리팩토링 이후 정상적으로 동작하지 않는다는 것을 발견했습니다.
  //문제의 원인 파악하기
  //Context의 Provider 리액트 컴포넌트이므로 Props로 전달되는 value값이 바뀌면 리렌더됩니다.
  //이 과정에서 TodoContext.Provider아래의 컴포넌트들도 함께 리렌더됩니다.


  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default React.memo(TodoItem01);
