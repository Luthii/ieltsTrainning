
import { useState } from "react";
import type { Test } from "../types/index";

interface TestPageProps {
    test: Test
}
            
// props are values you pass into a component
//comon syntax: function FuncName(variableName: variableType), then you access it 
// writting {variableAttribute} : VariableType enable calling the attribute directly
function TestPage({ test }: TestPageProps) {
    //basically creates a variable called CurrentSection and creates a
    //setter method for it called setCurrentSection.
    // useState[0] is a value and useState[1] is a setter
    // and useState(0) means this variable is a number
    const [currentSection, setCurrentSection] = useState(0)

    return (
        <div>
            <h1>Test Page Works!</h1>
        </div>
    )
}

export default TestPage