import "./Form.css"
const Form=()=>{
    return (
    <div className="form">
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" value={""}></input>
        <br/>
        <label htmlFor="number">Mobile : </label>
        <input type="number" id="number"></input>
        <br/>
        <label htmlFor="address">Address : </label>
        <input type="text" id="address"></input>
    </div>)
}

export default Form;