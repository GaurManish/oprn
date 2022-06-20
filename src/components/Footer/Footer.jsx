import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import audit from "../../assets/images/audit.png";

const Footer = () => {
  return (
    <>
      <footer className="text-white z-10" style={{ background: "#000" }}>
        <div className="container mx-auto px-12  py-4 ">
          <div
            className="
                  container
                  mx-auto
                  flex
                  justify-between
                  flex-col
                  text-center
                  md:flex-row md:text-left
                "
          >
            <div className="md:mb-2">
              <img
                src={logo}
                alt="logo"
                style={{ width: "150px", height: "150px" }}
                className="md:mb-4 h-16 md:h-20 2xl:32 mx-auto object-contain"
              />
            </div>
            <div className="mt-2 mb-8 md:mb-2">
              <div className="font-bold mb-4">Contact us</div>
              <div className="hover:text-yellow-500">
                <a href="mailto:team@operonorigins.com" className=" mb-2">
                  team@operonorigins.com
                </a>
              </div>
            </div>
            <div className="mt-2 mb-8 md:mb-2">
              <div className="font-bold mb-4">Pages</div>
              <ul>
                <li className="mb-2 hover:text-yellow-500">
                  <Link to="/">Home</Link>
                </li>
                <li className=" mb-2 hover:text-yellow-500">
                  <Link to="/marketplace">Marketplace</Link>
                </li>
              </ul>
            </div>
            <div className="mt-2 mb-8 md:mb-2">
              <div className="font-bold mb-4">Social</div>
              <ul>
                <li
                  className="
                        flex
                        items-center
                        justify-center
                        md:justify-start
                        space-x-2
                      "
                >
                  <a
                    href="https://t.me/operonorigins"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2 hover:text-yellow-500"
                  >
                    Telegram
                  </a>
                </li>
                <li
                  className="
                        flex
                        items-center
                        justify-center
                        md:justify-start
                        space-x-2
                      "
                >
                  <a
                    href="https://twitter.com/OperonOrigins"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2 hover:text-yellow-500"
                  >
                    Twitter
                  </a>
                </li>
                <li
                  className="
                        flex
                        items-center
                        justify-center
                        md:justify-start
                        space-x-2
                      "
                >
                  <a
                    href="https://medium.com/@operonorigins"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2 hover:text-yellow-500"
                  >
                    Medium
                  </a>
                </li>
                <li
                  className="
                        flex
                        items-center
                        justify-center
                        md:justify-start
                        space-x-2
                      "
                >
                  <a
                    href="https://discord.gg/Cphx8qJsG7"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2 hover:text-yellow-500"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mb-2">
            <div className="font-bold ">Audited By</div>
            <a target="_blank" href="https://www.rdauditors.com/wp-content/uploads/2021/11/Operon-Origins-Smart-Contract-Security-Report-1.pdf"> 
               <img
                src={audit}
                alt="logo"
                style={{ width: "150px", height: "150px" }}
                className="md:mb-4 h-16 md:h-20 2xl:32 mx-auto object-contain"
              />
            </a>
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
