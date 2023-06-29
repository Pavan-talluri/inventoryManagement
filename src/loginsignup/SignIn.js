import { useState, useEffect } from "react";
import CardContainer from "../sellers/CardContainer";

function SignIn(){
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const creds = ["jaffa", "laude ke baal"];


  function loginHandler() {
    if(name == creds[0] && password == creds[1]){
      return (<CardContainer/>)
    } else {
      setName("");
      setPassword("");
      alert(`Please enter correct credentials to login`);
    }
  }

  return (
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
        <button onClick={loginHandler}> Login </button>
      </form>
    </div>
  )
}

export default SignIn;
