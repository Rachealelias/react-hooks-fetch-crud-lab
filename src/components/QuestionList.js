import React, {useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";


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
//  <li key ={question.id}>
//      prompt: {question.prompt} 
//      answers:{question.answers}
//      correctindex:{question.correctIndex}
//     </li>
   <QuestionItem question = {question}
      deleteButton= {deleteButton}
      patchAnswers= {patchAnswers}
         />

   ))
   function deleteButton(id){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(()=>{
      const updateQuestion = questions.filter(ques => ques.id !== id)
      setQuestions(updateQuestion)
    })
   }

   function patchAnswers(id, correctIndex){
     fetch(`http://localhost:4000/questions/${id}`,{
       method:"PATCH",
       headers:
       { "Content-Type": "application/json" },
       body: JSON.stringify({correctIndex})
     })
     .then(res => res.json())
     .then(data=>{
       const updatedQuestion = questions.map(ques =>{
         if (ques.id === data.id){
           return data
         }
         })
     setQuestions(updatedQuestion)
    })
  }
   
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayList}</ul>

    </section>
  );
}

export default QuestionList;
