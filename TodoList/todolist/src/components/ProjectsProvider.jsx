import PropTypes from 'prop-types';
import { ProjectsContext } from '../context/projectsContext';
import { useState, useEffect } from 'react';

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectSelected, setProjectSelected] = useState(null);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }, [projects]);



  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects, projectSelected, setProjectSelected }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
