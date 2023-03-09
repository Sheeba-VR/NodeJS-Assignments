import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./SetPassword.css";
import {Button,Link} from '@mui/material';

function SetPassword() {
  return (
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
noValidate
autoComplete="off"
>    
    <div className="setpassword-div">
    <h1 style={{fontFamily:"-moz-initial",color:"rgb(220, 89, 23)"}}>Set Password</h1>
<div style={{marginLeft:"50px",backgroundColor:"rgb(183, 242, 193)",width:"300px",height:"65px"}}>
    <TextField 
      id="uname"
      label="User Name" 
      placeholder="Enter your user name" 
      variant="standard" /><br></br><br></br>
</div>

<div style={{marginTop:"10px",marginLeft:"50px",backgroundColor:"rgb(183, 242, 193)",width:"300px",height:"65px"}}>
    <TextField 
      id="password"
      label="Password" 
      type="password"
      placeholder="Enter your password" 
      variant="standard" /><br></br><br></br>
</div>
   
<div style={{marginTop:"20px",marginLeft:"50px",backgroundColor:"rgb(183, 242, 193)",width:"300px",height:"65px"}}>
    <TextField 
      id="confirmpassword"
      label="Confirm Password" 
      type="password"
      placeholder="Confirm password" 
      variant="standard" />
</div>
<br></br><br></br>
<Button className="save-button">
Save
</Button>
<br>
</br><Link href='/' marginLeft={"200px"}>{"<Back to login>"}</Link>
       </div>
                   
    </Box>
  )
}

export default SetPassword