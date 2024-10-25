import { HeaderResponsiveStyled } from "./Styles/HeaderResponsiveStyled";
import { formattedDate } from "../utils/Date";
import { IoPersonSharp, IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Logo from "../assets/imgs/NewYorkTimesLogo.svg";
import { useState } from "react";
import SideNavbar from "./SideNavbar";

export const MobileHeader = () => {
  const [visibleNAvbar, setVisibleNavbar] = useState(false);

  return (
    <>
      {visibleNAvbar && <SideNavbar />}
      <HeaderResponsiveStyled>
        <div className="headerTop">
          <div className="options">
            <button>
              {!visibleNAvbar ? (
                <IoIosMenu onClick={() => setVisibleNavbar(!visibleNAvbar)} />
              ) : (
                <IoCloseOutline
                  onClick={() => setVisibleNavbar(!visibleNAvbar)}
                />
              )}
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
      </HeaderResponsiveStyled>{" "}
    </>
  );
};
