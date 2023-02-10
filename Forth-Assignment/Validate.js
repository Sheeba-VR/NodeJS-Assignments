function Validate() {
    var userName = document.getElementById("uname");
    var password = document.getElementById("password");
     if(userName.value.trim()==""){
        userName.style.border="3px solid red";
        alert("Username cannot be blank");
        return false;
     }
     else if(password.value.trim()==""){
          password.style.border="3px solid red";
          alert("Password cannot be blank");
          return false; }
          else if(password.value.trim().length<7){
              password.style.border="3px solid red";
              alert("Password should contain atleast 7 characters");
              return false; }

              else if(userName.value.trim()!="Sheebavr" || password.value.trim()!="reset123")
              {
                password.style.border="3px solid red";
                alert("Invalid user name or password");
                return false; }

              else { 
                      return true; } 
                }