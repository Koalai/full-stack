import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AlignJustify,
  MoreVertical,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { SidebarItems } from './SidebarItems';
import { ProjectsContext } from '../context/projectsContext';

export const ProjectSection = ({ expanded }) => {
  const { projects, setProjects, projectSelectked, setProjectSelected } = useContext(ProjectsContext);
  const [projectExpanded, setProjectExpanded] = useState(false);
  const [projectFormOpened, setProjectFormOpened] = useState(false);
  const [showOptionsId, setShowOptionsId] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [projectEditingId, setProjectEditingId] = useState(null);

  const viewProject = () => {
    setProjectExpanded(!projectExpanded);
  };

  const openProjectForm = () => {
    setProjectFormOpened(true);
  };

  const addProject = () => {
    if (projectName.trim()) {
      setProjects((prev) => [
        ...prev,
        { name: projectName, id: self.crypto.randomUUID() },
      ]);
      setProjectName('');
      closeProjectForm();
    }
  };

  const closeProjectForm = () => {
    setProjectFormOpened(false);
  };

  const handleMoreOptions = (id) => {
    setShowOptionsId(showOptionsId === id ? null : id);
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setShowOptionsId(null);
    const projectToEdit = projects.find((p) => p.id === id);
    if (projectToEdit) {
      setProjectName(projectToEdit.name);
      setProjectEditingId(id);
    }
  };

  const handleRemove = (id) => {
    const remainProjects = projects.filter((p) => p.id !== id);
    setProjects(remainProjects);
  };

  const onRename = () => {
    if (projectName.trim()) {
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === projectEditingId
            ? { ...project, name: projectName }
            : project
        )
      );
      setIsEditing(false);
      setProjectName('');
      setProjectEditingId(null);
    }
  };

  const onCancel = () => {
    setIsEditing(false);
    setProjectName('');
    setProjectEditingId(null);
  };

  const handleProjectClicked = (project) => {
    console.log(project)
    setProjectSelected(project)
  }


  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-between pr-4 relative'>
        <SidebarItems icon={<AlignJustify size={40} />} text='Project' />
        <button
          className={`p-1.5 rounded-lg transition-all ${
            expanded ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}
          onClick={viewProject}
        >
          {projectExpanded ? <ChevronDown /> : <ChevronRight />}
        </button>
      </div>
      {projectExpanded && (
        <div
          className={`transition-all ease-in-out overflow-hidden ${
            expanded ? 'w-full opacity-100' : 'w-0 opacity-0'
          } relative`}
        >
          <div className='overflow-visible'>
            {' '}
            {projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className='relative flex gap-4 pl-8 items-center hover:text-white font-black text-lg hover:bg-gradient-blue px-2 py-2'
                  onClick={() => handleProjectClicked(project)}
                >
                  {isEditing && projectEditingId === project.id ? (
                    <div className='flex flex-col items-center gap-4'>
                      <div className='flex gap-4 text-black'>
                        <AlignJustify />
                        <input
                          type='text'
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </div>
                      <div className='flex gap-8'>
                        <button
                          className='px-2 py-1 bg-green-600 hover:bg-green-700 text-white font-black rounded-md'
                          onClick={onRename}
                        >
                          Rename
                        </button>
                        <button
                          className='px-2 py-1 bg-red-600 hover:bg-red-700 text-white font-black rounded-md'
                          onClick={onCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className='flex gap-4 justify-between w-full'>
                      <div className='flex gap-4 items-center'>
                        <AlignJustify />
                        <p>{project.name}</p>
                      </div>
                      <MoreVertical
                        onClick={() => handleMoreOptions(project.id)}
                      />
                    </div>
                  )}

                  {showOptionsId === project.id && (
                    <div className='absolute bg-yellow-200 text-black rounded shadow-lg right-8 bot-full mt-1 z-auto  '>
                      <ul className='flex flex-col'>
                        <li
                          className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                          onClick={() => handleEdit(project.id)}
                        >
                          Edit
                        </li>
                        <li
                          className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                          onClick={() => handleRemove(project.id)}
                        >
                          Remove
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {projectFormOpened && (
            <div className='hover:bg-gradient-blue py-4 flex flex-col gap-4'>
              <div className='flex gap-4 px-4 items-center'>
                <AlignJustify />
                <input
                  type='text'
                  placeholder='Enter Project Name'
                  value={projectName}
                  className='px-2 py-2 rounded-md w-1/2'
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className='flex justify-start px-8 gap-16 text-white'>
                <button
                  onClick={addProject}
                  className='px-2 py-1 bg-green-600 rounded-md w-16 hover:bg-green-700'
                >
                  Add
                </button>
                <button
                  className='px-2 py-1 bg-red-600 rounded-md w-16 hover:bg-red-700'
                  onClick={closeProjectForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <div
            onClick={openProjectForm}
            className='flex pl-8 py-2 mt-4 gap-4 items-center font-black text-lg hover:bg-gradient-blue hover:text-white transition-all duration-300 ease-in-out group'
          >
            <span className='rounded-full border border-slate-400 text-slate-400 group-hover:border-white group-hover:text-white w-6 h-6 flex justify-center items-center'>
              +
            </span>
            <p>Add Project</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSection;

ProjectSection.propTypes = {
  expanded: PropTypes.bool.isRequired,
};
