import React, {useContext} from "react";
import { AuthContext } from "../context/AuthProvider";

const Auth = () => {
  const {auth, setAuth} = useContext(AuthContext)

  function handleChange(e){
    if(e.target.checked){
      setAuth(true)
    }else{
      setAuth(false)
    }
  }
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <p>{auth ? 'You are now authenticated, you can proceed' : 'you are not authenticated'}</p>
      <input type="checkbox" id="robot-check" onChange={handleChange} />
      <label htmlFor="robot-check">I'm not a robot</label>
    </div>
  )
}

export default Auth