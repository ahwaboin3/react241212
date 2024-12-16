//ManyInput.js

//여러 개의 사용자 입력 관리하기
//객체의 괄호 표기법을 사용하여 입력 폼의 name속성(e.target.name)을 key로, 입력 폼에 입력한 값(e.target.value)을 value로 저장합니다.
function ManyInput(){
    let inputValue={}
    const handleOnChange=(e)=>{
        inputValue={
            ...inputValue,
            [e.target.name]:e.target.value,
        }
        console.log(inputValue)
    }
    //객체에서 키값에 대괄호를 넣는 이유
    //name자체가 키값이 됩니다.
    let obj={
        name:"react"
    }
    console.log(obj)
    //name 변수의 값이 키값이 됩니다.
    const name="framework"
    let obj2={
        [name]:"react"
    }
    console.log(obj2)
    return (
        <div>
            <div>
                <input name="name"
                    onChange={handleOnChange}
                    placeholder="이름" />
            </div>
            <div>
                <select name="gender"
                    onChange={handleOnChange} >
                    <option key=""></option>
                    <option key="man">남자</option>
                    <option key="female">여자</option>
                </select>
            </div>
            <div>
                <input type="date" name="birth" onChange={handleOnChange} />
            </div>
            <div>
                <textarea name="bio" onChange={handleOnChange} />
            </div>
        </div>
    )
}
export default ManyInput