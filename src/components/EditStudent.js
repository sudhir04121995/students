import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import { useNavigate, useParams } from "react-router-dom";
import CrumBar from "./CrumBar";
import { AppState } from "../Context/AppProvider";



function EditStudents( ){
    
  const {studentData,setData,crumState, setCrumState}= AppState()
  
    const navigate = useNavigate()

    const {id} = useParams()

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [qualification, setQualification] = useState("");
    
    useEffect(()=>{
       console.log("id : ", id)
       const selectedStudent= studentData.find((stud,index)=>stud.id === parseInt(id));
       console.log(selectedStudent)

       setIdx(selectedStudent.id);
    setName(selectedStudent.name);
    setBatch(selectedStudent.batch);
    setEmail(selectedStudent.email);
    setPhone(selectedStudent.phone);
    setQualification(selectedStudent.qualification)
    }, [id,studentData])

    function editStudent(){
        const editStudentObject = {
            id:idx,
            name,
            batch,
            email,
            phone,
            qualification
        }
        console.log(editStudentObject)
        
        const editIndex = studentData.findIndex((stud , index)=>stud.id === parseInt(id));
        console.log(editIndex)
        studentData[editIndex]=editStudentObject
        setData([...studentData])

        navigate("/student/all")
    }


    return(
     
<Base>

<CrumBar
      crumState={crumState} 
      setCrumState={setCrumState}
      />
      <div p-5>Please fill the form to add Edit student</div>
      <div className="form-control">
        <label className="input-group input-group-md m-2">
          <span>Id</span>
          <input
           type="number"
            placeholder="Enter Student Id" 
            className="input input-bordered input-md w-96 " 
            value={idx}
            onChange={(e)=>setIdx(e.target.value)}/>
        </label>
        <label className="input-group input-group-md m-2">
          <span>Name</span>
          <input type="text" 
          placeholder="Enter Student Name"
           className="input input-bordered input-md w-96" 
           value={name}
           onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label className="input-group input-group-md m-2">
          <span>Batch</span>
          <input type="text" 
          placeholder="Enter Student Batch"
           className="input input-bordered input-md w-96" 
           value={batch}
           onChange={(e)=>setBatch(e.target.value)}/>
        </label>
        <label className="input-group input-group-md m-2">
          <span>Email</span>
          <input type="text"
           placeholder="Enter Student Email" 
           className="input input-bordered input-md w-96" 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label className="input-group input-group-md m-2">
          <span>Phone</span>
          <input type="text"
           placeholder="Enter Student Phone"
            className="input input-bordered input-md w-96"
            value={phone} 
            onChange={(e)=>setPhone(e.target.value)}/>
        </label>
        <label className="input-group input-group-md m-2">
          <span>Education</span>
          <input type="text"
           placeholder="Enter Student Education" 
           className="input input-bordered input-md w-96" 
           value={qualification} 
            onChange={(e)=>setQualification(e.target.value)}/>
        </label>
        <button className=" rounded-full bg-base-200 p-2 m-5"
        onClick={ editStudent} >Edit Student</button> 
      </div>
    </Base>
    )
}

export default EditStudents;