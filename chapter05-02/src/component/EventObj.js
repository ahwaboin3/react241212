//EventObj.js
//currentTarget: 현재 이벤트 핸들러가 연결된 객체를 나타냅니다.
//target:Event 인터페이스의 target속성은 이벤트가 발생한 대상 객체를 가리킵니다.
function EventObj(){
    function handleOnClick(e){
        //console.log(e.currentTarget)
        //console.log(e.target)
        console.log(e.target.name)
    }

    return (
        <div>
            <button 
                onClick={handleOnClick}
                name="A버튼"
            >A버튼</button>
            <button 
                onClick={handleOnClick}
                name="B버튼"
            >B버튼</button>
        </div>
    )
}
export default EventObj