import "./StudentList.css"
const StudentList=(props)=>{
    
return (
    <div className="studentList">
        <h2>All Students</h2>
        <ul>
        {
            props.students.map(element => {
                return <li key={element.id}> {element.name} {element.number} {element.address} 
                <button onClick={()=>props.onDelete(element.id)}> Delete</button> <button onClick={()=>props.onEdit({
                    id:element.id,name:element.name,address:element.address,number:element.number})}> Edit</button> </li>
            })
        }
        </ul>
    </div>
)
}

export default StudentList;