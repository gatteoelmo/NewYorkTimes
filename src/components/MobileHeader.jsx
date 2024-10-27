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
              <a
                href="https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=vi&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignId%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252Fwww.nytimes.com%252F&asset=masthead"
                target="_blank"
              >
                <IoPersonSharp />
              </a>
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
