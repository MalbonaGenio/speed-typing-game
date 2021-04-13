import React from "react"
import './App.css';
import useBusinessLogic from "./useBusinessLogic.js"
function App() {
  const {
    handleChange, 
    startGame, 
    wordCount, 
    isGameRunning, 
    textareaRef, 
    timer, 
    text}  = useBusinessLogic(10) // set the timer for the game. By deafult is going to be set at 20.

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