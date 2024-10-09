import React from 'react';
import { MoreVertical } from 'lucide-react';

const TaskList = ({ tasks }) => {
  return (
    <div className='my-4 flex flex-col gap-2'>
      {tasks.map((task) => (
        <div
          key={task.id}
          className='flex justify-between items-center px-4 border border-black rounded-md shadow-md'
        >
          <div className='flex flex-col'>
            <div className='flex gap-2 text-xl'>
              <input type='checkbox' />
              <p>{task.title}</p>
            </div>
            <p className='flex pl-4 text-sm'>{task.descriptions}</p>
          </div>
          <div className='flex '>
            <div className='px-1 py-1 rounded-md'>{task.dueDate}</div>
            <MoreVertical />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
