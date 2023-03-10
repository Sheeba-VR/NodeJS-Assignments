import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./SetPassword.css";
import {Button,Link} from '@mui/material';

import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({
   username: yup.string("Enter your username").required("UserName is required"),
   password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
    confirmpassword: yup
    .string("Enter confirm password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  
  });
    
    
function SetPassword() {


    const navigate = useNavigate();
    const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmpassword:"",
    },
    validationSchema: validationSchema,
     onSubmit: (values) => {
       navigate("/");
       alert(JSON.stringify(values, null, 2));
       },
       });

  return (
    <div className="setpassword-div">
        <form onSubmit={formik.handleSubmit} >
    <h1 style={{fontFamily:"-moz-initial",color:"rgb(220, 89, 23)"}}>Set Password</h1>
<div style={{marginLeft:"50px",backgroundColor:"rgb(183, 242, 193)",width:"300px",height:"65px"}}>
    <TextField 
      id="username"
      name="username"
      label="User Name" 
      placeholder="Enter your user name" 
      variant="standard" 
      value={formik.values.username}
      onChange={formik.handleChange}
      error={formik.touched.username && Boolean(formik.errors.username)}
      helperText={formik.touched.username && formik.errors.username}/>
      <br></br><br></br>
</div>

<div style={{marginTop:"10px",marginLeft:"50px",backgroundColor:"rgb(183, 242, 193)",width:"300px",height:"65px"}}>
    <TextField 
      id="password"
      label="Password" 
      name="password"
      type="password"
      placeholder="Enter your password" 
      variant="standard" 
      value={formik.values.password}
      onChange={formik.handleChange}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}/>   
      <br></br><br></br>
</div>
   
<div style={{marginTop:"20px",marginLeft:"50px",backgroundColor:"rgb(183, 242, 193)",width:"300px",height:"65px"}}>
    <TextField 
      id="confirmpassword"
      label="Confirm Password" 
      name="confirmpassword"
      type="password"
      placeholder="Confirm password" 
      variant="standard" 
      value={formik.values.confirmpassword}
      onChange={formik.handleChange}
      error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
      helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}   
      />
      
</div>
<br></br><br></br>
<Button className="save-button" type="submit" variant="contained">
Save
</Button>


<br>
</br><Link href='/' marginLeft={"200px"}>{"<Back to login>"}</Link>
</form>
       </div>
                   
   /* </Box>*/
  )
}

export default SetPassword