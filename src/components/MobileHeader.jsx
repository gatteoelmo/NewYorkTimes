import { HeaderResponsiveStyled } from "./Styles/HeaderResponsiveStyled";
import { formattedDate } from "../utils/Date";
import { IoIosMenu, IoPersonSharp } from "react-icons/io5";
import Logo from "../assets/imgs/NewYorkTimesLogo.svg";

export const MobileHeader = () => {
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
  </HeaderResponsiveStyled>;
};
