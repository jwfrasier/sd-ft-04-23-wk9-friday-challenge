import { useState } from "react";
import "./App.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";

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
    </>
  );
}

export default App;
