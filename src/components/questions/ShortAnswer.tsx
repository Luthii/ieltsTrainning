import { useState } from "react";
import type { Question } from "../../types/index";

interface ShortAnswerProps {
    question: Question
}

function ShortAnswer({question} : ShortAnswerProps) {
        const [answerGiven, setAnswerGiven] = useState<string>("")
    return (
        <div>
            {/* questions header */}
            <p>{question.question}</p>
            <div>
                <input type="text" 
                    value={answerGiven}
                    placeholder={"type your answer here"}
                    onChange={(e) => setAnswerGiven(e.target.value)} 
                />
            </div>
        </div>
    )
}

export default ShortAnswer