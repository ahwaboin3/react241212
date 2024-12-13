//StateComp.js
//State의 기본 사용법
//리액트에서는 함수 useState로 State를 생성합니다. useState의 문법은 다음과 같습니다.
//기본형
//const [light,setLight]=useState("off")
//light - State 변수
//setLight - set 함수
//"off" - 초깃값 설정
//useState를 호출하면 2개의 요소가 담긴 배열을 반환합니다. 이때 배열의 첫 번째 요소 light는 현재 상태의 값을 저장하고 있는 변수입니다. 이 변수를 'State 변수'라고 부릅니다. 다음으로 두 번째 요소인 setLight는 State변수의 값을 변경하는 즉 상태를 업데이트하는 함수입니다. 이 함수를 'set 함수'라고 부릅니다.

//set 함수로 State값 변경하기

import { useState } from "react"

function StateComp(){
    const [count,setCount]=useState(0)

    function onIncrease(){
        setCount(count+1)
        console.log(count)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}
export default StateComp