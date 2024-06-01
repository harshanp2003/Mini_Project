import React, { useState } from 'react'

import Axios from "axios";
import { useNavigate} from "react-router-dom";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
const LoginSignup = () => {
  const [action,setAction]=useState("Sign Up");
  
  const [newUser,setNewUser]=useState({
    stu_name:"",
    email:"",
    pswd:""
});
const [authUser,setauthUser]=useState({
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
          if(response.data==="logged in") nav('/api/data',{state:authUser.email})//nav redirects to the page where after logged in 
          else{
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
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      {action === "Sign Up" ? 
      <form onSubmit={handleRegister}>
      <div className='inputs'>
      <div className='input'>
          <img src={user_icon} alt='' />
          <input id="email" 
                type="text" 
                placeholder="Name" 
                onChange={handleChange} 
                name="stu_name"
                value={newUser.stu_name}
                required/>
        </div>
        
        <div className='input'>
          <img src={email_icon} alt='' />
          <input id="email" 
                type="email" 
                placeholder="email" 
                onChange={handleChange} 
                name="email"
                value={newUser.email}
                required/>
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input id="email" 
                type="password"   
                placeholder="Password" 
                onChange={handleChange} 
                name="pswd" //this name should be same as in line 12,13,14
                value={newUser.pswd}
                required/>
        </div>
        
       </div>
        <div className="submit-container">
          <button type="submit" className={action === "Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</button>
          <button className={action === "Sign Up" ? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button> 
        </div>
  
      </form>:



      <form onSubmit={handlelogin}>
      <div className='inputs'>
      
   
        
        <div className='input'>
          <img src={email_icon} alt='' />
          <input id="email" 
                type="email" 
                placeholder="email" 
                onChange={handleChangelogin} 
                name="email"
                value={authUser.email}
                required/>
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input id="email" 
                type="password"   
                placeholder="Password" 
                onChange={handleChangelogin} 
                name="pswd" //this name should be same as in line 12,13,14
                value={authUser.pswd}
                required/>
        </div>
         <div className="forgot-password">Forgot Password? <span>Click here</span></div>
       
        <div className="submit-container">
        <button  className={action === "Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</button>

         <button type="submit" className={action === "Sign Up" ? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button> 
        </div>
      </div>
      </form>
      }
     
      
   
    </div>
  )
}

export default LoginSignup;