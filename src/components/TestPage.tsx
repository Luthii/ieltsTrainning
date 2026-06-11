
import { useState } from "react";
import type { Test, UserAnswer } from "../types/index";

import QuestionList from "./QuestionList"
import Timer from "./Timer"

interface TestPageProps {
    test: Test
}
            
// props are values you pass into a component
// common syntax: function FuncName(variableName: variableType), then you access it 
// writting {variableAttribute} : VariableType enable calling the attribute directly
function TestPage({ test }: TestPageProps) {
    //basically creates a variable called CurrentSection and creates a
    //setter method for it called setCurrentSection.
    // useState[0] is a value and useState[1] is a setter
    // and useState(0) means this variable is a number
    const [currentSection, setCurrentSection] = useState(0)
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
    var currentSectionData = test.sections[currentSection];

    function handleOnAnswer(questionId: number, newAnswer : string) {
         const auxAnswer = userAnswers.find((userAnswers) => userAnswers.questionId == questionId)
         if(auxAnswer) {
            const updatedAnswers = userAnswers.map( (answer_) => 
                    {
                        if(answer_.questionId == questionId)
                            return {...answer_, answer: newAnswer }

                        return answer_
                    }
                )
            setUserAnswers(updatedAnswers)
         }
         else {
            setUserAnswers([...userAnswers, {questionId, newAnswer}])
         }
    }

    function handleTimeUp() {
        console.log("time is up!")
    }

    function previousSection() {
        if(currentSection > 0)
            setCurrentSection(currentSection - 1)
    }

    function nextSection() {
        if(currentSection < test.sections.length - 1)
            setCurrentSection(currentSection + 1)
    }

    return (
        <div className="test-page">
            
        {/*Header*/}
        <header className="test-header">
            {/* the two parameters for the timer */}
            <Timer totalSeconds={3600} onTimeUp={handleTimeUp} />
        </header>

            {/* Section name */}
            <div className="section-indicator">
                Section {currentSection + 1} of {test.sections.length}
            </div>

            {/* Split panel */}
            <div class-name="split-panel">
                
                {/* LEFT - PASSAGE */}
                <div className="passage-panel">
                {/* the curly brackets is to embed javascript expressions */}
                <h2>{currentSectionData.passage.title}</h2>
                <p>{currentSectionData.passage.text}</p>
                </div>

                {/* RIGHT - QUESTIONS */}
                <div className="questions-panel">
                {/* <MultipleChoice question={test.questions[0]}/> */}
                <QuestionList questions={currentSectionData.questions} onAnswer={handleOnAnswer}/>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="navigation">
                <button onClick={previousSection}>Previous</button>
                <button onClick={nextSection}>Next</button>
            </div>

        </div>
    )
}

export default TestPage