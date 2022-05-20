
import { useState } from "react";
import questions from "../questions.json";
import Link from "next/link";
import RelationalType from "./relationaltype";
import { useRouter } from 'next/router'
import ReactDOM from 'react-dom';



export default function Questionaire() {


const [style, setStyle] = useState("cont");
const changeStyle = () => {
setStyle("cont2");
}

const [style2, setStyle2] = useState("cont3");
const changeStyle2 = () => {
setStyle("cont4");
}

 
  const router = useRouter()

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmitButton = () => {
    let s = 0;
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.answer === selectedOptions[i]?.answerByUser &&
          (s += answer.isCorrect) &&
          (newScore = s / questions.length)
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

    <div>

      {showScore ? (
        <>
        <h1 className="questionText">
          Ditt värde är {score.toFixed(2)} av 7
        </h1>
        
        </>
        
      ) : (
        <>

          <div className="questionText">
            <h4>
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
                  tabIndex="1"
                  key={index}
                  className="testButtonLayout"
                           /*  onClick={changeStyle} */
                  onClick={(e) => {handleAnswerOption(answer.answer);
                        changeStyle();
                  }}>
                 

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

          <div >
            <button
            className={style}
              onClick={(e) => {currentQuestion + 1 === questions.length ? handleSubmitButton : handleNext();
              changeStyle2();}}>
             
              {currentQuestion + 1 === questions.length ? <Link href="relationaltype">Se resultat</Link> : "Fortsätt"}
            </button>
          </div>



          
          <div className="textChoice">
            <div className="leftChoice">
              Instämmer inte alls
              </div>
            <div className="rightChoice">
              Instämmer helt
              </div>
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
