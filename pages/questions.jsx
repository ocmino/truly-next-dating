import Head from "next/head";
import { useState } from "react";
import questions from "../questions.json";
import Link from "next/link";



export default function Questionaire() {

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
  
  
  return (

    <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">

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
            key={index}
            className="testButtonLayout"
            onClick={(e) => handleAnswerOption(answer.answer)}>
            <input type="radio" 
            className="w-6 h-6 bg-black" 
            name={answer.answer}
            value={answer.answer}
            onChange={(e) => handleAnswerOption(answer.answer)}
            checked={
              answer.answer === selectedOptions[currentQuestion]?.answerByUser
            }/>
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
          onClick={handleNext}
          className="w-[49%] py-3 bg-indigo-600 rounded-lg">
          Fortsätt
        </button>
      </div>

      <p>
          <Link href="">
            <a onClick={handlePrevious} className="backToFirstPage">←</a>
          </Link>
        </p>
      

    </div>
  )
}
