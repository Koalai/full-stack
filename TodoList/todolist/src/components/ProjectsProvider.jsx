import PropTypes from 'prop-types';
import { ProjectsContext } from '../context/projectsContext';
import { useState, useEffect } from 'react';

export const ProjectsProvider = ({ children }) => {
  const [projectSelected, setProjectSelected] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentSection, setCurrentSection] = useState("")
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem('projects')
    return storedProjects ? JSON.parse(storedProjects) : []
  });

  useEffect(() => {
      localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const selectSection = (section) => {
    setCurrentSection(section)
  }


  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects, projectSelected, setProjectSelected, tasks, setTasks, selectSection, currentSection ,setCurrentSection}}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
