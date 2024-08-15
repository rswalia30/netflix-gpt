import { validate } from "../utils/validate";
import { useState, useRef, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import UserInfo from "../utils/UserInfo";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfo);

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
          // console.log(user);
          alert("User Sign Up Successfull");
          navigate("/");
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
          // console.log(user);

          setUserInfo({
            email: user.email,
          });

          // alert("Sign In Successfull");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        // console.log(user.displayName);
        // console.log(credential);
        // console.log(token);

        setUserInfo({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });

        // alert("Google Sign In Successfull");
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode + " - " + errorMessage);
        console.log(email + " - " + credential);
      });
  };

  return (
    <>
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
          className="mx-4 my-2 p-4 w-96 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && (
          <button
            // className="mx-4 my-2 w-96 p-4 border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            className="mx-4 my-2 p-4 w-96 flex justify-center gap-2 bg-white text-black rounded-lg"
            onClick={handleGoogleSignIn}
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google logo"
            />
            <span>Sign In with Google</span>
          </button>
        )}

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
