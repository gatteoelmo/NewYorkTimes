import { useState, useEffect } from "react";
import Logo from "../assets/imgs/NewYorkTimesLogo.svg";
import { HeaderStyled } from "./Styles/HeaderStyled";
import { Navbar } from "./Navbar";
import { IoIosSearch } from "react-icons/io";
import { formattedDate } from "../utils/Date";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  const sections = ["U.S.", "INTERNATIONAL", "CANADA", "SPAIN", "中文"];
  const [activeSection, setActiveSection] = useState(sections[0]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderStyled>
        <div className="headerTop">
          <div>
            <button className="search">
              <IoIosSearch />
            </button>
          </div>
          <div>
            <ul>
              {sections.map((section, index) => (
                <li
                  key={index}
                  onClick={() => setActiveSection(section)}
                  style={{
                    fontWeight: activeSection === section ? "bold" : "normal",
                  }}
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="subscribe">SUBSCRIBE FOR $0.50/WEEK</button>
            <button className="subscribe">Log in</button>
          </div>
        </div>

        <div className="headerCenter">
          <div>
            <p>{formattedDate}</p>
            <p>Today&apos;s paper</p>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div></div>
        </div>

        <Navbar />
        <hr className="line" />
        <hr className="line" />
      </HeaderStyled>
      {isMobile && <MobileHeader />};
    </>
  );
};
