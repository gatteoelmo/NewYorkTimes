import { NavbarStyled } from "./Styles/NavbarStyled";
import { useRef, useEffect, useState } from "react";
import { SubSections } from "./SubSections";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  // subsections for navbar
  const subSections1 = [
    "arts",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "magazine",
  ];
  const subSections2 = [
    "movies",
    "opinion",
    "politics",
    "science",
    "sports",
    "technology",
    "theater",
  ];

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
          <SubSections
            subSections={subSections1}
            status={activeSection}
            set={setActiveSection}
          />
        </ul>
        <hr />
        <ul>
          <SubSections
            subSections={subSections2}
            status={activeSection}
            set={setActiveSection}
          />
        </ul>
      </nav>

      {/* navbar will be fixed when you scroll under the header */}
      <nav className={!isIntersecting ? "navbarFixed" : "navbarNone"}>
        <ul>
          <SubSections
            subSections={subSections1}
            status={activeSection}
            set={setActiveSection}
          />
        </ul>
        <hr />
        <ul>
          <SubSections
            subSections={subSections2}
            status={activeSection}
            set={setActiveSection}
          />
        </ul>
      </nav>
    </NavbarStyled>
  );
};
