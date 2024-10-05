import PropTypes from "prop-types";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";

export const SidebarItems = ({ icon, text }) => {
  const expanded = useContext(SidebarContext); // Chỉ cần lấy giá trị

  return (
    <li className={`flex h-10 hover:bg-gradient-blue items-center hover:text-white pl-4 gap-4 font-black text-xl`}>
      {icon}
      <p className={`transition-all overflow-hidden ease-in-out ${expanded ? 'w-3/4' : 'w-0'}`}>{text}</p>
    </li>
  );
}

SidebarItems.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};
