
import { useEffect } from 'react';
import './App.css'

function App() {
  var question= {question: "What is the answer to life, the universe and everything?", answers: ["42", "24", "0", "1"], correct: "42"}
  var state = {
    BackgroundColor: "transparent"
  }
  return (
    <>
      <div>
        <h1>Question</h1>
        <h3>{question.question}</h3>
        <div>
            {question.answers.map((answer) => (
            <button style={ {margin: 10, backgroundColor: state.BackgroundColor} } onClick={() => {
                if (question.correct === answer) {
                  state.BackgroundColor = "green"
                } else {
                  state.BackgroundColor = "red"
                }
            } }>{answer}</button>
            ))}
        </div>
      </div>
    </>
  )
}

export default App
