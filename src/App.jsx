import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NavList from "./components/NavList";
import Chat from "./components/Chat";

function App() {
  const [dark, setDark] = useState(false);

  const handleDarkMode = () => {
    setDark((prev) => !prev);
    console.log(dark);
  };

  return (
    <div className="flex h-screen">
      <NavBar darkMode={handleDarkMode} dark={dark}/>

      <NavList darkMode={dark} />

      <Chat darkMode={dark} />
    </div>
  );
}

export default App;
