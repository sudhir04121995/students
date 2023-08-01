
import Base from "../BasePage/Base"
import { AppState } from "../Context/AppProvider";
import CrumBar from "./CrumBar"
import StudentCard from "./StudentCard"
import { useState } from "react";

function StudentList(){

    const {studentData} =AppState();
    const [currentPage , setPage] = useState(1)

    return( 
        
        <Base>
        <CrumBar/>
        {studentData.slice(currentPage*2-2, currentPage*2).map((stud, idx)=>(
              <StudentCard
              student={stud}
              key={idx}
              />
        ))}
      

     <div className="join">

     <button
        onClick={()=>setPage(currentPage-1)}
        className={`join-item btn btn-md`}>Preview</button>

        {
[...Array(Math.ceil(studentData.length/2))].map((_, index)=> (
        <button
        onClick={()=>setPage(index+1)}
        className={currentPage === (index+1) ? "join-item btn btn-md btn-active" : "join-item btn btn-md"}>{index+1}</button>
    ))
}

<button
        onClick={()=>setPage(currentPage+1)}
        className={`join-item btn btn-md`}>Next</button>
     </div>

    

        </Base>

    )
}

export default StudentList