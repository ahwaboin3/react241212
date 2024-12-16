//RefHook.js
//Ref
//리액트의 Ref를 이용하면 돔(DOM) 요소들을 직접 조작할 수 있습니다. 이 기능ㄹ 이용해 돔 요소를 제어해 보겠습니다.

//useRef 사용하기
//리액트에서는 useRef라는 리액트 함수를 이용해 Ref객체를 생성합니다.
import {useState,useRef} from "react"

function RefHook(){
    const [text,setText]=useState("")
    //<input>태그에서 ref={textRef} 명령으로 textRef가 돔 입력 폼에 접근하도록 설정합니다. 이제 textRef를 이용하면 입력 폼을 직접 조작할 수 있습니다.
    const textRef=useRef()

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleOnClick=(e)=>{
        textRef.current.value=""
        alert(text)
    }
    const [text1,setText1]=useState("")
    const handleOnChange1=(e)=>{
        setText1(e.target.value)
    }
    const handleOnClick1=(e)=>{
        setText1("")
    }
    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
            <h1>{text1}</h1>
            <input id="i1" value={text1} onChange={handleOnChange1} />
            <button onClick={handleOnClick1}>초기화</button>
        </div>
    )
}
export default RefHook