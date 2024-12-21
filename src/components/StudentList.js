import "./StudentList.css"
const StudentList=(props)=>{
return (
    <div className="studentList">
        <h2>All Students</h2>
        <ul>
        {
            props.students.map(element => {
                return <li key={element.id}>{element.name} {element.number} {element.address} 
                <button> Delete</button> <button> Edit</button></li>
            })
        }
        </ul>
    </div>
)
}

export default StudentList;