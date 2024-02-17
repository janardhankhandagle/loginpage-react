import React, { useState } from "react"
import './App.css';
export default function Login() {
const[user,setUser]=useState("")
const[password,setPassword]=useState("")
const[userErr,setUserErr]=useState(false)
const [passErr,setPassErr]=useState(false)
function clickMe(e){
    if(user.length<3|| password.length<3){
        alert("fill proper form")
    }
    else {
       alert("your form sucessfully submitted")
    }

   
   e.preventdefault()
    }
    function eventHandler(e){
        let item=e.target.value;
   if(item.length<3)
   {
   setUserErr(true)
}
else{
    setUserErr(false)
}
setUser(item)
  }
  function userHandler(e){
    let item=e.target.value;
if(item.length<3)
{
setPassErr(true)
}
else{
setPassErr(false)
}
setPassword(item)
}

    return (
        <> 
        <center>
            <form onSubmit={clickMe}>
            <div>
            <h1> login form</h1>
            <input type="text" placeholder="enter your username" onChange={eventHandler}/>{userErr?<span> user not valid</span>:""}
            <br/>
            <input type="text" placeholder="enter your pasword"onChange={userHandler}/>{passErr?<span> user not valid</span>:""}
            <br></br>
            <button type="submit">login</button>
        </div>
            </form>
        </center>

        </>
    )
}