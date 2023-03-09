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

function Registration() {
  return (
      <Box><div className="registration-div"> 
    <h1 style={{marginLeft:'30px'}}>Registration Form</h1>
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
      placeholder="Enter email" 
      variant="standard" /><br></br>
      <br></br>
     <TextField
          id="phonenumber"
          label="Phone Number"
          type="number"
          placeholder="Enter phone number" 
          variant="standard" /><br></br>
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
         <Button className="reg-button" variant="contained" href={"/Setpassword"}>
        Submit
      </Button>
      </div>
    </div>
    </Box>
    
  )
}

export default Registration