import "./Form.css"
import { useState } from "react";

const Form=(props)=>{

    function formHandler(event){
        event.preventDefault();
props.onAddStudent({...userInput,id:Math.random()});

    setUserInput({
        name:"",
        number:"",
        address:""
    })
    
    }
    
    const inputChangeHandler=(event)=>{
const {id,value}=event.target;     
setUserInput((ps)=>{
    return{
        ...ps,[id]:value
    }

})
   
    }
    const [userInput,setUserInput]=useState({
        name:"",
        number:"",
        address:""
    })

    return (
    <div className="form">
        <form onSubmit={formHandler}>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" value={userInput.name}  onChange={inputChangeHandler} ></input>
        <br/>
        <label htmlFor="number">Mobile : </label>
        <input type="number" id="number" value={userInput.number} onChange={inputChangeHandler} ></input>
        <br/>
        <label htmlFor="address">Address : </label>
        <input type="text" id="address" value={userInput.address} onChange={inputChangeHandler} ></input>
        <br/>
        <button type="submit">Add</button>
        </form>
    </div>)
}

export default Form;