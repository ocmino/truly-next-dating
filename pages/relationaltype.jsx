
import questions from "../questions.json";
import Questionaire from "./questions";
import { useState } from "react";




export default function RelationalType() {

    const [score] = useState(0);
   
    return (
        <p>You scored {score} out of {questions.length}</p>
    )
}