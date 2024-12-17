//클린업을 이용해 컴포넌트 언마운트 제어하기

import "./App.css";
import { useState, useEffect, use } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";

function App03() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const [text,setText]=useState("")
  const handleChangeText=(e)=>{
    setText(e.target.value)
  }

  return (
    <div className="App">
      <h1>Simple Counter App03</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count%2===0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
export default App03;
