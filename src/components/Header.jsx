import Logo from "../assets/imgs/NewYorkTimesLogo.svg";
import { HeaderStyled } from "./Styles/HeaderStyled";
import { Navbar } from "./Navbar";
import { IoIosSearch } from "react-icons/io";
import { formattedDate } from "../utils/Date";
import { MobileHeader } from "./MobileHeader";
import { useIsMobile } from "../utils/MobileResponsive";
import { useSelector, useDispatch } from "react-redux";
import { changeSection } from "../redux/sectionSlice";

export const Header = () => {
  const status = useSelector((state) => state.section);
  const dispatch = useDispatch();
  const isMobile = useIsMobile(1200);
  const sections = ["home", "world", "us", "nyregion"];

  return (
    <>
      {!isMobile && (
        <HeaderStyled>
          <div className="headerTop">
            <div>
              <button className="search">
                <IoIosSearch />
              </button>
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
      )}
      {isMobile && <MobileHeader />}
    </>
  );
};
