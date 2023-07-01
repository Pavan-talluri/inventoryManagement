import { React, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

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
          <h2> Sign-in </h2>
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
            <Button variant="secondary" onClick={(e) => {e.preventDefault(); loginHandler()}}> Login </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
