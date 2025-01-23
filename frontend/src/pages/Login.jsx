import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const handleSignUp = () =>{
    navigate("/signup");
  };
  return (
    <>
    <div>WELCOME TO <i>HABIT TRACKER</i></div>
    <p>A ONE PLACE TO TRACK YOUR HABITS</p>
    <div>Login Page</div>
    <p>Enter your detils to continue</p>
    USERNAME <input type="text" placeholder='username' ></input><br /><br />
    PASSWORD <input type="password" placeholder='password' ></input> <br /><br />
    <div><button>Login</button></div>
    <p>OR </p>
    <button onClick={handleSignUp}>SIGN UP</button>
    <div>
        <p>WE CAN TRAVEL AS FAR AS WE CAN BUT WE SHOULD WALK INSTEAD OF THINK.</p>
        <p>START TODAY BUDDY TRACK YOUR HABITS!</p>
        <p> §HABITS = YOU </p>
    </div>
    </>
  )
}

export default Login