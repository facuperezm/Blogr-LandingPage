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
      <header className=" font-overpass absolute p-6 flex item-center justify-between w-full md:mt-10">
        <div className="md:ml-10 ">
          <img src={logo} alt="blogr logo" />
        </div>
        {isOpen && (
          <nav className="navbar md:flex md:justify-between">
            <ul className="md:ml-12">
              {navsLinks.map(({ id, title, links }) => (
                <li key={id} className="md:justify-between md:px-4">
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
