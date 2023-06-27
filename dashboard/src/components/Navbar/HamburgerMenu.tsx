import { useState } from "react";
import "./HamburgerMenuStyles.css";

interface HamburgerMenuProps {
  isHamburgerOpen: boolean;
  toggleHamburger: () => void;
}
const HamburgerMenu = ({
  toggleHamburger,
  isHamburgerOpen,
}: HamburgerMenuProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleHamburger();
  };

  return (
    <div
      id="hamburger"
      className={`w-6 h-6 flex flex-col justify-center items-center  ${
        isMenuOpen ? "hamburger-vertical" : "hamburger-horizontal"
      }`}
      onClick={toggleMenu}
    >
      <span className="h-0.5 bg-white mb-1 transition-all ease-in-out"></span>
      <span className="h-0.5 bg-white mb-1 transition-all ease-in-out"></span>
      <span className="h-0.5 bg-white mb-1 transition-all ease-in-out"></span>
    </div>
  );
};

export default HamburgerMenu;
