import { React, useState, useEffect } from "react";

// import * as Components from "./Component";
import "./SignIn.css";
import CardContainer from "../sellers/CardContainer";
import Home from "../home/Home";

function SignIn(){

  // const [signIn, toggle] = React.useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const creds = ["name", "pwd"];


  async function loginHandler() {
    if(name == creds[0] && password == creds[1]){
      window.location.href = '/';
      // alert('passed')
    } else {
      setName("");
      setPassword("");
      alert(`Please enter correct credentials to login`);
    }
  }



  return (
    <div className="signinFormContainer">
      <div className="formContainer">
        <div>
          <form>
            <label>Username: 
              <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>Password: 
              <input
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={(e) => {e.preventDefault(); loginHandler()}}> Login </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
