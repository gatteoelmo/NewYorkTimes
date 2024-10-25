/* eslint-disable react/prop-types */
/**
 * The `SubSections` component in JavaScript React renders a list of subsections with dynamic styling
 * based on the selected status.
 * @returns The `SubSections` component is being returned. It takes in props `subSections`, `status`,
 * and `set`, and renders a list (`ul`) of subSections with each subSection as a list item (`li`). The
 * `onClick` event is set to call the `set` function with the current `subSection` when a list item is
 * clicked.
 */

import { useDispatch, useSelector } from "react-redux";
import { changeSection } from "../redux/sectionSlice";

export const SubSections = ({ subSections }) => {
  const status = useSelector((state) => state.section);
  const dispatch = useDispatch();

  return (
    <ul>
      {subSections.map((subSection, index) => (
        <li
          key={index}
          onClick={() => {
            dispatch(changeSection(subSection));
          }}
          style={{
            fontWeight: status === subSection ? "bold" : "normal",
          }}
        >
          {subSection}
        </li>
      ))}
    </ul>
  );
};
