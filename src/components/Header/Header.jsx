import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link } from "react-scroll";
import "./Header.scss";

// logo image
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="nav-main ">
        <div className="container mx-auto px-8 ">
          <div
            className="
          flex
          items-center
          justify-between
          container
          mx-auto
          font-bold"
          >
            <div className="flex items-center -mx-2">
              <div className="logo">
                <Link to="herosection" smooth={true} duration={1700}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="ml-4 flex items-center -mx-2">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
               
                
                {/* <li className="nav-item">
                  <Link
                    to="roadmap"
                    smooth={true}
                    duration={2000}
                    activeclass="active"
                    spy={true}
                    className="cursor-pointer mx-2 p-3 nav-links"
                    onClick={handleClick}
                  >
                    <span>Overview</span>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    to="roadmap"
                    smooth={true}
                    duration={2000}
                    activeclass="active"
                    spy={true}
                    className="cursor-pointer mx-2 p-3 nav-links"
                    onClick={handleClick}
                  >
                    <span>Roadmap</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="team"
                    smooth={true}
                    duration={2000}
                    spy={true}
                    activeclass="active"
                    className="cursor-pointer mx-2 p-3 nav-links"
                    onClick={handleClick}
                  >
                    <span>Team</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="investors"
                    smooth={true}
                    duration={2200}
                    spy={true}
                    activeclass="active"
                    className="cursor-pointer mx-2 p-3 nav-links"
                    onClick={handleClick}
                  >
                    <span>Partners & Investors</span>
                  </Link>
                </li>
              

                <li className="nav-item">
                  <a
                    href="./litepaper.pdf"
                    target="_blank"
                    activeclass="active"
                    className="cursor-pointer mx-2 p-3 nav-links"
                  >
                    <span>Litepaper</span>
                  </a>
                </li>
                {/* <li style={{backgroundColor: 'black', color: '#ff8a00', border: '3px solid #ff8a00'}} className="nav-item">
                  <a
                    href="/staking"
                  
                    activeclass="active"
                    className="cursor-pointer mx-2 p-3 nav-links"
                  >
                    <span>Staking</span>
                  </a>
                </li> */}
               
                
                
               <li className="nav-item">
                  <div className="flex my-3 lg:hidden items-center">
                    <div className="mx-auto">
                      <ul className="flex">
                        {/* Telegram */}
                        <li  className="px-2">
                          <a
                            href="https://t.me/operonorigins"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="icon md">
                              <svg viewBox="0 0 90 90" fill="#000">
                                <path d="M60.5,17.42L52.76,53.9c-0.59,2.58-2.1,3.21-4.28,2l-11.8-8.68l-5.68,5.47c-0.62,0.62-1.16,1.16-2.37,1.16l0.86-12.01  l21.85-19.74c0.94-0.86-0.21-1.32-1.48-0.46l-27.02,17l-11.64-3.64c-2.53-0.78-2.58-2.53,0.53-3.74l45.48-17.52  C59.34,12.95,61.19,14.2,60.5,17.42z"></path>
                              </svg>
                            </span>
                          </a>
                        </li>

                        {/*Twitter */}
                        <li className="px-2">
                          <a
                            href="https://twitter.com/OperonOrigins"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="icon md">
                              <svg viewBox="0 0 30 30" fill="#000">
                                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                              </svg>
                            </span>
                          </a>
                        </li>

                        {/* Medium */}
                        <li className="px-2">
                          <a
                            href="https://medium.com/@operonorigins"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="icon md">
                              <svg viewBox="0 0 90 90" fill="#000">
                                <path d="M8,8v54h54V8H8z M52.86,20.79l-2.9,2.78c-0.25,0.19-0.37,0.5-0.32,0.81v20.4c-0.05,0.31,0.07,0.62,0.32,0.81l2.83,2.78v0.61  H38.57v-0.61l2.93-2.84c0.29-0.29,0.29-0.37,0.29-0.81V28.23l-8.15,20.69h-1.1l-9.48-20.69v13.87c-0.08,0.58,0.11,1.17,0.53,1.59  l3.81,4.62v0.61H16.58v-0.61l3.81-4.62c0.41-0.42,0.59-1.01,0.49-1.59V26.06c0.05-0.45-0.12-0.89-0.46-1.19l-3.39-4.08v-0.61h10.52  l8.13,17.83l7.15-17.83h10.03V20.79z"></path>
                              </svg>
                            </span>
                          </a>
                        </li>
                        <li className="px-2">
                          <a
                            href="https://discord.gg/Cphx8qJsG7"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="icon md">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-discord"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                              </svg>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>


                <li className="nav-item">
                  <div className="flex my-3 lg:hidden items-center">
                    <div className="mx-auto">
                      <ul className="flex">
                        {/* ORO */}
                        <li style={{backgroundColor: '#F9C345', color: 'black',  borderRadius: '8px'}} className="px-4 w-26 text-center mr-3">
                  <a
                            href="https://pancakeswap.finance/swap?outputCurrency=0xFc4f5A4d1452B8Dc6C3CB745dB15B29c00812b19"
                            target="_blank"
                            rel="noreferrer"
                          >
                              <span>Buy ORO</span>
                          </a>
                  
                  </li>
                  {/* BUY INO */}
                  <li style={{backgroundColor: '#F9C345', color: 'black',  borderRadius: '8px'}} className="px-4 w-26 text-center mr-3">
                  <a
                            href="https://pancakeswap.finance/swap?outputCurrency=0xFc4f5A4d1452B8Dc6C3CB745dB15B29c00812b19"
                            target="_blank"
                            rel="noreferrer"
                          >
                              <span>Buy INO</span>
                          </a>
                  
                  </li>
                       {/* Staking */}
                  <li style={{backgroundColor: '#F9C345', color: 'black',  borderRadius: '8px'}} className="px-4 w-26 text-center mr-3">
                  <a
                            href="/staking/"
                            target="_blank"
                            rel="noreferrer"
                          >
                              <span>Staking</span>
                          </a>
                  </li>

                        
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center ">
              <div className="hidden lg:block">
                <ul className="flex">
                  {/* Buy ORO */}
                  <li style={{backgroundColor: '#F9C345', color: 'black',  borderRadius: '8px'}} className="px-4  text-center mr-3">
                  <a
                            href="https://pancakeswap.finance/swap?outputCurrency=0xFc4f5A4d1452B8Dc6C3CB745dB15B29c00812b19"
                            target="_blank"
                            rel="noreferrer"
                          >
                              <span>Buy ORO</span>
                          </a>
                  
                  </li>

                   {/* BUY INO */}
                   <li style={{backgroundColor: '#F9C345', color: 'black',  borderRadius: '8px'}} className="px-4  text-center mr-3">
                  <a
                            href="https://ino.operonorigins.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                              <span>Buy INO</span>
                          </a>
                  
                  </li>

                  {/* Staking */}
                  <li style={{backgroundColor: '#F9C345', color: 'black',  borderRadius: '8px'}} className="px-4 text-center mr-3">
                  <a
                            href="/staking/"
                            target="_blank"
                            rel="noreferrer"
                          >
                              <span>Staking</span>
                          </a>
                  </li>

             
                  
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden lg:block">
                <ul className="flex">
                  {/* Telegram */}
                  <li className="px-2">
                    <a
                      href="https://t.me/operonorigins"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon md">
                        <svg viewBox="0 0 90 90" fill="#000">
                          <path d="M60.5,17.42L52.76,53.9c-0.59,2.58-2.1,3.21-4.28,2l-11.8-8.68l-5.68,5.47c-0.62,0.62-1.16,1.16-2.37,1.16l0.86-12.01  l21.85-19.74c0.94-0.86-0.21-1.32-1.48-0.46l-27.02,17l-11.64-3.64c-2.53-0.78-2.58-2.53,0.53-3.74l45.48-17.52  C59.34,12.95,61.19,14.2,60.5,17.42z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>

                  {/*Twitter */}
                  <li className="px-2">
                    <a
                      href="https://twitter.com/OperonOrigins"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon md">
                        <svg viewBox="0 0 30 30" fill="#000">
                          <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>

                  {/* Medium */}
                  <li className="px-2">
                    <a
                      href="https://medium.com/@operonorigins"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon md">
                        <svg viewBox="0 0 90 90" fill="#000">
                          <path d="M8,8v54h54V8H8z M52.86,20.79l-2.9,2.78c-0.25,0.19-0.37,0.5-0.32,0.81v20.4c-0.05,0.31,0.07,0.62,0.32,0.81l2.83,2.78v0.61  H38.57v-0.61l2.93-2.84c0.29-0.29,0.29-0.37,0.29-0.81V28.23l-8.15,20.69h-1.1l-9.48-20.69v13.87c-0.08,0.58,0.11,1.17,0.53,1.59  l3.81,4.62v0.61H16.58v-0.61l3.81-4.62c0.41-0.42,0.59-1.01,0.49-1.59V26.06c0.05-0.45-0.12-0.89-0.46-1.19l-3.39-4.08v-0.61h10.52  l8.13,17.83l7.15-17.83h10.03V20.79z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className="px-2">
                    <a
                      href="https://discord.gg/Cphx8qJsG7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="icon md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-discord"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
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
