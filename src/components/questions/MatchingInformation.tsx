import { useState } from "react";
import type { Question } from "../../types/index";

interface MatchingInformationProps {
  question: Question
}

function MatchingInformation({question} : MatchingInformationProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("")

    return (
        <div>
            <p>{question.question}</p>
            <select
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
            >
            {question.options?.map((option) => (
                //key is for react
                <option key={option} value={option}>{option}</option>
            ))}
            </select>
        </div>

    )
}

export default MatchingInformation