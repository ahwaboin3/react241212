import "./TodoItem.css";
import React from "react";

/* TodoItem 컴포넌트 리렌더 방지하기
  할 일 아이템을 수십 개에서 수백 개 이상 등록할 경우, 불필요한 렌더링이 발생하면 치명적인 성능 문제를 야기하게 됩니다.
  아이템을 추가하는 상황 외에도 아이템 제거, 체크박스 클릭, 심지어 검색 폼에서 검색어를 입력할 때도 TodoItem컴포넌트는 리렌더됩니다.
*/
//React.memo를 이용해 불필요한 TodoItem컴포넌트의 리렌더를 방지했지만 검색 폼에서 검색어를 입력 했을 때는 불 필요한 리렌더가 일어 나지 않습니다.
//할 일 아이템을 추가하거나 할일 체크, 삭제등을 할 때 리렌더링이 많이 일어납니다.
// T odoItem은 Props로 id, content, isDone, createDate와 같이 원시 자료형에 해당하는 값뿐만 아니라, onUpdate, onDelete와 같이 객체 자료형에 해당하는 함수도 받습니다.
//App 컴포넌트를 리렌더하면 onUpdate, onCreate등의 함수도 전부 다시 생성됩니다. 동등 비교 연산자 ===로 객체 자료형을 비교할 때는 해당 객체의 참조값을 기준으로 한다고 하였습니다.
//App 컴포넌트를 리렌더하면 새롭게 만든 onUpdate와 기존의 onUpdate는 동일한 기능을 수행하는 함수라도 다른 참조값을 갖게 됩니다. 따라서 React.memo는 Props가 변한 것으로 판단합니다.
//App컴포넌트를 리렌더하면 함수 onUpdate와 onDelete가 다시 만들어지는데, 이때 함수는 새롭게 선언한 것과 마찬가지로 참족밧이 변경됩니다. 따라서 이 함수를 Props로 받는 컴포넌트는 React.memo를 적용 했다고 하더라도 다시 렌더링됩니다.
//이런 문제 때문에 컴포넌트를 리렌더해도 함수를 다시 생성하지 않도록 만들어 주는 리액트 훅 useCallback을 사용합니다.

//불필요한 함수 재성성 방지하기
//useCallback은 컴포넌트가 리렌더될 때 내부에 작성된 함수를 다시 생성하지 않도록 메모이제이션하는 리액트 훅입니다.
//useCallback을 이용해[할 일 관리]앱 최적화하기
//useCallback의 기본 사용법
//[useCallback의 용법]
//const memoizedFunc=useCallback(func,deps)
//func- 콜백 함수
//deps- 의존성 배열
//useCallback은 useMemo처럼 2개의 인수를 제공합니다. 첫 번째 인수로는 메모이제이션하려는 콜백 함수를 전달하고, 두 번째 인수로는 의존성 배열을 전달합니다.
//useCallback은 의존성 배열에 담긴 값이 바뀌면 첫 번째 인수로 전달한 콜백 함수를 다시 만들어 반환합니다. 만약 첫 번째 인수로 전달한 콜백 함수를 어떤 경우에도 다시 생성되지 않게 하려면 의존성 배열을 빈 배열로 전달하면됩니다.
//useCallback의 첫 번째 인수로 전달한 콜백 함수에서 State변수에 접근하는 경우 문제가 발생할 수 있습니다.
/* 
const onCreate=useCallback(()=>{
  setState([newItem, ...state])})
},[])
*/
//의존성 배열이 빈 배열이므로 함수 onCreate는 처음 생성된 후에는 컴포넌트가 리렌더되어도 다시 생성되지 않습니다.
//이 경우 useCallback에서 전달한 콜백 함수에서 State변수에 접근하면 컴포넌트 마운트할 때의 값, 즉 State의 초깃값이 반환됩니다. 이유는 콜백 함수가 컴포넌트의 마운트 시점 이후에는 다시 생성되지 않기 때문입니다. 즉, 마운트할 때의 State 값만 사용할 수 있습니다.
//useCallback으로 래핑된 함수 onCreate는 state의 변화를 추적하지 못하므로 자칫 의도치 않은 동작을 야기할 수 있습니다. 그렇다고 의존성 배열에 State변수를 전달하면 결국 이를 업데이트할 때마다 함수 onCreate를 계속 재생성하므로 useCallback을 적용한 의미가 사라집니다.
//이때는 setState의 인수로 콜백 함수를 전달하는 리액트의 '함수형 업데이트'기능을 이용하면 됩니다.
/* 
  const onCreate=useCallback(()=>{
    setState((state)=>[newItem,...state])
  })
*/
//setState에서 콜백 함수를 전달하면 함수형 업데이트를 사용할 수 있는데 이 함수는 항상 최신 State값을 매개변수로 저장합니다. 그리고 콜백 함수가 반환한 값은 새로운 State값이 되어 업데이트됩니다. 따라서 useCallback을 사용하면서 setState로 최신 State값을 추적하려면 함수형 업데이트 기능을 이용해야 합니다.
//useCallback을 이용해 TodoItem컴포넌트의 리렌더 방지하기
const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
  console.log(`${id} TodoItem 업데이트`)
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
//React.memo를 이용해 불필요한 TodoItem컴포넌트의 리렌더를 방지하겠습니다.
export default React.memo(TodoItem);
