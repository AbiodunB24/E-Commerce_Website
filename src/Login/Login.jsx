
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();
    
        try {
          const user = await signInWithEmailAndPassword(auth, email, password);
          console.log(user);
          navigate("/");
          alert("Login successfully");
        } catch (error) {
          alert(error.message);
        }
      };
    
      const register = async (e) => {
        e.preventDefault();
    
        try {
          const user = await createUserWithEmailAndPassword(auth, email, password);
          console.log(user);
          if (auth) {
            navigate("/");
            alert("Account created successfully")
          }
        } catch (error) {
          alert(error.message);
        }
      };

  return (
    <div className="login">
        <Link to='/'>
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form action="">
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

            
            <button type="sumbit" onClick={signIn} className="login__signInButton">Sign In</button>
            
        </form>
        
        <p>
          By signing-in you agree to Amazon's Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
