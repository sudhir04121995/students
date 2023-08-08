import {createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name : "loginInfo",
    initialState : {
        data :{
            userName :"",
            password :""
        }
    }, 
    reducers :{
        loginUser :(state , action)=>{
            state.data = action.payload
        },
        logoutUsers : (state , action )=>{
            state.data ={userName:" ",password:" "}
        }
    } 
})
export  const {loginUser,logoutUsers} = loginSlice.actions;
export default loginSlice.reducer 