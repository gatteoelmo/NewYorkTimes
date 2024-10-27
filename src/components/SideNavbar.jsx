import { SideNavbarStyled } from "./Styles/SideNavbarStyled";
import { sections } from "../utils/sectionsList";
import { subSections1, subSections2 } from "../utils/subsectionsList";
import { SubSections } from "./SubSectionsNavbar";
import { SearchBar } from "./SearchBar";

function SideNavbar() {
  return (
    <SideNavbarStyled>
      <SearchBar />
      <nav>
        <ul>
          <SubSections subSections={sections} />
        </ul>
        <ul>
          <SubSections subSections={subSections1} />
          <SubSections subSections={subSections2} />
        </ul>
      </nav>
    </SideNavbarStyled>
  );
}

export default SideNavbar;
