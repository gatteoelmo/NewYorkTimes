import { FooterStyled } from "../components/Styles/FooterStyled";
import Logo from "../assets/imgs/NewYorkTimesLogo.svg";
import { TechStack } from "./TechStack";
import SOYA from "../assets/imgs/font-material-05-05.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="logo">
        <img src={Logo} alt="" />
        <a href="https://gatteoelmo.github.io/soya/ " target="_blank">
          <img src={SOYA} alt="" style={{ width: "100px" }} />
        </a>
      </div>
      <hr style={{ width: "100%", backgroundColor: "black" }} />
      <h6>Tech Stack</h6>
      <TechStack />
      <hr
        style={{ width: "100%", backgroundColor: "black", marginTop: "20px" }}
      />
      <div className="socialMedia">
        <a href="https://github.com/gatteoelmo" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/matteo-gallardo-091562285/overlay/about-this-profile/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/gatteo_elmollardo/?igsh=MTJqaHNob292ZjZibA%3D%3D&utm_source=qr"
          target="_blank"
        >
          <AiFillInstagram />
        </a>
      </div>
    </FooterStyled>
  );
};
