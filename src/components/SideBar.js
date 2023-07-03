import { useNavigate } from "react-router-dom"

function SideBar(){
    const navigate = useNavigate()
    return(
        <div className="side-bar-styles p-8">
           <div>
           <ul  className=" action">
                <li className="rounded-full p-2 hover:bg-sky-700">
                    <button
                     onClick={()=>navigate("/")}
                    >Dashboard</button>
                </li> 
                <li  className="rounded-full p-2 hover:bg-sky-700">
                    <button
                     onClick={()=>navigate("/profile")}
                    >profile</button>
                </li>
                <li  className="rounded-full p-2 hover:bg-sky-700">
                    <button 
                     onClick={()=>navigate("/student/all")}
                    >Student List</button>
                </li>
                <li  className="rounded-full p-2 hover:bg-sky-700">
                    <button 
                     onClick={()=>navigate("/interview/Notes")}
                    >Interview Notes</button>
                </li>
                </ul>
           </div>
                <div className="logout-btn rounded-full  hover:bg-sky-700 p-2">
                   <button>Logout</button>
                </div>
            
        </div>
    )
}
export default SideBar