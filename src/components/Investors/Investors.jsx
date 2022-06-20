import React from "react";
import "./Investors.scss";

// images
import leftChar from "../../assets/images/leftCharInv.png";
import rightChar from "../../assets/images/rightCharInv.png";
import juego from "../../assets/images/juego.png";
import fidira from "../../assets/images/fidira.svg";
import cryptopolis from "../../assets/images/cryptopolis.jpg";
import gamerse from "../../assets/images/gamerse.png";
import hoclogo from "../../assets/images/hoclogo.png";
import polylogo from "../../assets/images/Polygodlogo.svg";
import investor1 from "../../assets/images/investor-1.png";
import investor2 from "../../assets/images/investor-2.png";
import investor3 from "../../assets/images/investor-3.png";
import investor4 from "../../assets/images/investor-4.png";
import investor5 from "../../assets/images/investor-5.png";
import investor6 from "../../assets/images/investor-6.png";
import investor7 from "../../assets/images/investor-7.png";
import investor8 from "../../assets/images/investor-8.png";
import investor9 from "../../assets/images/investor-9.png";
import investor10 from "../../assets/images/investor-10.png";
import investor11 from "../../assets/images/investor-11.png";
import investor12 from "../../assets/images/investor-12.png";
import investor13 from "../../assets/images/investor-13.png";
import investor14 from "../../assets/images/investor-14.png";
import investor15 from "../../assets/images/investor-15.png";
import investor16 from "../../assets/images/investor-16.png";
import investor17 from "../../assets/images/MagnusLogo.png";
import investor18 from "../../assets/images/genblock.png";
import gateio from "../../assets/images/gateio.png"
const investorLogos = [
  investor1,
  investor18,
  investor17,
  
 
  investor2,
  investor11,
  investor3,
  investor4,
  investor5,
  investor6,
  investor7,
  investor8,
  investor9,
  investor10,
  investor12,
  investor13,
  // investor14,
  investor15,
  investor16,
];

const investorData = [
  {
    name: "BlueZilla",
    url: "https://bluezilla.vc",
  },
  
  {
    name: "Genblock",
    url: "https://genblock.capital/",
  },
  {
    name: "Magnus",
    url: "https://magnusdigitalassets.com/",
  },
  {
    name: "Wealth Union",
    url: "https://wealthunion.io",
  },
  {
    name: "synaps",
    url: "https://synaps.io/",
  },
  {
    name: "AU21",
    url: "https://au21.capital",
  },
  {
    name: "Oddiyana",
    url: "https://oddiyana.ventures",
  },
  {
    name: "Moonwhale",
    url: "https://moonwhale.ventures",
  },
  {
    name: "OIG",
    url: "https://oiginvest.com",
  },
  {
    name: "DCI",
    url: "https://dutchcryptoinvestors.com",
  },
  {
    name: "Vespertine Capital",
    url: "https://www.vespertine.capital",
  },
  {
    name: "BBS capital",
    url: "https://www.bbscapital.com",
  },
  {
    name: "BCA",
    url: "https://bcainvestments.com",
  },
  {
    name: "Everse ",
    url: "https://eversecapital.com/",
  },
  {
    name: "gem",
    url: "https://gemcapital.io/",
  },
  // {
  //   name: "ferrum",
  //   url: "https://ferrum.network/",
  // },
  {
    name: "R-930",
    url: "https://r-930capital.com/",
  },
  {
    name: "x21",
    url: "https://x21digital.com/",
  },
];

const partnersData = [
  {
    name: "Juego Studio",
    url: "https://www.juegostudio.com/",
    logo: juego,
  },
  {
    name: "Fidira",
    url: "https://fidira.com",
    logo: fidira,
  },
  {
    name: "Cryptopolis",
    url: "https://cryptopolis.io",
    logo: cryptopolis,
  },
  {
    name: "Gamerse",
    url: "https://gamerse.com",
    logo: gamerse,
  },
  // {
  //   name: "HOC",
  //   url: "https://www.houseofchimera.com/",
  //   logo: hoclogo,
  // },
  {
    name: "Polygod",
    url: "https://polygod.io/",
    logo: polylogo,
  },
];

const Investors = () => {
  return (
    <>
      <section className="investorSection mt-16" id="investors">
        <div className="leftChar">
          <img src={leftChar} alt="characters" />
        </div>
        <div className="rightChar">
          <img src={rightChar} alt="characters" />
        </div>
        <div className="investorsTitle" data-aos="fade-up">
          <h1>Our Investors</h1>
        </div>

        <div className="flex flex-wrap md:max-w-lg xl:max-w-3xl justify-center">
          {investorData.map((item, index) => {
            console.log(item, index);
            return (
              <a
                key={"investor-" + index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center  m-6"
              >
                <div
                  data-aos="fade-up"
                  className="investorContainer flex flex-col justify-center items-center"
                >
                  <img src={investorLogos[index]} alt="investor logo" />
                  {/* <div className="name mt-2 whitespace-nowrap">
                  <h1 style={{ color: "#ff8a00" }}>{item.name}</h1>
                </div> */}
                </div>
              </a>
            );
          })}
          <a
            key={"investor-" + 14}
            href="https://ferrum.network/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <div
              data-aos="fade-up"
              className=" flex flex-col justify-center items-center m-3"
            >
              <img
                src={investor14}
                alt="partner logo"
                style={{ width: "300px" }}
              />
              {/* <div className="name mt-2">
                  <h1 style={{ color: "#ff8a00" }}>{item.name}</h1>
                </div> */}
            </div>
          </a>
        </div>
        {/* Characters */}
                <div className="flex lg:hidden sm:inline-block">
                <img src={leftChar} alt="characters" />
                <img src={rightChar} alt="characters" />
                </div>
        <div className="investorsTitle mt-16" data-aos="fade-up">
          <h1>Our Partners</h1>
        </div>

        <div className="flex flex-wrap md:max-w-lg mb-24 xl:max-w-3xl justify-center">
          {partnersData.map((item, index) => (
            <a
              key={"partners-" + index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center"
            >
              <div
                data-aos="fade-up"
                className="investorContainer  flex flex-col justify-center items-center m-5"
              >
                <img
                  src={item.logo}
                  alt="partner logo"
                  style={{ width: "200px" }}
                />
                {/* <div className="name mt-2">
                  <h1 style={{ color: "#ff8a00" }}>{item.name}</h1>
                </div> */}
              </div>
            </a>
          ))}
          <a
            href="https://www.houseofchimera.com/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <div
              data-aos="fade-up"
              className=" flex flex-col justify-center items-center m-5"
            >
              <img
                src={hoclogo}
                alt="partner logo"
                style={{ width: "200px" }}
              />
              {/* <div className="name mt-2">
                  <h1 style={{ color: "#ff8a00" }}>{item.name}</h1>
                </div> */}
            </div>
          </a>
          <a
            href="https://www.gate.io/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <div
              data-aos="fade-up"
              className=" flex flex-col justify-center items-center m-5"
            >
              <img
                src={gateio}
                alt="partner logo"
                style={{ width: "200px" }}
              />
              {/* <div className="name mt-2">
                  <h1 style={{ color: "#ff8a00" }}>{item.name}</h1>
                </div> */}
            </div>
          </a>
        </div>

        {/* <div
            data-aos="fade-up-right"
              className="
                        flex
                        md:-mx-8
                        items-center
                        justify-center
                        flex-wrap
                        container mx-auto sm:px-12
                      "
            >
            </div>
          <div className="investorContainer">
            <img src="https://bsclaunch.org/images/logo.svg" alt="investor logo" data-aos="fade-up" />
          </div>
          <div className="investorContainer">
            <img src="https://global-uploads.webflow.com/60667e55ac89936deb225d37/612e32069a02e34ab787df61_unvest.svg" alt="investor logo" data-aos="fade-up" />
          </div>
          <div className="investorContainer">
            <img src="https://kwikstarter.org/brand/kwikswap_white_logo.png" alt="investor logo" data-aos="fade-up" />
          </div> */}
      </section>
    </>
  );
};

export default Investors;
