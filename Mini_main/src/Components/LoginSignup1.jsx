import React, { useState } from 'react'

import Axios from "axios";
import { useNavigate} from "react-router-dom";


const LoginSignup1 = () => {
    // const [action,setAction]=useState("Login");
    
    
  const [authUser,setauthUser]=useState({
    email:"",
    pswd:""
  });
  const nav=useNavigate();
  
  
  function handleChangelogin(event){
    const {name,value}=event.target;
    setauthUser(prevUser => {
        return {...prevUser,
            [name]:value
        };
    });
  }
  function handlelogin(event){
   
    event.preventDefault();
    try{
            Axios.post("http://localhost:3001/login",{
                
                username:authUser.email,
                password:authUser.pswd
        })
        .then((response)=>{
            if(response.data==="logged in") 
            {
              console.log("Verified");
              nav('/api/data',{state:authUser.email})//nav redirects to the page where after logged in 
             
            }else{
                alert(response.data);
            }
        })
        .catch(e=>{
            console.log(e)
        })
        setauthUser({
        
          email:"",
          pswd:""
        });
    }catch(err){
        console.log(err)
    }
    
  }

return (
  // {action === "Sign Up" ? nav(/user/signup):
    <form class="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10" onSubmit={handlelogin}> 
  <h1 class="text-xl font-semibold lg:text-2xl">Login</h1>
  <p class="pb-4 text-gray-500">Sign in to access your account</p>

  
  <div class="">
    <label class=""> Email Address </label>
    <input type="email" id="email" placeholder="Info@example.com" onChange={handleChangelogin} name="email"    value={authUser.email} class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" required/>
  </div>
  <div>
    <label class=""> Password </label>
    <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring" onChange={handleChangelogin} 
                  name="pswd"
                  value={authUser.pswd}
                  required />
  </div>

  <div>
    <button  type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Login</button>
    <button onClick={()=>{nav('/user/signup')}} type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring">Signup</button>

  </div>
</form>
  

)
}

export default LoginSignup1;