//Footer.js
//JSX 스타일링
//스타일링이란 CSS와 같은 스타일 규칙을 이용해 요소의 크기, 색상 등을 결정하는 일입니다.
//인라인 스타일링
//html의 style속성을 이용해 직접 스타일을 정의하는 방법입니다.
//JSX의 인라인 스타일링은 style={{스타일 규칙}}과 같은 문법으로 작성합니다.

//스타일 파일 분리
import "./css/footer.css"
//JSX에서는 html문법과는 달리 요소의 이름을 지정할 때 class 선택자가 아닌 className을 사용합니다. class가 자바스크립트의 예약어이기 때문입니다.
function Footer(){
    return (
        <footer style={{backgroundColor:"Red",
            color:"blue"
        }}>
            <h1 className="footer">footer</h1>
            <h1>footer</h1>
        </footer>
    )
}
export default Footer