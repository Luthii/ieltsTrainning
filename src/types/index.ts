
//export = public
// interface = just a "data type"
//Passage is the text
export interface Passage {
    id: number
    title: string
    text: string
}

//kind of a enum
export type QuestionType =
    | "multiple-choice"
    | "true-false-not-given"
    | "short-answer"
    | "sentence-completion"
    | "matching-information"

export interface Question {
    id: number
    type: QuestionType
    question: string
    options?: string[] //only multiple choices
    answer: string
}

export interface QuestionProps {
    question: Question
    //this is an "event"
    //        parameters                              return
    onAnswer: (questionId: number, answer: string) => void
}

export interface Section {
    id: number
    passage: Passage
    questions: Question[]
}

export interface Test {
    id: number
    sections: Section[]
}

export interface UserAnswer {
    questionId: number
    answer: string
}