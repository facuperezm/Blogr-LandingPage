import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import { footer } from "./data/footer";
import logo from "../assets/logo.svg";
import Menu from "./Menu";

const Header = () => {
  const [navsLinks, setNavsLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768);
  useEffect(() => {
    if (window.innerWidth > width) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <header className="absolute p-6 flex item-center justify-between w-full">
        <div>
          <img src={logo} alt="blogr logo" />
        </div>
        {isOpen && (
          <nav className="navbar md:flex md:justify-between">
            <ul>
              {navsLinks.map(({ id, title, links }) => (
                <li key={id} className="md:justify-between">
                  {title}
                </li>
              ))}
            </ul>
            <Buttons />
          </nav>
        )}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
