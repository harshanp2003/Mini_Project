import React, { useState } from 'react'

import Axios from "axios";
import { useNavigate} from "react-router-dom";

const LoginSignup2 = ()=>{

    // const [action,setAction]=useState("SignUp");
    const [newUser,setNewUser]=useState({
        stu_name:"", //name field in the form should be same as here
        email:"",
        pswd:""
    });
  
    const nav=useNavigate();

    function handleChange(event){
        const {name,value}=event.target;
        setNewUser(prevUser => {
            return {...prevUser,
                [name]:value
            };
        });
    }
    function handleRegister(event){
        console.log(newUser)
        event.preventDefault();
        try{
                Axios.post("http://localhost:3001/register",{
                    name:newUser.stu_name,
                    email:newUser.email,
                    pswd:newUser.pswd
            })
            .then((response)=>{
                if(response.data==="registered") alert("Successful Registration")
                else{
                    alert("user already registered")
                }
            })
            .catch(e=>{
                console.log(e)
            })
            setNewUser({
              stu_name:"",
              email:"",
              pswd:""
            });
        }catch(err){
            console.log(err)
        }
        
    }


    return (
        <div class="bg-white w-screen font-sans text-gray-900">
        <div class=" ">
          <div class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <div class="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
                       <h1 class="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">Sign up</h1>
              <div class="text-lg sm:text-xl">
                
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
          <form class="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8" onSubmit={handleRegister}>
          <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="name">Name</label><input class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="name"  onChange={handleChange} 
                name="stu_name"
                value={newUser.stu_name}
                required/><span class="my-2 block"></span></div>

            <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">E-mail</label><input class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="email" type="email" placeholder="email" 
                onChange={handleChange} 
                name="email"
                value={newUser.email}
            
            required/><span class="my-2 block"></span></div>
         
            <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="password">Password</label><input class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="password" type="password" placeholder="******************"
             onChange={handleChange} 
                name="pswd" //this name should be same as in line 12,13,14
                value={newUser.pswd}
            
            
             required /></div>
            
           
            <div class="flex items-center">
              <div class="flex-1"></div>
              <button class="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white" type="submit">Create account</button>
            </div>
          </form>
        </div>
      </div>
      
    )
}
export default LoginSignup2;