import React from "react";
import QuestionList from "./QuestionList";

function AdminNavBar({ onChangePage }) {

  // function handleList(){
  //  QuestionList()
  // }
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={(QuestionList) => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
