import React, { useState } from 'react'
import quiz from './Data'
import './Quiz.css'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [userAnswerIndex, setUserAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
 
  //de-structure
  const {questions} = quiz
  const { question, choices, correctAnswer } = questions[currentQuestion]
  //events
  const onClickNext = () => {
    setUserAnswerIndex(null)
    setResult((prev) =>
      userAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if(currentQuestion !== questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
    } else {
        setCurrentQuestion(0)
        setShowResult(true)
    }
  }
  const selectedAnswer = (answer, index) => {
    setUserAnswerIndex(index)
    if (answer === correctAnswer) {
      setUserAnswer(true)
      console.log('right')
    } else {
      setUserAnswer(false)
      console.log('wrong')
    }
  }
  return (
    <div className="container">
    {!showResult ? (
      <div>
      <h1>-QUIZ-</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((answer, index) => (
          <li onClick={() => selectedAnswer(answer, index)} 
              key={index}
              className={userAnswerIndex === index ? 'selected-answer' : null}>
              {answer}
          </li>
        ))}
      </ul>
    <button className="button-40" 
      onClick={onClickNext}>
        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
    </button>
</div>
    ) 
    : (
      <div className="result">
      <h3>Result</h3>
    <p>
      Total Question: <span>{questions.length}</span>
    </p>
    <p>
      Total Score:<span> {result.score}</span>
    </p>
    <p>
      Correct Answers:<span> {result.correctAnswers}</span>
    </p>
    <p>
      Wrong Answers:<span> {result.wrongAnswers}</span>
    </p>
    </div>
    )
    } 
    </div>
  )
}

export default Quiz;