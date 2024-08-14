import { validate } from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";

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
    // console.log(email);
    // console.log(password);
    const message = validate(
      email.current.value,
      password.current.value,
      fullname.current.value
    );
    // console.log(message);
    setErrorMessage(message);
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
