import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignoutBtn = () => {
    navigate("/");
  };

  return (
    <div className="w-full absolute p-3 bg-gradient-to-b from-black z-20 flex justify-between">
      <img src="Netflix_Logo.png" alt="netflix-logo" className="w-52" />

      <button onClick={handleSignoutBtn}>
        <img src="signout-btn.png" alt="signout-btn" className="mx-3" />
        <span className="font-light text-white">Sign Out</span>
      </button>
    </div>
  );
};

export default Header;
