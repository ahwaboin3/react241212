//컴포넌트
//개발자들은 리액트를 컴포넌트 기반의 UI라이브러리라고 소개합니다. 페이지의 모든 요소를 컴포넌트 단위로 쪼개어 개발하고, 완성된 컴포넌트를 마치 레고 조립하듯이 하나로 합쳐 페이지를 구성하기 때문입니다. 리액트로 웹 서비스를 개발할 때는 컴포넌트를 여러 개 만들어 이를 적절히 조합해서 만들곤 합니다.

import './App.css';
import Header from './component/Header';

//함수 컴포넌트 만들기
//함수를 선언하고 해당 함수가 html요소를 반환하도록 만들면 됩니다. 함수를 사용해 만든 컴포넌트를 특별히 함수 컴포넌트라고 합니다. 리액트 공식 문서에서도 클래스보다는 함수로 컴포넌트를 만들 것을 권장하고 있습니다.

//컴포넌트의 이름은 항상 대문자로 시작하기
//컴포넌트 함수 이름의 첫 글자는 항상 영어 대문자여야 합니다. 그 이유는 리액트 컴포넌트를 html태그와 구분하기 위해서입니다.
/* function Header(){
  return <header>
    <h1>header</h1>
  </header>
} */
//컴포넌트를 페이지에 렌더링 하기
//Header컴포넌트를 페이지에 렌더링하려면 App에서 이 컴포넌트를 자식 요소로 배치해야 합니다. App처럼 다른 컴포넌트를 return문 내부에서 포함하는 컴포넌트를 부모 컴포넌트라고 합니다. 반대로 Header처럼 App의 return문에 포함된 컴포넌트를 자식 컴포넌트라고 합니다.
import Body from './component/Body';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
