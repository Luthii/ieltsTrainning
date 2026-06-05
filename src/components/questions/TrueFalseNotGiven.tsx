import { useState } from "react";
import type { Question } from "../../types/index";

interface TrueFalseNotGivenProps {
  question: Question
}

function TrueFalseNotGiven({question} : TrueFalseNotGivenProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("")

    return (
        <div>
            <p>{question.question}</p> 
            {question.options?.map((option) => (
                //key is for react
                <div key={option}>
                    <input type="radio" 
                            name={question.id.toString()} //groups all elements together
                            value={option}
                            checked={selectedAnswer === option} //checks if the selectedAnswer is the option, if yes, shows the radio bt selected
                            onChange={() => setSelectedAnswer(option)}/>
                    <label>{option}</label>
                </div>
            ))}
        </div>

    )
}

export default TrueFalseNotGiven