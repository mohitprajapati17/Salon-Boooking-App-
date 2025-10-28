import { Typography } from '@mui/material'
import React from 'react'
import {Container ,TextField} from '@mui/material'
import { useFormik } from 'formik'
import {Button} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import{ loginUser} from '../Redux/Auth/action' 
function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const formik =useFormik({
    initialValues:{
      email:"",
      password:""
    }
    ,
    onSubmit:(values)=>{
        console.log(values);
        dispatch(loginUser({data:values,navigate}))
    }
  })
  return (
    <Container component ={"main"} maxWidth="xs">
      <div>
        <Typography className ='text-center' variant='h5'>
          Login


        </Typography>
        <form  className="space-y-5" action="" onSubmit={formik.handleSubmit}>
          <TextField
          variant="outlined"
          fullWidth
          name="email"
          id="email"
          label="Email Address"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
          />
        

        
          <TextField
          variant="outlined"
          fullWidth
          name="password"
          id="password"
          label="password"
          required
          onChange={formik.handleChange}
          value={formik.values.password}
          />

          <Button variant ="contained" type ="submit"> Login </Button>

        </form>

      </div>

    </Container>
  )
}

export default Login