//TestComp01.js

import { useReducer } from "react"

//함수 reducer에는 2개의 매개변수가 있습니다. 첫 번째 매개변수 state에는 현재 State의 값이 저장됩니다. 두 번째 매개변수 action에는 함수 dispatch를 호출하면서 인수로 전달한 action객체가 저장됩니다.
//함수 reducer가 반환하는 값이 새로운 State값이 됩니다.

//useReducer는 함수는 reducer를 이용해 상태 변화 코드를 컴포넌트 외부로 분리합니다.
function reducer(state,action){
    switch(action.type){
        case "INIT":
            return 0
        case "INCREASE":
            return state+action.data
        case "DECREASE":
            return state-action.data
        default:
            return state
    }
}

function TestComp(){
    //useReducer를 호출하고 2개의 인수를 전달합니다. 첫 번째 인수는 함수 reducer이고 두 번째 인수는 State의 초깃값입니다. useReducer도 useState처럼 배열을 반환하는데, 배열의 첫 번째 요소는 State변수이고 두 번째 요소는 상태 변화를 촉발하는 함수 dispatch입니다.
    const [count, dispatch]=useReducer(reducer,0)
    //dispatch에서는 인수로 객체를 전달하는데, 이 객체는 State의 변경 정보를 담고 있습니다. 이 객체를 다른 표현으로 'action객체'라고 합니다.
    return (
        <div>
            <h4>테스트 컴포넌트 01</h4>
            <div>
                <h5><bold>{count}</bold></h5>
            </div>
            <div>
                <button onClick={()=>dispatch({type:"INCREASE",data:1})}>+</button>
                <button onClick={()=>dispatch({type:"DECREASE",data:1})}>-</button>
                <button onClick={()=>dispatch({type:"INIT"})}>0으로 초기화</button>
            </div>
        </div>
    )
}
export default TestComp