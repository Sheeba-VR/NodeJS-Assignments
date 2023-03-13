import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material'
import "./Registration.css";


import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({
    phonenumber: yup
   .string("Enter your phone number")
   .required("Phone number is required")
   .matches(
     /^(?=.*[0-9])(?=.{10,})/,
     "Must Contain 10 digit numbers only"),    
   
   email: yup
   .string("Enter email Id")
   .required("Email Id is required")
   .matches(/^(?=.*[@])/,
     "Enter a valid email Id"),    
   
 });
   



function Registration() {

  const navigate = useNavigate();
  const formik = useFormik({
  initialValues: {
    phonenumber: "",
    email: "",
    },
  validationSchema: validationSchema,
   onSubmit: (values) => {
     navigate("/Setpassword");
    //  alert(JSON.stringify(values, null, 2));
     },
     });



  return (
      <div className="registration-div"> 
      <form onSubmit={formik.handleSubmit} >
    <h1 style={{marginLeft:'30px',color:"blue"}}>Registration Form</h1>
    <div style={{marginLeft:"50px"}}>
    
    <TextField
      required
      id="firstname"
      label="First Name"
      placeholder="Enter first name" 
      variant="standard" /><br></br>
     <br></br>

<TextField
      required
      id="lastname"
      label="Last Name"
      placeholder="Enter last name" 
      variant="standard" /><br></br><br></br>
<TextField
      required
      id="email"
      label="E mail"
      name="email"
      placeholder="Enter email" 
      variant="standard" 
      
      value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.emailr && formik.errors.email}       
      
      /><br></br>
      <br></br>
     <TextField
          id="phonenumber"
          name="phonenumber"
          label="Phone Number"
          type="number"
          placeholder="Enter phone number" 
          variant="standard" 
          

          value={formik.values.phonenumber}
          onChange={formik.handleChange}
          error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
          helperText={formik.touched.phonenumber && formik.errors.phonenumber}       
          
          
          /><br></br>
              <br></br>
     <TextField
          id="age"
          label="Age"
          type="number"
          placeholder="Age" 
          variant="standard" /><br></br>
          <br></br>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormControl>
    <br></br>
    <br></br>
    <TextField
          id="outlined-multiline-static"
          label="Skills"
          multiline
          rows={3}
          defaultValue="Default Value"
        />      <br></br>
         <br></br>      
         {/* <Button className="reg-button" variant="contained" href={"/Setpassword"}> */}
         <Button className="reg-button" type="submit" variant="contained">
        Submit
      </Button>
      </div>
      </form>
      </div>
      
        
  )
}

export default Registration