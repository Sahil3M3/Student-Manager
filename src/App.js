import './App.css';
import Form from "./components/Form.js"
import Header from './components/Header';
import StudentList from './components/StudentList.js';

function App() {
  return (
    <div className="App">
     <Header/>
     <Form/>
     <StudentList/>
    </div>
  );
}

export default App;
