import React, {useState} from "react";


function QuestionList() {
   const displayList = questions.map((question)=>{
    <li key ={question.id}>
     prompt: {question.prompt} 
     answers:{question.answers}
     correctindex:{question.correctIndex}
    </li>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayList}</ul>
    </section>
  );
}

export default QuestionList;
