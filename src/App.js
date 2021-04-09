import React, { useState } from "react"
import './App.css';

function App() {
  const [wordsInput, setWordsInput] = useState("")

  function handleChange(event) {
    setWordsInput(event.target.value)
  }

  console.log(wordsInput)

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={wordsInput} onChange={handleChange}/>
      <h4>Time remaining: ???</h4>
      <button>Start!</button>
      <h1>Word Count: </h1>
    </div>
    

  );
}

export default App;