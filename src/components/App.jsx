import React from "react";

function App() {
  function inputChanged() {
    console.log("added");
  }
  return (
    <div className="container">
      <h1>Hello </h1>
      <input
        onChange={inputChanged}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
