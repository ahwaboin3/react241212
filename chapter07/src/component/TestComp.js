//TestComp.js
// 07 useReducer와 상태 관리
// useReducer 이해하기
// 상태 변화 코드란?
// 상태 변화 코드란 State값을 변경하는 코드이버니다. 앞서 만든 TestComp컴포넌트의 함수 onIncrease와 onDecrease는 각각 변수 count의 값을 늘리거나 줄이므로 상태 변화 코드라고 할 수 있습니다.
//상태 변화 코드를 컴포넌트에서 분리한다는 말은 컴포넌트 내부에 작성했던 상태 변화 코드를 외부에 작성한다는 뜻입니다. 그러나 지금처럼 useState를 이용해 State를 만들면 상태 변화 코드를 분리할 수 없습니다. useState를 이용해 State를 생성하면 상태 변화 코드를 반드시 컴포넌트 안에 작성해야 합니다. 반면 함수 useReducer를 사용하면 상태 변화 코드를 컴포넌트 밖으로 분리할 수 있습니다.

//useReducer의 기본 사용법
//useReducer는 useState와 더불어 리액트 컴포넌트에서 State를 관리하는 리액트 훅입니다. useReducer는 State관리를 컴포넌트 내부가 아닌 외부에서 할 수 있게 만듭니다. 그래서 useState와 달리 State를 관리하는 상태 변화 코드를 컴포넌트와 분리할 수 있습니다. 파일로도 분리가 가능하기 때문에 컴포넌트 내부가 훨씬 간결해집니다.
import { useState } from "react"
function TestComp(){
    const [count, setCount]=useState(0)

    const onIncrease=()=>{
        setCount(count+1)
    }
    const onDecrease=()=>{
        setCount(count-1)
    }

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <h5><bold>{count}</bold></h5>
            </div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}
export default TestComp