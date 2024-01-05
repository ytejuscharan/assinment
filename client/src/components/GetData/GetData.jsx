import axios from "axios";
import { useState,useEffect } from "react";





function GetData(){
    const [students, setStudents] = useState([])
    const [search,setSearch]= useState("")

    useEffect(()=>{
        axios.get('http://localhost:3006/studentdata')
        .then(student => setStudents(student.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <>
        <header>
        <input type="text" placeholder="Search record" onChange={(e)=> setSearch(e.target.value)}/>
        </header>
      <div className="scroll-container">
      <div className="content">

        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <table border={1}>
                <thead border={1}>
                    <tr>
                        <th>StudentName</th>
                        <th>Email</th>
                        <th>Gender</th>   
                        <th> FatherName  </th>
                        <th>MotherName</th>
                        <th>Mobile</th>
                        <th>WhatsApp</th>
                        <th>GuardianNumber</th>
                        <th>Adress</th>
                        <th>SSLCBoard</th>
                        <th>SchoolAddress</th>
                        <th>Course</th>
                        <th>Combination</th>
                        <th>Residential/DayScholor</th>
                        <th>Date_of_Exam</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        students.filter((student)=>{
                            if(search===""){
                                return student}
                                else if(student.email.toLowerCase().includes(search.toLowerCase())){
                                    return student}
                                })
                                .map(student => {
                           return <tr>
                                <td>{student.studentname}</td>
                                <td>{student.email}</td>
                                <td>{student.Gender}</td>
                                <td>{student.Fathername}</td>
                                <td>{student.Mothername}</td>
                                <td>{student.Mobile}</td>
                                <td>{student.whatsapp}</td>
                                <td>{student.GurdianNumber}</td>
                                <td>{student.Adress}</td>
                                <td>{student.SSLCBoard}</td>
                                <td>{student.Schoolname}</td>
                                <td>{student.SchoolAddress}</td>
                                <td>{student.Course}</td>
                                <td>{student.Comb}</td>
                                <td>{student.Res_Day}</td>
                                <td>{student.D_O_E}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
        </div>

        </>
    )
        
    

}

export default GetData;