import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { SidebarContext } from '../context/sidebarContext';
import { ProjectsContext } from '../context/projectsContext';


export const SidebarItems = ({ icon, text }) => {
  const { expanded, setSelectedSection  } = useContext(SidebarContext);
  const {setProjectSelected} = useContext(ProjectsContext)
 
  const handleClick = () => {
    setSelectedSection(text)
    setProjectSelected("") 
  }

  return (
    <li
      onClick={handleClick}
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
