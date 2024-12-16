//PropsState.js

//Props와 State
//동적으로 변하는 값인 리액트의 State 역시 일종의 값이므로 Props로 전달할 수 있습니다.

function PropsState(){
    const number=0
    const onDecrease=()=>{}
    const onIncrease=()=>{}
    return (
        <div>
            <h2>{number}</h2>
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    )
}
export default PropsState