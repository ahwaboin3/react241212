//PropsState.js

import { useState } from "react"
import Judge from "./Judge"
import Viewer from "./Viewer"

//Props와 State
//동적으로 변하는 값인 리액트의 State 역시 일종의 값이므로 Props로 전달할 수 있습니다.
let num=0

function PropsState(){
    const [number,setNumber]=useState(0)
    const onDecrease=()=>{
        setNumber(number-1)
    }
    const onIncrease=()=>{
        setNumber(number+1)
    }
    //자식 컴포넌트는 Props로 전달된 State 값이 변하면 자신도 리렌더된다는 사실입니다. 즉, 부모에 속해 있는 State(number)값이 변하면 Judge컴포넌트에서 구현한 짝수, 홀수 값도 따라서 변합니다.

    num=num+1
    //State와 자식 컴포넌트
    //리액트에서는 부모 컴포넌트가 리렌더되면 자식도 함께 리렌더됩니다. 사실 지금의 Viewer는 부모컴포넌트가 리렌더된다고 해서 리렌더될 이유가 없습니다. Viewer컴포넌트의 내용에는 변한게 없기 때문입니다. 의미 없는 리렌더가 자주 발생하면 웹 브라우저의 성능은 떨어집니다.
    return (
        <div>
            <h2>{number}</h2>
            <Judge number={number}/>
            <Viewer/>
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    )
}
export default PropsState