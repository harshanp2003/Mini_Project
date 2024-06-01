import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function Status() {
  const loc = useLocation();
  const {userid,selected} = loc.state;
  //     const nav=useNavigate();
  const [data, setData] = useState([]);

  async function getIssues() {
    const response = await Axios.get(`http://localhost:3001/status/${userid}-${selected}`)
    setData(response.data)
    console.log(response.data);
  }
  useEffect(() => {
    getIssues();
  }, [])


  return (
    <div className='prev_issue_container'>
      <center><p>Current Status of the issues</p></center>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Issue Id</th>
            <th scope="col">User Id </th>
            <th scope="col">city</th>
            <th scope="col">issue</th>
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
                <td>{issue.city}</td>
                <td>{issue.issue}</td>
                <td>{formatdate}</td>
                <td>{issue.curr_status}</td>
              
              </tr>
            )
          })

          }

        </tbody>
      </table>

    </div>
  )
}

export default Status;