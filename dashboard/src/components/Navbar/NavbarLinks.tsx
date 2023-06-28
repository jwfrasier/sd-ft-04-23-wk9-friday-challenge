import { NavbarLinkName } from "../../assets/data";

interface NavbarLinksProps extends NavbarLinkName {
  onClick: () => void;
  isSelected: boolean;
  isHamburgerOpen: boolean;
}

const NavbarLinks = ({
  name,
  icon,
  onClick,
  isHamburgerOpen,
  isSelected,
}: NavbarLinksProps): JSX.Element => {
  return (
    <div
      className={`flex items-center flex-grow pl-2 py-5 rounded-l-full ${
        isHamburgerOpen &&
        "hover:bg-white transition-colors duration-300 ease-in-out"
      }`}
    >
      <div
        className={`relative inline-block ${
          isHamburgerOpen
            ? "group"
            : "group-hover:scale-105 group-hover:bg-customRed"
        }`}
      >
        {isHamburgerOpen && (
          <div className="absolute left-full transform -translate-x-2 bg-customRed text-white px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-20">{name}</div>
          </div>
        )}
        <img src={icon} alt="" className={`w-6 h-6 mr-2 ml-2`} />
      </div>
      <p
        id={name}
        className={`w-full block px-4 py-2 hover:text-customRed rounded-l-full hover:bg-white transition-colors duration-300 ease-in-out ${
          isSelected ? "bg-white text-customRed" : "text-white"
        } ${isHamburgerOpen ? "hidden" : ""}`}
        onClick={onClick}
      >
        {name}
      </p>
    </div>
  );
};

export default NavbarLinks;
