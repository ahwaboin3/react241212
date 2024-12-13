// src/component/Body.js
function Body(){
    function handleOnClick(){
        alert("버튼을 클릭하셨군요!")
    }
    return (
        <div className="body">
            <button onClick={handleOnClick}>클릭하세요</button>
        </div>
    )
}
export default Body