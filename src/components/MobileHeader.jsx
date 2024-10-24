import { HeaderResponsiveStyled } from "./Styles/HeaderResponsiveStyled";
import { formattedDate } from "../utils/Date";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Logo from "../assets/imgs/NewYorkTimesLogo.svg";

export const MobileHeader = () => {
  return (
    <HeaderResponsiveStyled>
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
    </HeaderResponsiveStyled>
  );
};
