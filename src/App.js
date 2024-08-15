import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import UserInfo from "./utils/UserInfo";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserInfo.Provider value={{ userInfo, setUserInfo }}>
      <Header />
      <Outlet />
    </UserInfo.Provider>
  );
};

export default App;
