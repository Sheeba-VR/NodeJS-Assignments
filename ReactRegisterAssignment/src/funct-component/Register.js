import React from "react";
import "./Register.css";
function register() {
     var buttonClick = () => { console.log("Registered successfully"); };
     return (
         <div id="formContainer">
         <form>
         <div className="App"><h1>Registration Form</h1>
         <label>First Name:</label><input type="text" name="fname" id="name" /><br /><br />
         <label>Last Name:</label><input type="text" name="lname" id="name" /><br /><br />
         <label>Age:</label><input type="number" name="age" id="name" /><br /><br />
         <label>Email:</label><input type="email" name="email" id="name" /><br /><br />
         <label>Gender:</label><input type="radio" name="gender" id="male" />
         <span id="male"> Male</span><input type="radio" name="gender" id="female" />
         <span id="female"> Female</span><br />
         <center><input type="submit" name="submit" id="submit" className="button-submit" onbuttonClick={buttonClick}/></center><br /><br />
         </div>
         </form>
         </div>);
         }
         export default register;