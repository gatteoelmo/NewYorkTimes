import Logo from "../assets/imgs/NewYorkTimesLogo.svg";
import { HeaderStyled } from "./Styles/HeaderStyled";
import { Navbar } from "./Navbar";
import { IoIosSearch } from "react-icons/io";
import { formattedDate } from "../utils/Date";
import { MobileHeader } from "./MobileHeader";
import { useIsMobile } from "../utils/MobileResponsive";
import { useSelector, useDispatch } from "react-redux";
import { changeSection } from "../redux/sectionSlice";
import { useState } from "react";
import { sections } from "../utils/sectionsList";
import { SearchBar } from "./searchBar";

export const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const status = useSelector((state) => state.section);
  const dispatch = useDispatch();
  const isMobile = useIsMobile(1200);

  return (
    <>
      {!isMobile && (
        <HeaderStyled>
          <div className="headerTop">
            <div>
              <button
                className="search"
                onClick={() => setVisibleSearch(!visibleSearch)}
              >
                <IoIosSearch />
              </button>
              {visibleSearch && <SearchBar />}
            </div>
            <div className="topBar">
              <ul className="topBar">
                {sections.map((section, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      dispatch(changeSection(section));
                    }}
                    style={{
                      fontWeight: status === section ? "bold" : "normal",
                    }}
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a href="https://www.nytimes.com/subscription?campaignId=9YU8R&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2F">
                <button className="subscribe">SUBSCRIBE FOR $0.50/WEEK</button>
              </a>
              <a href="https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=vi&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignId%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252Fwww.nytimes.com%252F&asset=masthead">
                <button className="subscribe">Log in</button>
              </a>
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
      )}
      {isMobile && <MobileHeader />}
    </>
  );
};
