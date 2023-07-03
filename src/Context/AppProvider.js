import { createContext, useContext, useState } from "react"

const AppCtx = createContext();
 
function AppProvider({Children}){

    const database = [
        {
          id: 1,
          name: "sudhir",
          batch: "B47",
          email: "dfguhh@gmail.com",
          phone: 87766964479,
          qualification: "B.E",
        },
        {
          id: 2,
          name: "VICKY",
          batch: "B47",
          email: "dfguhh@gmail.com",
          phone: 87766964479,
          qualification: "B.E",
        },
      ];
      const pages = [
        {
          name: "students",
          path: "/student/all",
        },
      ]; 

    const [studentData, setData] = useState(database);
    const [crumState, setCrumState] = useState(pages);

    return(
        <AppCtx.Provider 
            value={{
            studentData,
            setData,
            crumState, 
            setCrumState
        }}
        >

{Children}

        </AppCtx.Provider>

    )
}

export const AppState = () =>{
    return useContext(AppCtx);
}
export default AppProvider;