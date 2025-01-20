import React from 'react'
import { SignUp } from './SignUp'

const Login = () => {
  return (
    <>
    <hr />
    <div>WELCOME TO <i>HABIT TRACKER</i></div>
    <p>A ONE PLACE TO TRACK YOUR HABITS</p>
    <hr />
    <div>Login Page</div>
    <p>Enter your detils to continue</p>
    USERNAME <input type="text" placeholder='username' ></input><br /><br />
    PASSWORD <input type="password" placeholder='password' ></input> <br /> 
    <div><button>Login</button></div>
    <p>OR </p>
    <button>SIGN UP</button>
    <div>
        <p>WE CAN TRAVEL AS FAR AS WE CAN BUT WE SHOULD WALK INSTEAD OF THINK.</p>
        <p>START TODAY BUDDY TRACK YOUR HABITS!</p>
        <p> §HABITS = YOU </p>
    </div>
    </>
  )
}

export default Login