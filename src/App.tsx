import './App.css'

//this format of import is when the file only exports one thing using the export default
import TestPage from "./components/TestPage"
//this type of import format specifies what on the file we are importing
import { mockTest } from "./data/testData"


function App() {
  return (
    <TestPage test={mockTest} />
  )
}

export default App
