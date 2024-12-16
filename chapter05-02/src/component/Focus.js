//Focus.js
//useRef로 포커스 하기
//사용자가 특정 폼에 내용을 입력하지 않거나 내용이 정한 길이보다 짧으면 해당 폼을 포커스하여 사용자의 추가 입력을 유도합니다.
//텍스트 입력 폼에서 사용자가 문자를 다섯 글자 미만으로 입력하면 이 요소에 포커스한 상태로 사용자가 입력을 추가할 때까지 대기합니다.

//리액트 훅
//리액트 훅(React Hook)이란 함수로 만든 리액트 컴포넌트에서 클래스로 만든 리액트 컴포넌트의 기능을 이용하도록 도와주는 함수들입니다. 리액트 훅은 이름 앞에 항상 use를 붙입니다.
//State, Ref 모두 원래는 함수로 만든 컴포넌트에서는 사용할 수 없는 기능이지만 이 훅 기능 덕분에 사용할 수 있습니다.
//리액트 개발팀은 함수로 만든 컴포넌트에서도 클래스로 만든 컴포넌트 기능을 사용할 수 있게 업데이트 하였습니다.

import { useState,useRef } from "react"
function Focus(){
    const [text,setText]=useState("")
    const textRef=useRef()

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleOnClick=()=>{
        if(text.length<5){
            textRef.current.focus();
        }else{
            alert(text)
            setText("")
        }
    }
    return (
        <div>
            <h1>Focus</h1>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    )
}
export default Focus