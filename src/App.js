import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [timer, setTimer] = useState(5)

  function handleChange(event) {
    setText(event.target.value)
  }

  //trim takes out empty spaces from the ends of the array.
  //filter to avoid having wordCount = 1 when there is no text in the textarea.
  function countWords(text) {
    const wordCount = text.trim().split(" ")
    return wordCount.filter(word => word !== "" ).length
  }
  
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(prevState => prevState - 1), 1000)
    }
  }, [timer])

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange}/>
      <h4>Time remaining: {timer}</h4>
      <button onClick={() => console.log(countWords(text))}>Start!</button>
      <h1>Word Count: </h1>
    </div>
    

  );
}

export default App;