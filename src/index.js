import React from "react";
import ReactDOM from "react-dom";
import FormBlock from "./components/FormBlock";

import "./styles.css";

const questions = [
  {
    id: 1,
    type: "SimpleAnswer",
    content: "What is your name"
  }
];

function App() {
  return (
    <div className="App">
      <div className="headerGroup">
        <header className="header" />
        <div className="spacer" />
        <div className="formHeader">
          <div className="formHeader__tab">QUESTIONS</div>
        </div>
      </div>

      <main className="formContent">
        <FormBlock questions={questions} />
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
