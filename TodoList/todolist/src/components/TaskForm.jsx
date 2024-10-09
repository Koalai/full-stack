

export const TaskForm = ({task, setTask, closeTaskForm, addTask}) => {
 return (
   <form className='bg-white rounded-md shadow-md px-8 py-4'>
     <div className='flex flex-col gap-2'>
       <label htmlFor='title'>Title:</label>
       <input
         type='text'
         placeholder='What to do?'
         className='border h-10 px-2'
         value={task.title}
         onChange={(e) => setTask({ ...task, ['title']: e.target.value })}
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
         onChange={(e) => setTask({ ...task, ['dueDate']: e.target.value })}
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
 );
}