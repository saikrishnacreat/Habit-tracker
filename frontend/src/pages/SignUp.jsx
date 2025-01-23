import React from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const returnLogin = () =>{
      navigate("/");
  }
  return (
  <>
    <p>HABIT TRACKER </p>
    <p>TRACKS YOUR HABITS</p>
    <div>SignUp AND UNLOCK THE BATMAN😇 IN YOU!!</div><br></br>
    <div>ENTER YOUR DETAILS </div>
    <form>
    <div><input type="text" placeholder='username' /></div>
    <input type="mail" placeholder='gmail' /> <br></br>
    <input type="password" placeholder='password' /> <br></br>
    <input type="password" placeholder='confirm password' /><br></br>
    <button>SIGN IN</button>
    </form>
    <div>Already Login Click Below!</div>
    <button onClick={returnLogin}>Return</button>
    </>
  )
}

export default SignUp;
