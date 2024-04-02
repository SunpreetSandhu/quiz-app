import DateCounter from "./DateCounter";
import "./index.css";
import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";

function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error"));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>question</p>
      </Main>
    </div>
  );
}

export default App;
