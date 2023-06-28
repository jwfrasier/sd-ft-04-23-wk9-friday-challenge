import { useState } from "react";
import "./App.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(true);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <NavbarContainer
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        isHamburgerOpen={isHamburgerOpen}
        toggleHamburger={toggleHamburger}
      />
      <Dashboard />
    </>
  );
}

export default App;
