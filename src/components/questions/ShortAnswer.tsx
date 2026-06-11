import { useState } from "react";
import type { QuestionProps } from "../../types/index";

// interface ShortAnswerProps {
//     question: Question
// }

function ShortAnswer({question, onAnswer} : QuestionProps) {
        const [answerGiven, setAnswerGiven] = useState<string>("")
    return (
        <div>
            {/* questions header */}
            <p>{question.question}</p>
            <div>
                <input type="text" 
                    value={answerGiven}
                    placeholder={"type your answer here"}
                    onChange={(e) => {
                        setAnswerGiven(e.target.value)
                        onAnswer(question.id, e.target.value)
                    }} 
                />
            </div>
        </div>
    )
}

export default ShortAnswer