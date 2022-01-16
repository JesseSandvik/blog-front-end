import { useState } from "react";
import HOneTag from "./atoms/Htags/HOneTag";
import LoginButton from "./atoms/buttons/LoginButton";
import LogoutButton from "./atoms/buttons/LogoutButton";
import MainPageBody from "./organisms/MainPageBody";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <HOneTag inputText={"Blog Page"}/>
      <MainPageBody />
      <LoginButton
        setIsLoggedIn={setIsLoggedIn}
      />
      <LogoutButton
        setIsLoggedIn={setIsLoggedIn}
      />
      {console.log(isLoggedIn)}
    </div>
  );
}

export default App;
