
import { useState } from "react";
import type { Test } from "../types/index";

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

    function handleTimeUp() {
        console.log("time is up!")
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
                Section 1 of 3
            </div>

            {/* Split panel */}
            <div class-name="split-panel">
                
                {/* LEFT - PASSAGE */}
                <div className="passage-panel">
                {/* the curly brackets is to embed javascript expressions */}
                <h2>{test.passage.title}</h2>
                <p>{test.passage.text}</p>
                </div>

                {/* RIGHT - QUESTIONS */}
                <div className="questions-panel">
                {/* <MultipleChoice question={test.questions[0]}/> */}
                <QuestionList questions={test.questions}/>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="navigation">
                <button>Previous</button>
                <button>Next</button>
            </div>

        </div>
    )
}

export default TestPage