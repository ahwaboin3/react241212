//component/Body2.js
//구조 분해 할당으로 여러 개의 값 사용하기
//실무에서는 매개변수에 구조 분해 할당하는 방식이 더 간결한 코드를 작성할 수 있어 선호하는 편입니다.
function Body2({name, age,skills=[]}){
    console.log(skills);
    return (
        <div>
            <h1>Body2</h1>
            <h2>My name is {name}</h2>
            <h2>My age is {age}</h2>
            <h2>My got {skills.length} skills.</h2>
        </div>
    );
}
//기본값 설정
/* Body2.defaultProps={
    skills:[],
} */
export default Body2