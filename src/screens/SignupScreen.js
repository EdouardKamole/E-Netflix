import React, { useRef } from "react";
import "./SignupScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase"; // Import the auth object

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Register new user function
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("User registered:", authUser);
      })
      .catch((error) => {
        console.error("Error registering:", error.message);
        alert("Error registering: " + error.message);
      });
  };

  // Sign-in user function
  const signIn = (e) => {
    e.preventDefault();
    console.log("Sign In function called");

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("Sign In successful:", authUser);
      })
      .catch((error) => {
        console.error("Sign In error:", error.message);
        alert("Error signing in: " + error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signupScreen_gray">New to E-NetSteam? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
