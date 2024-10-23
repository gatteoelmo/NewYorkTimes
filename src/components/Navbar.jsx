import { NavbarStyled } from "./Styles/NavbarStyled";
import { useRef, useEffect, useState } from "react";

export const Navbar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    });
    if (element) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <NavbarStyled ref={ref}>
      <nav>
        <ul>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
        </ul>
        <hr />
        <ul>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
        </ul>
      </nav>
      <nav className={!isIntersecting ? "navbarFixed" : "navbarNone"}>
        <ul>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
        </ul>
        <hr />
        <ul>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
          <li>list</li>
        </ul>
      </nav>
    </NavbarStyled>
  );
};
