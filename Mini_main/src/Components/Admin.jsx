import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function Admin() {
  const loc = useLocation();
  const userid = loc.state;
  //     const nav=useNavigate();
  const [data, setData] = useState([]);

  async function getIssues() {
    const response = await Axios.get(`http://localhost:3001/admin`)
    setData(response.data)
    console.log(response.data);
  }
  useEffect(() => {
    getIssues();
  }, [])


  async function handleStatus(status,id,uid)
  {
   const response= await Axios.put(`http://localhost:3001/adminUpdate/${status}-${id}-${uid}`)
    // window.location.reload();
  }

  return (
    <div className='prev_issue_container'>
      <center><p>Previous issues Submitted and its status</p></center>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Issue Id</th>
            <th scope="col">User Id </th>
            <th scope="col">Street Name</th>
            <th scope="col">Area</th>
            <th scope="col">pincode</th>
            <th scope="col">city</th>
            <th scope="col">issue</th>
            <th scope="col">Phone no</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Current Status</th>

          </tr>
        </thead>
        <tbody>
          {data.map(issue => {
            const formatdate=issue.date.substring(0,10);
            return (
             
              <tr>
                <th scope="row">{issue.issue_id}</th>
               
                <td>{issue.u_id}</td>
                <td>{issue.street_name}</td>
                <td>{issue.area}</td>
                <td>{issue.pincode}</td>
                <td>{issue.city}</td>
                <td>{issue.issue}</td>
                <td>{issue.phone_no}</td>
                <td>{issue.description}</td>
                <td>{formatdate}</td>
               <ul>
               <li><button value="pending" style={{backgroundColor:'yellow'}} onClick={()=>{handleStatus('pending',issue.issue_id,issue.u_id); window.location.reload()}} >Pending</button></li>
               <li><button value="solved" style={{backgroundColor:'green'}} onClick={()=>{handleStatus('solved',issue.issue_id,issue.u_id); window.location.reload()}} >Solved</button></li>
               <li><button value="rejected" style={{backgroundColor:'red'}} onClick={()=>{handleStatus('rejected',issue.issue_id,issue.u_id); window.location.reload()} }>Rejected</button></li>
               
                    
              
               </ul>
                   
               
              
              </tr>
            )
          })

          }

        </tbody>
      </table>

    </div>
  )
}

export default Admin;