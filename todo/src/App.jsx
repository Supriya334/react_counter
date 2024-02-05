import React, { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    console.log(event.target)

    const targetName = event.target.name


    const targetValue = targetName === "completed" ? event.target.checked : event.target.value
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }



  useEffect(()=>{
    console.log(tasks);
  },[tasks]);
  

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission



setTasks([
  ...tasks,
  formState
]);


  }

function handleDelete(index){

let updateArray=[...tasks];

updateArray.splice(index,1);
// console.log(updateArray);

setTasks(updateArray)


}


function handleToggle(index){

  let updateArray=[...tasks]
  updateArray[index].completed=! updateArray[index].completed

  setTasks(updateArray)
}

  return (
    <>
      <div className="mainDiv">
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange} />
          <label style={{color:"black"}}>
            Completed:
            <input name="completed" type="checkbox" />
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} 
        item={item} 
        handleDelete={()=>handleDelete(index)}
        handleToggle={()=>handleToggle(index)} />
      ))}
    </>
  );
}

export default App;
