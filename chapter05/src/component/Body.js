//component/Body.js
import React from 'react';
//JSX와 자바스크립트 표현식
//표현식이란 값으로 평가되는 식입니다. 즉, 10+20 같은 식은 결국 30으로 평가되기 때문에 표현식이라고 합니다. JSX는 자바스크립트 표현식을 html태그와 함께 사용할 수 있어 가독성 잇는 코드를 작성할 수 있습니다.
function Body(){
    //산술 표현식
    //산술 표현식이란 숫자로 표현되는 식을 말합니다.
    const numA=1
    const numB=2
    //문자열 표현식
    //문자열 표현식이란 문자열 또는 문자열로 평가되는 식을 말합니다.
    const strA="안녕"
    const strB="리액트"
    //리팩토링 - 코드를 다시 좋은 형태로 고치는 것
    //1. 중복된 코드를 제거 하는 것
    //2. 코드를 일률적으로 작성하 하는 것
    //논리 표현식
    //논리 표현식이란 참이나 거짓으로 평가되는 식입니다.
    const boolA=true;
    const boolB=false;
    //논리 표현식의 결과인 불리언 값은 페이지에 렌더링되지 않습니다.
    //형 변환 함수를 이용해 문자열로 바꿔 보여 줄 수 있습니다.
    //사용할 수 없는 값
    //원시 자료형에 해당하는 숫자, 문자열, 불리언, null, undefined를 제외한 값을 사용하면 오류가 발생합니다.
    const objA={
        a:1,
        b:2,
    }
    //객체 자료형 값을 반환하는 표현식은 "객체는 리액트의 자식으로 유효하지 않다"라는 뜻의 오류가 발생한다.
    //객체 자료형의 값을 페이지에 렌더링하고 싶다면, 값을 원시 자료형으로 바꿔 주어야 합니다.
    //JSX문법에서 지켜야 할 것들
    //닫힘 규칙
    //JSX의 모든 태그는 여는 태그가 있으면 반드시 닫는 태그도 있어야 한다는 규칙입니다.
    //오류가 발생하고 붉은 밑줄로 오류가 있다고 표시합니다.
    //html 태그 중 <img>,<input>은 닫힘 태그 없이도 사용할 수 있는데, JSX에서는 이를 허용하지 않습니다. JSX에서 이 태그를 사용하려면 <img />,<input />

    //최상위 태그 규칙
    //JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 합니다.
    //retrun문 안에 최상위 태그가 한개만 존재해야 합니다.
    //html 태그를 최상위 태그로 사용하지 않으려면, <React.Fragment>태그를 사용하면 됩니다. 이 태그로 다른 태그를 감싸면 최상위 태그를 대체하는 효과가 있습니다. 단 페이지에서 이 태그는 렌더링되지 않습니다.
    //<React.Fragment>대신 빈 태그 '<></>'를 사용할 수도 있습니다.

    //조건부 렌더링
    //리액트 컴포넌트가 조건식의 결과에 따라 각기 다른 값을 페이지에 렌더링하는 것을 조건부 렌더링이라고 합니다.
    //삼항 연산자를 활용한 조건부 렌더링
    const num=20;
    //if 조건문은 표현식에 해당하지 않기 때문에 JSX와 함께 사용할 수 없지만, 표현식인 삼항 연산자를 이용하면 조건에 따라 다른 값을 렌더링할 수 있습니다.
    
    //조건문을 이용한 조건부 렌더링
    if(num%2===0){
        return <div>{num}은 짝수입니다.</div>
    }else{
        return <div>{num}은 홀수입니다.</div>
    }
    return (
        <>
            <h2>
                {num}은 {num%2===0?"짝수":"홀수"}입니다.
            </h2>
        {/* <React.Fragment> */}
            <div></div>
            <div>
                <div></div>
                <div>
                    <img src="https://images.velog.io/images/jeromecheon/post/6d52fa92-63f6-4991-a612-ccd6d74a27dc/1111.png" alt="react" width="300" />
                    {/* <h1>Body1 */}
                    <h2>{objA.a} {objA.b}</h2>
                    {/* <h2>{objA}</h2> */}
                    <h2>{String(boolA||boolB)}</h2>
                    <h2>{boolA||boolB}</h2>
                    <h1>body</h1>
                    <h2>{numA+numB}</h2>
                    <h2>{strA+strB}</h2>
                </div>
            </div>
        {/* </React.Fragment> */}
        </>
    )
}
export default Body;