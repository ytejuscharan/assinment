import { useState } from "react";
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './RegisterStyling.css';

function Register(){
    const [studentname,setstudentName] = useState("");
    const [Gender,setGender] = useState("");
    const [email,setEmail] = useState("");
    const [Fathername,setFatherName] = useState("");
    const [Mothername,setMotherName] = useState("");
    const [Mobile,setMobile] = useState("");
    const [whatsapp,setWhatsapp] = useState("");
    const [GurdianNumber,setGurdianNumber] = useState("");
    const [Adress,setAdress] = useState("");
    const [SSLCBoard,setSSLCBoard] = useState("");
    const [Schoolname,setSchoolName] = useState("")
    const [SchoolAddress,setSchoolAddress] = useState("")
    const [Course,setCourse] = useState("")
    const [Comb,setComb] = useState([])
    const [Combination,setCombination] = useState([])
    const [Res_Day,setRes_Day] = useState("")
    const [D_O_E,setD_O_E] = useState("")

    const course = [
       {
        name:'Science',combination:[
            {
                name : 'PCMB'
            },
            {
                name : 'PCMC'

            },
            {
                name : 'PCMS'
            }
        ]
       },
       {
        name : 'Commerce', combination:[
            {
                name : 'CEBA'
            },
            {
                name : 'MEBA'
            }
        ]
       }
        
    ]

    const handlesubmit= (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3006/register',{studentname,email,Fathername,Mothername,
    Mobile,whatsapp,GurdianNumber,Adress,SSLCBoard,SchoolAddress,Schoolname,Course,Comb,Res_Day,D_O_E,Gender})
        .then(result=>{console.log(result)
            toast.success('successfully Registered');
            setTimeout(() => {
                Navigate('/log')
            }, 6000);
        })
            
        .catch(err=>console.log(err))

    }
    function handlecourse(e) {
        setCourse(e.target.value)
        setCombination(course.find(m => m.name === e.target.value).combination);
    }
    return (
        <div>
            <div>
                <header>
                <img src="data:image/jpeg;base64,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" />
                    </header>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <center><h2>Register</h2></center>
                <br>
                </br>
                
                <form onSubmit={handlesubmit}><center>
                    <table>
                        <div>
                    <tr>
                        <td>
                        <label htmlFor="StduentName">
                            <strong>StudentName</strong></label></td>
                   
                        <td><input type="text" placeholder="StudentName" autoComplete="off"
                        name="UserName" onChange={(e)=> setstudentName(e.target.value)} required/></td>

                        <td>
                        <label htmlFor="Email">
                            <strong>Email</strong></label></td>
                   
                        <td><input type="text" placeholder="Enter Email" autoComplete="off"
                        name="Email" onChange={(e)=> setEmail(e.target.value)} required/></td>
                        </tr>
                    <tr>
                        <td>
                        <label htmlFor="FatherName">
                            <strong>FatherName</strong></label></td>
                   
                        <td><input type="text" placeholder="FatherName" autoComplete="off"
                        name="FatherName" onChange={(e)=> setFatherName(e.target.value)} required/></td>

                        <td>
                        <label htmlFor="Mothername">
                            <strong>Mothername</strong></label></td>
                   
                        <td><input type="text"  autoComplete="off"
                        name="Mothername" onChange={(e)=> setMotherName(e.target.value)} required/></td>
                        </tr>
                                            <tr>
                        <td>
                        <label htmlFor="Mobile">
                            <strong>Father/Mother:no</strong></label></td>
                   
                        <td><input type="tel" autoComplete="off"
                        name="Mobile" onChange={(e)=> setMobile(e.target.value)} required/></td>

                        <td>
                        <label htmlFor="Whatsapp">
                            <strong>Whatsapp:no *</strong></label></td>
                   
                        <td><input type="tel" autoComplete="off"
                        name="Whatsapp" onChange={(e)=> setWhatsapp(e.target.value)} required/></td>
                        </tr>
                                            <tr>
                        <td>
                        <label htmlFor="GurdianNumber">
                            <strong>GurdianContact</strong></label></td>
                   
                        <td><input type="tel" autoComplete="off"
                        name="GurdianNumber" onChange={(e)=> setGurdianNumber(e.target.value)} required/></td>

                        <td>
                        <label htmlFor="Address">
                            <strong>Address</strong></label></td>
                   
                        <td><textarea type="textarea" autoComplete="off"
                        name="Address" rows="1" cols="20" onChange={(e)=> setAdress(e.target.value)} required/></td>
                        </tr>
                                            <tr>
                        <td>
                        <label htmlFor="SSLCBoard"><strong>SSLC_Board *</strong></label></td>
                   
                        <td>  <select name="cars" id="cars" autoComplete="off" onChange={(e)=> setSSLCBoard(e.target.value)} required>
                        <option value=""></option>
                       <option value="State">State</option>
                       <option value="CBSC">CBSC</option>
                       <option value="ICSE">ICSE</option>
                       <option value="Andhra Board">Andhra Board           </option>
                       </select></td>

                        <td>
                        <label htmlFor="Schoolname">
                            <strong>SchoolName</strong></label></td>
                   
                        <td><input type="text" autoComplete="off"
                        name="Schoolname" onChange={(e)=> setSchoolName(e.target.value)} required/></td>
                        </tr>
                        <tr>
                        <td>
                        <label htmlFor="SchoolAddress">
                            <strong>SchoolAddress</strong></label></td>
                   
                        <td><textarea type="text" autoComplete="off"
                        name="SchoolAddress" rows="1" cols="20" onChange={(e)=> setSchoolAddress(e.target.value)} required/></td>
                        <td>
                        <label htmlFor="Gender"><strong>Gender *</strong></label></td>
                   
                        <td>  <select name="Gender" id="Gender" autoComplete="off" onChange={(e)=> setGender(e.target.value)} required>
                        <option value=""></option>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                       </select></td>
                        

                        </tr>
                        <tr>
                            <td><label htmlFor="Course">
                            <strong>Course</strong></label></td>
                                <td><select className="course" onChange={handlecourse}>
                                    <option>--Select--</option>
                                    {course.map(e =>(
                                        <option value={e.name}>{e.name}</option>
                                    ))}
                                </select></td>
                                <td>
                                <label htmlFor="Course">
                                 <strong>Course</strong></label></td>
                                <td><select className="course" onChange={(e)=> setComb(e.target.value)}>
                                    <option>--Select--</option>
                                 {Combination.map(e => (
                                    <option value={e.name}>{e.name}</option>
                                 ))}
                                </select></td>
                            
                        </tr>
                        <tr>
                        <td>
                        <label htmlFor="Residential/DayScholar"><strong>Residential/DayScholar *</strong></label></td>
                   
                        <td>  <select name="Residential/DayScholar" id="Residential/DayScholar" autoComplete="off" onChange={(e)=> setRes_Day(e.target.value)} required>
                        <option value="">--Select--</option>
                       <option value="Residential">Residential</option>
                       <option value="DayScholar">DayScholar</option>
                       </select></td>
                       <td>
                        <label htmlFor="D_O_E"><strong>Date_Of_Exam *</strong></label></td>
                   
                        <td>  <select name="Doe" id="Doe" autoComplete="off" onChange={(e)=> setD_O_E(e.target.value)} required>
                        <option>--Select--</option>
                       <option value="07-01-2024">07-01-2024</option>
                       <option value="22-01-2024">22-01-2024</option>
                       </select></td>
                        </tr>
                        </div>
                    </table>
                    <div>
                        <br></br>
                    <center><button type="submit" className="submit" >Register</button></center>
                    <ToastContainer></ToastContainer>
                </div>
                </center></form>
                <br>
                </br>


            </div>
        </div>
    );
        
    

}

export default Register;