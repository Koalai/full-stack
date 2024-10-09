import PropTypes from 'prop-types';
import { useContext } from 'react';
import { SidebarContext } from '../context/sidebarContext';
import { ProjectsContext } from '../context/projectsContext';

export const SidebarItems = ({ icon, text }) => {
  const { expanded, handleItemClicked,  } = useContext(SidebarContext);
  const { selectSection } = useContext(ProjectsContext);


  return (
    <li
   
      className={`flex h-14 hover:bg-gradient-blue items-center hover:text-white pl-4 gap-4 py-2 font-black text-xl`}
    >
      {icon}
      <p
        className={`transition-all overflow-hidden ease-in-out ${
          expanded ? 'w-3/4' : 'w-0'
        }`}
      >
        {text}
      </p>
    </li>
  );
};

SidebarItems.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};
