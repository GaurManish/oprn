import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// logo image
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="marketplaceHeader">
      <nav className="nav-main">
        <div className="container mx-auto px-4 ">
          <div
            className="
          flex
          w-full
          items-center
          justify-between
          mx-auto
          font-bold"
          >
            <div className="flex items-center -mx-2">
              <div className="logo">
                <Link to="/" smooth={true} duration={1700}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="flex items-center mx-12">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    to="/"
                    activeclass="active"
                    className="cursor-pointer mx-2 p-3 nav-links"
                    onClick={handleClick}
                  >
                    <span>Hero Farms</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/marketplace"
                    activeclass="active"
                    className="cursor-pointer mx-2 p-3 nav-links"
                    onClick={handleClick}
                  >
                    <span>Marketplace</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    activeclass="active"
                    className="cursor-pointer mx-2 p-3 nav-links"
                    onClick={handleClick}
                  >
                    <span>Activity</span>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center justify-center w-full">
                    <div className="smallScreenWallet">
                      <div className="mx-2 btn-secondary sm">
                        <span className="icon">
                          <svg viewBox="0 0 24 24" fill="true">
                            <path d="M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17S8 16.11 8 15 8.9 13 10 13M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.34 16.34 3 18 3S21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M16 10V20H4V10H16Z"></path>
                          </svg>
                        </span>
                        <div className="smallScreenWallet ml-2">
                          <Link
                            to="/"
                            style={{
                              color: "#fff",
                              fontFamily: "Philosopher",
                            }}
                          >
                            Unlock Wallet
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-end">
              <div className="bigScreenWallet">
                <div className="mx-2 btn-secondary sm">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="true">
                      <path d="M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17S8 16.11 8 15 8.9 13 10 13M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.34 16.34 3 18 3S21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M16 10V20H4V10H16Z"></path>
                    </svg>
                  </span>
                  <div className="bigScreenWallet ml-2">
                    <Link
                      to="/"
                      style={{ color: "#fff", fontFamily: "Philosopher" }}
                    >
                      Unlock Wallet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
