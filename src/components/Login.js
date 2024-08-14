import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSigninSignup = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Header />

      <img src="Netflix_Bg.jpg" alt="netflix-bg" className="absolute" />

      <form className="absolute bg-black bg-opacity-80 w-4/12 text-white mx-96 my-40 rounded-lg">
        <h1 className="mx-4 my-4 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="mx-4 my-2 p-4 w-96 rounded-lg bg-gray-600 bg-opacity-50"
          />
        )}

        <input
          type="email"
          placeholder="Enter Email"
          className="mx-4 my-2 p-4 w-96 rounded-lg bg-gray-600 bg-opacity-50"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="mx-4 my-2 p-4 w-96 rounded-lg bg-gray-600 bg-opacity-50"
        />

        <button className="mx-4 my-2 p-4 w-96 bg-red-700 text-white rounded-lg">
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
