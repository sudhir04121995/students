import { useState } from "react";
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
// import { useNavigate } from "react-router-dom";


function AddStudents() {
  const {studentData,setData} = AppState()

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");

  function addNewStudents(){
    const newStudentsObject={
      id : parseInt(id),
      name,
      batch,
      email,
      phone,
      qualification
    }
    console.log(newStudentsObject)

    setData([...studentData,newStudentsObject]);

    setId("");
    setName("");
    setBatch("");
    setEmail("");
    setPhone("");
    setQualification("") 
  }

  return (
    <Base>
      <div p-5>Please fill the form to add new student</div>
      <div className="form-control">
        <label className="input-group input-group-md m-2">
          <span>Id</span>
          <input
           type="number"
            placeholder="Enter Student Id" 
            className="input input-bordered input-md w-96 " 
            value={id}
            onChange={(e)=>setId(e.target.value)}/>
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
        onClick={addNewStudents} >Add Student</button> 
      </div>
    </Base>
  )
}

export default AddStudents;