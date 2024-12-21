import { useState } from 'react';
import './App.css';
import Form from "./components/Form.js"
import Header from './components/Header';
import StudentList from './components/StudentList.js';


function App() {
  const [students,setStudents]=useState( [{id:1, name:"Sahil",number:987654321,address:"Nagpur"}])
  const [editStudent,setEditStudent] =useState(null);
  
  const onAddStudent=(student)=>{
  setStudents((ps)=>{
    return [...ps,student]
  })
  }
const onDelete=(student)=>{
  console.log(student);
  
  setStudents((ps)=>{
    ps=ps.filter((s)=>{
      if(student!==s.id)
      {
        return s
      }
      return undefined;
    })
    return ps;
  })

}

const onEdit=(student)=>{
  onDelete(student.id);
  setEditStudent(student);
}
  return (
    <div className="App">
     <Header studentCount={students.length}/>
     <Form onAddStudent={onAddStudent} editStudent={editStudent} />
     <StudentList students={students} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
