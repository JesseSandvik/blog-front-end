import HOneTag from "./atoms/Htags/HOneTag";
import LoginButton from "./atoms/buttons/LoginButton";
import LogoutButton from "./atoms/buttons/LogoutButton";
import MainPageBody from "./organisms/MainPageBody";

function App() {
  return (
    <div className="App">
      <HOneTag inputText={"Blog Page"}/>
      <MainPageBody />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
