// import React from 'react'


// const TaskItem= function(item,handleDelete){
// return(
//     <div>
// <h1>{TaskItem.task}</h1>
// <p>{TaskItem.completed.toString()}</p>
// <p>{TaskItem.taskAssignedTo}</p>
// <button onClick={handleDelete}>Delete</button>


//     </div>
// )
// }

// export default TaskItem



import React from 'react';

const TaskItem = function ({ item, handleDelete,handleToggle }) {
  return (
    <div>
      <h1>{item.task}</h1>
      <button onClick={handleToggle}>{item.completed?"Yes":"No"}</button>
      <p>{item.taskAssignedTo}</p>
      <button onClick={handleDelete}>Delete</button>
    
    </div>
  );
};

export default TaskItem;

