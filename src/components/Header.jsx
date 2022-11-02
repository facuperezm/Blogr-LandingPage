import { useState } from "react";
import Buttons from "./Buttons";
import { footer } from "./data/footer";
import logo from "../assets/logo.svg";
import Menu from "./Menu";

const Header = () => {
  const [navsLinks, setNavsLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="absolute p-5">
        <div>
          <img src={logo} alt="blogr logo" />
        </div>
        {isOpen && (
          <nav>
            <ul>
              {navsLinks.map(({ id, title, links }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
          </nav>
        )}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
