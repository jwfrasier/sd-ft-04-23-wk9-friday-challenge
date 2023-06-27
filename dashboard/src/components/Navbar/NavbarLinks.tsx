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
    <div className={`flex items-center flex-grow px-2 py-5 `}>
      <img src={icon} alt="" className={`w-6 h-6 mr-2 ml-2`} />
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
