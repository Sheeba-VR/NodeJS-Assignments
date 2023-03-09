import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Login.css";
import "./Registration";
import { Button, Link } from '@mui/material';

function login() {
  return (
        <Box style={{height:"500px"}}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
    noValidate
    autoComplete="off"
  >
    <div className="main-div">
      <br></br>
     <h1 style={{fontFamily:"fantasy",color:"blue"}}>Login</h1>
     <TextField 
      id="username"
      label="User Name" 
      placeholder="Enter your user name" 
      variant="standard" /><br></br>
<TextField 
      id="password"
      label="Password" 
      type="password"
      placeholder="Enter your password" 
      variant="standard" /><br></br><br></br>
        
       <Button className="submit-button" href={"/MenuBar"}>
  Log in
</Button><br></br><br></br><br></br>
<Link href='/SignUp'>{"Don't have an account? click here"}</Link>
    </div>
    
    </Box>

  )
}

export default login