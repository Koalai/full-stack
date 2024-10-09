import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import { ProjectsContext } from '../context/projectsContext';
import TaskList from './Task';
import { TaskForm } from './TaskForm';

export const Main = ({ expanded, selectedSection, setSelectedSection }) => {
  const { projectSelected, tasks, setTasks, projects, setProjectSelected } =
    useContext(ProjectsContext);
  const [isTaskFormOpened, setIsTaskFormOpened] = useState(false);

  const [task, setTask] = useState({
    title: '',
    descriptions: '',
    dueDate: '',
  });

  useEffect(() => {
    if (projects.length <= 0) {
      setProjectSelected('');
    }
  }, [projects]);

  const openTaskForm = () => {
    setIsTaskFormOpened(true);
  };

  const closeTaskForm = () => {
    setIsTaskFormOpened(false);
  };

  const addTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, id: self.crypto.randomUUID(), projectId: projectSelected.id },
    ]);
    setTask({ title: '', descriptions: '', dueDate: '' });
    closeTaskForm();
  };

  const filteredTasks = selectedSection
    ? tasks
    : tasks.filter((task) => task.projectId === projectSelected.id);

  return (
    <div
      className={`flex px-16 min-h-screen bg-slate-200  ${
        expanded ? 'w-4/5' : 'flex-1'
      }`}
    >
      <div className='w-full'>
        <div className='bg-green-600 rounded-md h-1/6 flex justify-center items-center text-white font-black text-4xl'>
          <h1>{selectedSection ? selectedSection : projectSelected.name}</h1>
        </div>
        <TaskList tasks={filteredTasks} />
        {projectSelected !== '' && (
          <div>
            {isTaskFormOpened && (
              <TaskForm
                task={task}
                setTask={setTask}
                closeTaskForm={closeTaskForm}
                addTask={addTask}
              />
            )}
            <button
              className='flex gap-4 mt-8 w-full hover:bg-white rounded-md py-2 px-4'
              onClick={openTaskForm}
            >
              <span className='w-6 h-6 flex justify-center items-center font-bold rounded-full border border-black '>
                +
              </span>
              Add task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Main.propTypes = {
  expanded: PropTypes.bool.isRequired,
};
