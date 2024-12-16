//InputManage.js
//State로 사용자 입력 관리하기

import { useState } from "react";

//<input>태그로 텍스트 입력하기
//onChange에 이벤트 핸들러를 설정하면 됩니다.

function InputManage(){
    const [text,setText]=useState("")

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }

    //<input>태그로 날짜 입력하기
    const [date,setDate]=useState("")

    const dateOnChange=(e)=>{
        console.log("변경된 값: ",e.target.value)
        setDate(e.target.value)
    }

    //드롭다운 상자로 여러 옵션 중에 하나 선택하기
    //드롭다운 입력 폼에서 옵션을 선택하면 e.target.value에는 현재 사용자가 선택한 옵션의 key속성이 저장됩니다.
    const selectHandle=(e)=>{
        console.log("select: ",e.target.value)
    }

    //글상자로 여러 줄의 텍스트 입력하기
    const taHandle=(e)=>{
        console.log("textarea: ",e.target.value)
    }
    return (
        <div>
            <textarea onChange={taHandle} />
            <select onChange={selectHandle} >
                <option key={"1번"}>1번</option>
                <option key={"2번"}>2번</option>
                <option key={"3번"}>3번</option>
            </select>
            <input type="date" onChange={dateOnChange} 
                value={date}
            />
            <h1>{text}</h1>
            <input onChange={handleOnChange}></input>
            <input onChange={handleOnChange} />
        </div>
    )
}
export default InputManage;