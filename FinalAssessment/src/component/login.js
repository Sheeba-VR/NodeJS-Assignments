import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Login.css";
import "./Registration";
import { Button, Link } from '@mui/material';

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";


const validationSchema = yup.object({
   username: yup.string("Enter your username").required("UserName is required"),
   password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),});
     




function Login() {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
     },
     validationSchema: validationSchema,
     onSubmit:(values) => {
       navigate("/MenuBar");
       //alert(JSON.stringify(values, null, 2));
      },
     });



  return (
  //       <Box style={{height:"500px"}}
  //           component="form"
  //           sx={{
  //               '& .MuiTextField-root': { m: 1, width: '25ch' },
  //               }}
  //   noValidate
  //   autoComplete="off"
  // >
    <div className="main-div">

    <form onSubmit={formik.handleSubmit}>


      <br></br>
     <h1 style={{fontFamily:"fantasy",color:"blue"}}>Login</h1>
     <TextField 
      id="username"
      label="User Name" 
      name="username"
      placeholder="Enter your user name" 
      variant="standard" 
            
      value={formik.values.username}
      onChange={formik.handleChange}
      error={formik.touched.username && Boolean(formik.errors.username)}
      helperText={formik.touched.username && formik.errors.username}/>
      
           
      
      
      <br></br>
<TextField 
      id="password"
      label="Password" 
      type="password"
      name="password"
      placeholder="Enter your password" 
      variant="standard"         
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}/><br></br><br></br>



       <Button className="submit-button" type="submit" variant="contained">
  Log in
</Button><br></br><br></br><br></br>
<Link href='/SignUp'>{"Don't have an account? click here"}</Link>
</form> 
    </div>
    
   // </Box>

  )
}

export default Login