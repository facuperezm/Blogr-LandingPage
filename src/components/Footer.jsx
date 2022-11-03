import { useState } from "react";
import { footer } from "./data/footer";
import logo from "../assets/logo.svg";

const Footer = () => {
  const [footerLink, setFooterLink] = useState(footer);
  return (
    <>
      <footer className="font-overpass footer text-center rounded-tr-[10%] md:text-left md:flex md:flex-row md:justify-around px-10 lg:py-10">
        <div>
          <img src={logo} alt="" className="block mx-auto py-14 md:mx-0" />
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-40 md:pr-10 pb-12">
          {footerLink.map(({ id, title, links }) => (
            <ul>
              <h4 className="mt-10 mb-5 text-lg text-white-color font-bold">
                {title}
              </h4>
              {links.map((link) => (
                <li className="text-grayish-blue text-md py-0.5" key={link}>
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};
export default Footer;
