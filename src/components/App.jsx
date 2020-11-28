import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameHead, setNameHead] = useState("");
  function inputChanged() {
    setName(event.target.value);
    //console.log(event.target.value);
  }
  function buttonSubmit() {
    setNameHead(name);
  }
  return (
    <div className="container">
      <h1>Hello {nameHead}</h1>
      <input
        type="text"
        onChange={inputChanged}
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={buttonSubmit}>Submit</button>
    </div>
  );
}

export default App;
