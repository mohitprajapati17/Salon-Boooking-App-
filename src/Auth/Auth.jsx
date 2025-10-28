import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SignupForm from './SignupForm';
import Login  from './LoginForm'
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
function Auth() {
    const location=useLocation();
    const navigate=useNavigate();
  return (
    <div className ="flex justify-center items-center h-[95vh]">
        <div className="shadow-lg p-5">
            {location.pathname==="/register"?<div>
                <SignupForm/>
                <div className='pt-5 text-center'>
                    Already have an Account ? <Button onClick ={()=>navigate("/login")}> Login</Button>
                </div>
                </div> 
                :<div>
                <Login/>
                <div className='pt-5 text-center'>
                    Not have an Account ? <Button onClick ={()=>navigate("/register")}> Register</Button>
                </div>
                </div> }

        </div>

        </div>
  )
}

export default Auth