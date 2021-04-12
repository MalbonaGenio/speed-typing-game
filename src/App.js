import React, { useEffect, useRef, useState } from "react"
import './App.css';

function App() {
  const gameLength = 5
  const [text, setText] = useState("")
  const [timer, setTimer] = useState(gameLength)
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textareaRef = useRef(null)

  function handleChange(event) {
    setText(event.target.value)
  }

  //trim takes out empty spaces from the ends of the array.
  //filter to avoid having wordCount = 1 when there is no text in the textarea.
  function countWords(text) {
    const wordCount = text.trim().split(" ")
    return wordCount.filter(word => word !== "" ).length
  }

  function startGame() {
    setText("")
    setIsGameRunning(true)
    /*forces a sincronoulsy change in the disabled 
    property. To avoid preventing the focus to apply to 
    an still disabled text area due to the async 
    of the setIsGameRunning function. */
    textareaRef.current.disabled = false
    textareaRef.current.focus()
    setTimer(gameLength)
  }

  function endGame() {
    setIsGameRunning(false)
    setWordCount(countWords(text))
  }
  
  useEffect(() => {
    if (timer > 0 && isGameRunning) {
      setTimeout(() => setTimer(prevState => prevState - 1), 1000)
    } else if (timer === 0){
      endGame()
    }
  }, [timer, isGameRunning])

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea ref={textareaRef} disabled={!isGameRunning} value={text} onChange={handleChange}/>
      <h4>Time remaining: {timer}</h4>
      <button disabled={isGameRunning} onClick={startGame}>Start!</button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  );
}

export default App;