import { NavbarStyled } from "./Styles/NavbarStyled";
import { useRef, useEffect, useState } from "react";
import { SubSections } from "./SubSectionsNavbar";
import { subSections1, subSections2 } from "../utils/subsectionsList";

export const Navbar = () => {
  /* This code snippet is creating a functionality to determine if a specific element (in this case, the
Navbar) is intersecting with another element in the viewport. Here's a breakdown of what each part
does: */
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
          <SubSections subSections={subSections1} />
        </ul>
        <hr />
        <ul>
          <SubSections subSections={subSections2} />
        </ul>
      </nav>

      {/* navbar will be fixed when you scroll under the header */}
      <nav className={!isIntersecting ? "navbarFixed" : "navbarNone"}>
        <ul>
          <SubSections subSections={subSections1} />
        </ul>
        <hr />
        <ul>
          <SubSections subSections={subSections2} />
        </ul>
      </nav>
    </NavbarStyled>
  );
};
