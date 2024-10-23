import { useState, useEffect } from "react";
import Logo from "../assets/imgs/NewYorkTimesLogo.svg";
import { HeaderStyled } from "./Styles/HeaderStyled";
import { Navbar } from "./Navbar";
import { IoIosSearch } from "react-icons/io";
import { HeaderResponsiveStyled } from "./Styles/HeaderResponsiveStyled";
import { IoIosMenu } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

export const Header = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
              <li>U.S.</li>
              <li>INTERNATIONAL</li>
              <li>CANADA</li>
              <li>SPAIN</li>
              <li>中文</li>
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
      <HeaderResponsiveStyled>
        {isMobile && (
          <>
            <div className="headerTop">
              <div className="options">
                <button>
                  <IoIosMenu />
                </button>
              </div>
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="account">
                <button>
                  <IoPersonSharp />
                </button>
              </div>
            </div>
            <div className="headerCenter">
              <div>
                <p>{formattedDate}</p>
              </div>
              <div className="logo">
                <button>SUBSCRIBE FOR €0.50/WEEK</button>
              </div>
            </div>
          </>
        )}
      </HeaderResponsiveStyled>
    </>
  );
};
