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