

import { useNavigate } from "react-router-dom";
import Base from "../BasePage/Base";



export default function Dashboard({student}){
   const navigate = useNavigate()
    return(
      <Base>
     <h1>Welcome to students app</h1>

     <button className=" rounded-full bg-base-200 p-3 m-5"
     onClick={()=>navigate("/student/add")}
     >Add More Students</button>
      </Base>

    )}
     
    // student={student}
    // studentData={studentData}
    // setData = {setData}

  //   const[state,setState]=useState(false)
  //   function CheckState(){
  //       setState(!state)
  //       console.log("updation happen")
  //   }

  //   const[another,setAnother]=useState(false)
  //   function checkAnother(){
  //     setAnother(!another)
  //     console.log("updation another happen")
  //   }
  
  // useEffect(()=>{
  //   console.log("I am mounting")
  // })
