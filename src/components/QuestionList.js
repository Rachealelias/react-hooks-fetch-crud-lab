import React, {useState,useEffect} from "react";


function QuestionList() {
  const [questions, setQuestions] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setQuestions(data)
      });
  },[]);
   const displayList = questions.map((question)=>(
    <li key ={question.id}>
     prompt: {question.prompt} 
     answers:{question.answers}
     correctindex:{question.correctIndex}
    </li>
   ))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayList}</ul>
    </section>
  );
}

export default QuestionList;
