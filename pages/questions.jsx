import Head from "next/head";
import { useState } from "react";
import questions from "../questions.json";
import Link from "next/link";



export default function Questionaire() {

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };


  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  function changeclassstyle() {
    var c = document.getElementsByClassName("testLayout");
    for (var i = 0; i < c.length; i++) {
      c[i].style.color = "green";
    }
  }



  return (

    <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">

      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {questions.length}
        </h1>
      ) : (
        <>

          <div className="questionText">
            <h4 className="mt-10 text-xl text-white/60">
              Fråga {currentQuestion + 1} av {questions.length}
            </h4>
            <div className="questionText2">
              {questions[currentQuestion].question}
            </div>
          </div>

          <div className="testLayout">
            {questions[currentQuestion].answerOptions.map
              ((answer, index) => (
                <div
                  tabindex="1"
                  key={index}
                  id="testButtonLayout"
                  className="testButtonLayout"
                  onClick={(e) => handleAnswerOption(answer.answer)}>

                  <input type="radio"
                    name={answer.answer}
                    value={answer.answer}
                    onChange={(e) => handleAnswerOption(answer.answer)}
                    checked={
                      answer.answer === selectedOptions[currentQuestion]?.answerByUser
                    } />

                  <p className="testNumber">{answer.answer}</p>

                </div>
              ))}
          </div>

          <div className="flex justify-between w-full mt-4 text-white">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-indigo-600 rounded-lg">
              Föregående
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length ? handleSubmitButton : handleNext
              }
              className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            >
              {currentQuestion + 1 === questions.length ? "Se resultat" : "Fortsätt"}
            </button>
          </div>
        </>
      )
      }

      

      <p>
        <Link href="">
          <a onClick={handlePrevious} className="backToFirstPage">←</a>
        </Link>
      </p>


    </div>
  )
}
