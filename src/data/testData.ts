//import type means only importing for cheking, not as real time code
import type { Test } from "../types/index"

export const mockTest: Test = {
  id: 1,
  passage: {
    id: 1,
    title: "Remote Work Policy Update",
    text: `Effective from the 1st of March, all employees at Greenfield Solutions 
    will be eligible to work remotely up to three days per week. This policy 
    applies to all full-time staff members who have completed their probationary 
    period of six months.

    Employees wishing to work remotely must submit a Remote Work Request Form 
    to their line manager at least five business days in advance. Approval is 
    subject to team requirements and project deadlines. Managers reserve the 
    right to require staff to attend the office on any given day if business 
    needs demand it.

    All remote workers are expected to be available during core hours of 9am 
    to 3pm. Outside of these hours, flexible scheduling is permitted provided 
    that the standard 37.5 hour working week is maintained. Employees must 
    ensure they have a suitable and secure working environment at home, 
    including a stable internet connection.

    The company will provide a one-time home office allowance of £200 to 
    eligible employees to assist with equipment setup. Claims must be submitted 
    within 90 days of the policy commencement date. Receipts are required for 
    all purchases. Items purchased using the allowance remain the property of 
    Greenfield Solutions and must be returned upon leaving the company.

    Any misuse of the remote work policy may result in the privilege being 
    withdrawn. Repeated violations may lead to disciplinary action in accordance 
    with the company's standard procedures. Questions regarding this policy 
    should be directed to the Human Resources department.`
  },
  questions: [
    // MULTIPLE CHOICE
    {
      id: 1,
      type: "multiple-choice",
      question: "How many days per week can employees work remotely?",
      options: ["One", "Two", "Three", "Five"],
      answer: "Three"
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Who must approve a remote work request?",
      options: ["HR department", "Line manager", "Team leader", "CEO"],
      answer: "Line manager"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is the core hours requirement for remote workers?",
      options: ["8am to 4pm", "9am to 5pm", "9am to 3pm", "10am to 3pm"],
      answer: "9am to 3pm"
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "How much is the home office allowance?",
      options: ["£100", "£150", "£200", "£250"],
      answer: "£200"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "Where should policy questions be directed?",
      options: ["Line manager", "Team leader", "HR department", "Finance department"],
      answer: "HR department"
    },

    // TRUE FALSE NOT GIVEN
    {
      id: 6,
      type: "true-false-not-given",
      question: "Employees must have worked at the company for at least six months to be eligible for remote work.",
      options: ["True", "False", "Not Given"],
      answer: "True"
    },
    {
      id: 7,
      type: "true-false-not-given",
      question: "Remote work requests must be submitted ten days in advance.",
      options: ["True", "False", "Not Given"],
      answer: "False"
    },
    {
      id: 8,
      type: "true-false-not-given",
      question: "The company offers a monthly allowance for home office expenses.",
      options: ["True", "False", "Not Given"],
      answer: "False"
    },
    {
      id: 9,
      type: "true-false-not-given",
      question: "Employees must work exactly 37.5 hours per week.",
      options: ["True", "False", "Not Given"],
      answer: "True"
    },
    {
      id: 10,
      type: "true-false-not-given",
      question: "The company provides a laptop to all remote workers.",
      options: ["True", "False", "Not Given"],
      answer: "Not Given"
    },

    // SHORT ANSWER
    {
      id: 11,
      type: "short-answer",
      question: "How many days in advance must a Remote Work Request Form be submitted?",
      answer: "five"
    },
    {
      id: 12,
      type: "short-answer",
      question: "Within how many days must the home office allowance claim be submitted?",
      answer: "90"
    },
    {
      id: 13,
      type: "short-answer",
      question: "What must employees include with their allowance claims?",
      answer: "receipts"
    },
    {
      id: 14,
      type: "short-answer",
      question: "What happens to items purchased with the allowance when an employee leaves?",
      answer: "returned"
    },
    {
      id: 15,
      type: "short-answer",
      question: "What may repeated violations of the remote work policy lead to?",
      answer: "disciplinary action"
    },

    // SENTENCE COMPLETION
    {
      id: 16,
      type: "sentence-completion",
      question: "All employees must be available between 9am and 3pm, known as _____ hours.",
      answer: "core"
    },
    {
      id: 17,
      type: "sentence-completion",
      question: "The remote work policy is effective from the 1st of _____.",
      answer: "March"
    },
    {
      id: 18,
      type: "sentence-completion",
      question: "Items bought with the allowance remain the _____ of Greenfield Solutions.",
      answer: "property"
    },
    {
      id: 19,
      type: "sentence-completion",
      question: "Misuse of the remote work policy may result in the privilege being _____.",
      answer: "withdrawn"
    },
    {
      id: 20,
      type: "sentence-completion",
      question: "Flexible scheduling is permitted outside core hours provided the standard _____ hour working week is maintained.",
      answer: "37.5"
    },

    // MATCHING INFORMATION
    {
      id: 21,
      type: "matching-information",
      question: "The department responsible for policy questions",
      options: ["Human Resources", "Finance", "Management", "IT"],
      answer: "Human Resources"
    },
    {
      id: 22,
      type: "matching-information",
      question: "The person who approves remote work requests",
      options: ["HR Manager", "Line manager", "Team leader", "Director"],
      answer: "Line manager"
    },
    {
      id: 23,
      type: "matching-information",
      question: "The document required to apply for remote work",
      options: ["Leave Request Form", "Remote Work Request Form", "HR Application", "Flex Work Form"],
      answer: "Remote Work Request Form"
    },
    {
      id: 24,
      type: "matching-information",
      question: "The document needed for allowance claims",
      options: ["Invoice", "Bank statement", "Receipts", "Purchase order"],
      answer: "Receipts"
    },
    {
      id: 25,
      type: "matching-information",
      question: "The policy that handles repeated violations",
      options: ["Remote work policy", "Standard disciplinary procedures", "HR guidelines", "Team charter"],
      answer: "Standard disciplinary procedures"
    }
  ]
}