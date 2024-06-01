import React, { useState } from 'react'

import Axios from "axios";
import { useLocation, useNavigate} from "react-router-dom";

const Mainform = ()=>{
  const loc=useLocation();
    const user_id=loc.state;
    const [newNotes,setNotes]=useState({
      street_name:"",
      area:"",
      pincode:"",
      city:"",
      issue_selection:"",
      phone:"",
      issue_description:"",
      date:""
  });
  // const [file,setFile]=useState("")


    function handleChange(event){
    const {name,value}=event.target;
    // console.log(event.target)
    // console.log(newNotes);
    setNotes(prevNote => {
        return {...prevNote,
            [name]:value
        };
    });
}


 function handleSubmit(event){
  event.preventDefault();

  // console.log(newNotes);
//  console.log(file);
  // console.log(newNotes);
  
  const formdata={     //in axios and req.body
    // file:file,
    userid:user_id,
    street:newNotes.street_name,
    area:newNotes.area,
    pincode:newNotes.pincode,
    city:newNotes.city,
    issueselection:newNotes.issue_selection,
    phone:newNotes.phone,
    issuedescription:newNotes.issue_description,
    date:newNotes.date,
}
// const config = {
//   headers: {
//       'content-type': 'multipart/form-data',
//   },
//   data: formdata,
// }
  try{
          Axios.post("http://localhost:3001/upload",formdata)
      .then((response)=>{
          if(response.data==="upload successful") alert(response.data)
          else alert("invalid upload")
      })
      .catch(e=>{
        console.log(e);
      })
      setNotes({
        street_name:"",
        area:"",
        pincode:"",
        city:"",
        issue_selection:"",
        phone:"",
        issue_description:"",
        date:""
      });
      // setFile("")
  }
  catch(err){
      console.log(err)
  }
 
}


  return (
    <div class="lg:m-10">
    <form onSubmit={handleSubmit} class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10" enctype="multipart/form-data" >
    <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Report an issue</h1>
  
    <div class="grid gap-3 md:grid-cols-2">
      <div> 
        <label class=""> street Name </label>
        <input type="text" placeholder="Street Name" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"  name='street_name' value={newNotes.street_name} onChange={handleChange} />
      </div>
      <div>
        <label class=""> Area </label>
        <input type="text" placeholder="Area" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" name='area' value={newNotes.area} onChange={handleChange}/>
      </div>
    </div>
    <div>
      <label class=""> Pincode</label>
      <input type="text" placeholder="pincode" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" name='pincode' value={newNotes.pincode} onChange={handleChange}/>
    </div>
    <div>
      <label class="">City </label>
      <input type="text" placeholder="eg Mysore City" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" name='city' value={newNotes.city} onChange={handleChange}/>
    </div>
    
    <div class="grid gap-3 lg:grid-cols-2">
      <div>
        <label class=""> Select The issue </label>
        <div class="relative w-56 mt-2 bg-gray-100 rounded-lg">
          <select   name="issue_selection" id="select-1"  value={newNotes.issue_selection} onChange={handleChange}>
          {/* <label for="select-1" class="flex w-full cursor-pointer rounded-lg select-none border p-2 px-3 text-sm text-gray-700 ring-blue-400 ">Select Option </label> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-5 top-3 h-4 text-gray-600 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg> */}
          {/* <ul class="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3"> */}
             <option class="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white">select</option>
            <option class="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white" value='Child_Labour'>Child Labour</option>
            <option class="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white" value='water_scarcity'>Water Scarcity</option>
            <option class="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white" value='Bad_roads'>Bad Roads</option>
          {/* </ul> */}
          </select>   
          </div>  
      </div>
      <div>
        <label class=""> Phone: <span class="text-sm text-gray-400">(optional)</span> </label>
        <input type="text" placeholder="+91 88888 99999" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" name='phone' value={newNotes.phone} onChange={handleChange}/>
      </div>
    </div>

    <div>
      <label htmlFor="">Describe the issue</label>
      <textarea id="" cols="80" rows="10" name='issue_description' value={newNotes.issue_description} onChange={handleChange} placeholder='decribe the issues in less than 255 words'></textarea>
    </div>
    <div>
      <label htmlFor="">Select the date</label>
      <input type="date" name="date" id="date" value={newNotes.date} onChange={handleChange}/>
    </div>
    {/* <div>
      <label>Select the files (optional)</label>
      <input type="file" name="file" onChange={(event)=>setFile(event.target.files[0])}/>
    </div> */}
  
    {/* <div class="checkbox">
      <input type="checkbox" id="chekcbox1"  />
      <label for="checkbox1">I agree to the <a href="#" target="_blank" class="text-blue-600"> Terms and Conditions </a> </label>
    </div> */}
  
    <div>
      <button type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Submit</button>
    </div>
  </form>
  
  </div>
  )
}

export default Mainform;