import React, { useState } from "react";
import Tasks from "./Tasks";
import AddTaskIcon from '@mui/icons-material/AddTask';

function Form() {
  const [input, setInput] = useState("");
  const [tasksItem, setTasks] = useState([]);
  
  function handleSubmit(e) {
    e.preventDefault();
    
    if(!input) return;
    setTasks((prev) => {
      return [...prev, input];
    });
    console.log(tasksItem);
    setInput("");
  }

  function deleteItem(id) {
    console.log('del')
   setTasks((prev)=>{
    return prev.filter((item, index)=> {
        return index !== id;
    })
   })
  }
  

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input "  
          placeholder="Enter your tasks here..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button className="btn">+</button>
      </form>
      {!tasksItem.length ? <div className="status"><em >Start Adding Some Tasks To Do</em></div> :<div className="main">
        <ul className="taskContainer">
          {tasksItem.map((item,index) => {
            return <Tasks id={index} key={index} item={item} onDelete={deleteItem} />
          })}
        </ul>
      </div>}
      {/* <div className="main">
        <ul className="taskContainer">
          {tasksItem.map((item,index) => {
            return <Tasks id={index} key={index} item={item} onDelete={deleteItem}/>
          })}
        </ul>
      </div> */}
    </>
  );
}

export default Form;
