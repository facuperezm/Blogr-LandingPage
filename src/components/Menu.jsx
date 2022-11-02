import open from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <img src={close} alt="close icon" />
        ) : (
          <img src={open} alt="open icon" />
        )}
      </button>
    </>
  );
};

export default Menu;
