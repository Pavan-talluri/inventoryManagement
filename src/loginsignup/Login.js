import { useState, useEffect } from "react";

function Login(){
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
      </form>
    </div>
  )
}

export default Login;
