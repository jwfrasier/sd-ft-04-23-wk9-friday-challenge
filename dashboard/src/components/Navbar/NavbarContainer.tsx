import { navbarLinkNames } from "../../assets/data";
import NavbarLinks from "./NavbarLinks";
import Apple from "../../assets/icons8-sugar-cube-16.png";
import HamburgerMenu from "./HamburgerMenu";
import "./NavbarStyles.css";

interface NavbarContainerProps {
  selectedLink: string | null;
  setSelectedLink: (value: string | null) => void;
  isHamburgerOpen: boolean;
  toggleHamburger: () => void;
}

const NavbarContainer = ({
  selectedLink,
  setSelectedLink,
  isHamburgerOpen,
  toggleHamburger,
}: NavbarContainerProps): JSX.Element => {
  const handleLinkClick = (name: string) => {
    setSelectedLink(name);
  };

  return (
    <nav
      className={`flex flex-col bg-customRed h-screen w-[3.3rem] duration-100 ease-in ${
        !isHamburgerOpen && "active"
      }`}
    >
      <div className={`flex items-center justify-between px-4 py-2 `}>
        <div
          className={`flex items-center ease-in-out duration-300${
            isHamburgerOpen ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <img src={Apple} alt="Logo" className="w-10 h-10" />
          <div
            className={`ml-2 w-[12rem] text-white font-bold text-lg ${
              isHamburgerOpen ? "hidden" : ""
            }`}
          >
            Pyramid Consulting
          </div>
        </div>
        <div
          className={`flex items-center justify-${
            isHamburgerOpen ? "end" : "start"
          }`}
        >
          <HamburgerMenu
            toggleHamburger={toggleHamburger}
            isHamburgerOpen={isHamburgerOpen}
          />
        </div>
      </div>
      <div className="flex flex-col">
        {navbarLinkNames.map((link) => (
          <NavbarLinks
            key={link.name}
            {...link}
            onClick={() => handleLinkClick(link.name)}
            isHamburgerOpen={isHamburgerOpen}
            isSelected={selectedLink === link.name}
          />
        ))}
      </div>
      <div
        className={`md:hidden ease-in-out duration-300${
          isHamburgerOpen ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavbarContainer;
