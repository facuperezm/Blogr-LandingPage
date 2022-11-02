import open from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={open} alt="" />
      </button>
    </>
  );
};

export default Menu;
