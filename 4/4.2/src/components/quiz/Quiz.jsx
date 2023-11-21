import React from 'react'
import QuizTitle from '../quizTitle/QuizTitle'
import Q1 from '../q1/Q1'
import Q2 from '../q2/Q2'
import './Quiz.css'


export default function Quiz() {
  return (
    <div id='box'>
        <QuizTitle/>
        <Q1/>
        <Q2/>
    </div>
  )
}
