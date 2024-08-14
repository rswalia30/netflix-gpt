import { validate } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSigninSignup = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // Check Validation Before Authentication
    /************** VALIDATION ************************ */
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const fullnameValue = fullname.current?.value || "";

    const message = isSignIn
      ? validate(emailValue, passwordValue)
      : validate(emailValue, passwordValue, fullnameValue);

    setErrorMessage(message);
    if (message) return;

    // if user email,pass is valid -> Authenticate
    /************** AUTHENTICATION ************************ */
    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("User Signed Up Successfull");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("Sign In Successfull");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />

      <img src="Netflix_Bg.jpg" alt="netflix-bg" className="absolute" />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black bg-opacity-80 w-4/12 text-white mx-96 my-40 rounded-lg"
      >
        <h1 className="mx-4 my-4 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={fullname}
            type="text"
            placeholder="Enter Full Name"
            className="mx-4 my-2 p-4 w-96 rounded-lg bg-gray-600 bg-opacity-50"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="mx-4 my-2 p-4 w-96 rounded-lg bg-gray-600 bg-opacity-50"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="mx-4 my-2 p-4 w-96 rounded-lg bg-gray-600 bg-opacity-50"
        />

        <p className="text-red-600 mx-4 font-semibold my-2">{errorMessage}</p>

        <button
          className="mx-4 my-2 p-4 w-96 bg-red-700 text-white rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="mx-4 my-4 font-extralight cursor-pointer"
          onClick={toggleSigninSignup}
        >
          {isSignIn
            ? "New To Netflix-GPT? Sign up now"
            : "Already Registered User? Sign in now"}
        </p>
      </form>
    </>
  );
};

export default Login;
