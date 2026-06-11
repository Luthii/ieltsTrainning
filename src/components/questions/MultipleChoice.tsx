import { useState } from "react";
import type { QuestionProps } from "../../types/index";

// interface MultipleChoiceProps {
//   question: Question
// }

function MultipleChoice({question, onAnswer} : QuestionProps) {
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
                            onChange={() => {
                                setSelectedAnswer(option)
                                onAnswer(question.id, option)
                                }}/>
                    <label>{option}</label>
                </div>
            ))}
        </div>

    )
}

export default MultipleChoice