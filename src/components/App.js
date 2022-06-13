import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [count, setcount] = useState(0);
  const [wor, setwor] = useState(0);
  const word = (e) => {
    let num = document.getElementById("char-limit-input").value;
    const charcount = e.target.value.length;
    const remainchar = num - charcount;
    setcount(remainchar);
    setwor(e.target.value.split(" ").length);
  };
  return (
    <div id="main">
      <input id="char-limit-input" type="number" />
      <br />
      <br />

      <textarea type="text" row={10} onChange={word} />
      <div id="word-counter"> {`Total no. of words written in ${wor}`}</div>
      <div id="char-counter">{`Total no. of character written in ${count}`}</div>
    </div>
  );
};

export default App;
