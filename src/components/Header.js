import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useContext, useImperativeHandle } from "react";
import UserInfo from "../utils/UserInfo";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserInfo);

  const handleSignoutBtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserInfo(null);
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <>
      {userInfo === null ? (
        <div className="w-full absolute p-3 bg-gradient-to-b from-black z-20">
          <img
            src="Netflix_Logo.png"
            alt="netflix-logo"
            className="w-52 mx-20"
          />
        </div>
      ) : (
        // <div className="w-full absolute p-3 bg-gradient-to-b from-black z-20 flex justify-between">
        //   <img
        //     src="Netflix_Logo.png"
        //     alt="netflix-logo"
        //     className="w-32 h-14"
        //   />
        //   <div className="flex">
        //     {userInfo.photoURL && (
        //       <img
        //         src={userInfo.photoURL}
        //         alt="user-photo"
        //         className="my-3 rounded-full w-10 h-10"
        //       />
        //     )}

        //     {userInfo.displayName && (
        //       <p className="mx-3 my-3 font-serif text-white">
        //         {userInfo.displayName}
        //       </p>
        //     )}

        //     <p className="mx-3 my-3 font-light text-white">{userInfo.email}</p>

        //     <button className="mx-3" onClick={handleSignoutBtn}>
        //       <img src="signout-btn.png" alt="signout-btn" />
        //       <span className="font-light text-white">Sign Out</span>
        //     </button>
        //   </div>
        // </div>
        <div className="w-full absolute p-3 bg-gradient-to-b from-black z-20 flex justify-between">
          <img
            src="Netflix_Logo.png"
            alt="netflix-logo"
            className="w-32 h-14"
          />
          <div className="flex items-center">
            {userInfo.photoURL && (
              <img
                src={userInfo.photoURL}
                alt="user-photo"
                className="my-3 rounded-full w-14"
              />
            )}

            <div className="flex-col ml-3">
              {userInfo.displayName && (
                <p className="font-serif text-white text-base">
                  {userInfo.displayName}
                </p>
              )}
              <p className="font-light text-white text-xs">{userInfo.email}</p>
            </div>

            <button className="mx-3" onClick={handleSignoutBtn}>
              <img src="signout-btn.png" alt="signout-btn" />
              <span className="font-sans text-white">Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
