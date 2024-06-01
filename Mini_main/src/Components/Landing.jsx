// import React from 'react'
// import { useNavigate} from "react-router-dom";
// import social_img from './Assets/issue.jpg';
// const Landing = () => {
//     const nav=useNavigate();
//   return (
//     <div>
//     <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white" >
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">PIMS</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse justify-content-end"  id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">About us</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Contact us</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Login/Signup</a>
//         </li>


//       </ul>

//     </div>

//   </div>
// </nav>
// <div>
// <section>
//         <img src={social_img} alt="img" />
//       </section>
// </div>

//     </div>

//   )
// }

// export default Landing;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import social_img from './Assets/issue.jpg';
// import '../index.css'
const customstyle={
  color:"grey"
};
const Landing = () => {
  const nav = useNavigate();

  return (
    <div style={{backgroundColor:"purple"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PIMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
               
                <button onClick={()=>nav("/register")}>Login/Signup</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <section>
          <img className="imghome"src={social_img} alt="img" />
        </section>
        <section id='about'>
          <p className='phome'>A Public issues Management website(PIMS) is a platform for collaborative problem-solving where users discuss and propose solutions to societal challenges. These platforms enable users to engage in meaningful dialogue, share ideas, and collaborate with various stakeholders, including citizens, government agencies, and non-profits. By leveraging collective wisdom and technology, these websites empower communities to address a wide range of issues, fostering transparency, accountability, and positive change in society.</p>
        </section>
        <section id='Contact'>
          <pre>
            <p className='phome' style={customstyle}>email:pims@gmail.com</p>
            <p className='phome' style={customstyle}>tel:'7406304658'</p>
            <p className='phome' style={customstyle}>location:'Mysore'</p>
          </pre>
        </section>
      </div>
      {/* This below button is to check working of form  */}
      <button onClick={()=>nav("/main/form")}>Click here to report</button> 
    </div>
  );
};

export default Landing;
