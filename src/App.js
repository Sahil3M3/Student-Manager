import { useState } from 'react';
import './App.css';
import Form from "./components/Form.js"
import Header from './components/Header';
import StudentList from './components/StudentList.js';


function App() {
  const [students,setStudents]=useState( [{id:1, name:"Sahil",number:987654321,address:"Nagpur"}])
  
  const onAddStudent=(student)=>{
  setStudents((ps)=>{
    return [...ps,student]
  })
  }

  return (
    <div className="App">
     <Header studentCount={students.length}/>
     <Form onAddStudent={onAddStudent} />
     <StudentList students={students} />
    </div>
  );
}

export default App;
