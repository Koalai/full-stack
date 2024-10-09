import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import { ProjectsContext } from '../context/projectsContext';
import TaskList from './Task';

export const Main = ({ expanded }) => {
  const {
    projectSelected,
    tasks,
    setTasks,
    currentSection,
    projects,
    setProjectSelected,
  } = useContext(ProjectsContext);
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

  const filteredTasks = currentSection
    ? tasks
    : tasks.filter((task) => task.projectId === projectSelected.id);

  return (
    <div
      className={`flex px-16 min-h-screen bg-slate-200  ${
        expanded ? 'w-4/5' : 'flex-1'
      }`}
    >
      {projectSelected !== '' && (
        <div className='w-full'>
          <div className='bg-green-600 rounded-md h-1/6 flex justify-center items-center text-white font-black text-4xl'>
            <h1>{projectSelected.name}</h1>
          </div>
          <TaskList tasks={filteredTasks} />

          {isTaskFormOpened && (
            <form className='bg-white rounded-md shadow-md px-8 py-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='title'>Title:</label>
                <input
                  type='text'
                  placeholder='What to do?'
                  className='border h-10 px-2'
                  value={task.title}
                  onChange={(e) =>
                    setTask({ ...task, ['title']: e.target.value })
                  }
                  required
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='descriptions'>Descriptions:</label>
                <input
                  type='text'
                  placeholder="I'm just gonna write something here, right?"
                  className='border h-16 px-2'
                  value={task.descriptions}
                  onChange={(e) =>
                    setTask({ ...task, ['descriptions']: e.target.value })
                  }
                  required
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='date'>Date:</label>
                <input
                  type='date'
                  className='border px-2 h-10'
                  value={task.dueDate}
                  onChange={(e) =>
                    setTask({ ...task, ['dueDate']: e.target.value })
                  }
                />
              </div>
              <div className='flex justify-center gap-16 mt-4'>
                <button
                  type='button'
                  className='py-1 px-2 w-16 rounded-lg text-white font-bold bg-green-600 hover:bg-green-700'
                  onClick={addTask}
                >
                  Add
                </button>
                <button
                  type='button'
                  className='py-1 px-2 w-16 rounded-lg text-white font-bold bg-red-600 hover:bg-red-700'
                  onClick={closeTaskForm}
                >
                  Cancel
                </button>
              </div>
            </form>
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
  );
};

Main.propTypes = {
  expanded: PropTypes.bool.isRequired,
};
