import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' ;
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import LoginSignup1 from './Components/LoginSignup1';
import LoginSignup2 from './Components/LoginSignup2';
import Landing1 from './Components/Landing1';
import Userdetails from './Components/Userdetails';
// import Hello from './Components/hello';
import Mainform from './Components/Mainform';
import PreviousIssues from './Components/PreviousIssues';
import Status from './Components/Status';
import Admin from './Components/Admin';
const routes=createBrowserRouter([
    {
        path:'/',
        element:<Landing1 />,
        errorElement:<div>Error: 404 Not Found </div>
    },
    {
       path:'/register',
       element:<LoginSignup1 />,
       errorElement:<div>Error: 404 Not Found </div>   ///what path mentioned here must be mentioned using nav in jsx
   },
   {
    path:'/user/signup',
    element:<LoginSignup2 />,
    errorElement:<div>Error: 404 Not Found </div>   ///what path mentioned here must be mentioned using nav in jsx
},
   {
       path:'/api/data',
       element:<Userdetails />,
       errorElement:<div>Error: 404 Not Found </div>
   },
   {
    path:'/main/form',
    element:<Mainform />,
    errorElement:<div>Error: 404 Not Found </div>
   },
   {
    path:'/user/issues',
    element:<PreviousIssues/>,
    errorElement:<div>Error: 404 Not Found </div>
   },
   {
    path:'/user_issues/status',
    element:<Status/>,

    errorElement:<div>Error: 404 Not Found </div>
   },
   {
    path:'/admin/access',
    element:<Admin/>,

    errorElement:<div>Error: 404 Not Found </div>
   },
   
  ])
ReactDOM.render(<RouterProvider router={routes}/>,document.getElementById("root"));
