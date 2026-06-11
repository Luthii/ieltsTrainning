import type { Question } from "../types/index";
import MultipleChoice from "./questions/MultipleChoice";
import TrueFalseNotGiven from "./questions/TrueFalseNotGiven";
import ShortAnswer from "./questions/ShortAnswer";
import SentenceCompletion from "./questions/SentenceCompletion";
import MatchingInformation from "./questions/MatchingInformation";

interface QuestionListProps {
    questions: Question[]
    onAnswer: (questionId: number, answer: string) => void
}

function renderQuestion(question: Question, onAnswer: (questionId: number, answer: string) => void) {
    switch(question.type) {
        case "multiple-choice":
            return <MultipleChoice question={question} onAnswer={onAnswer} />
        case "true-false-not-given":
            return <TrueFalseNotGiven question={question} onAnswer={onAnswer} />
        case "short-answer":
            return <ShortAnswer question={question} onAnswer={onAnswer} />
        case "sentence-completion":
            return <SentenceCompletion question={question} onAnswer={onAnswer} />
        case "matching-information":
            return <MatchingInformation question={question} onAnswer={onAnswer}/>
        default:
            return null
    }
}

function QuestionList({questions, onAnswer} : QuestionListProps) {
   return(
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    {renderQuestion(question, onAnswer)}
                </div>
            ))}
        </div>
    )
}

export default QuestionList

