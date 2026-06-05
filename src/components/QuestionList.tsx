import type { Question } from "../types/index";
import MultipleChoice from "./questions/MultipleChoice";
import TrueFalseNotGiven from "./questions/TrueFalseNotGiven";
import ShortAnswer from "./questions/ShortAnswer";
import SentenceCompletion from "./questions/SentenceCompletion";
import MatchingInformation from "./questions/MatchingInformation";

interface QuestionListProps {
    questions: Question[]
}

function renderQuestion(question: Question) {
    switch(question.type) {
        case "multiple-choice":
            return <MultipleChoice question={question} />
        case "true-false-not-given":
            return <TrueFalseNotGiven question={question} />
        case "short-answer":
            return <ShortAnswer question={question} />
        case "sentence-completion":
            return <SentenceCompletion question={question} />
        case "matching-information":
            return <MatchingInformation question={question} />
        default:
            return null
    }
}

function QuestionList({questions} : QuestionListProps) {
   return(
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    {renderQuestion(question)}
                </div>
            ))}
        </div>
    )
}

export default QuestionList

