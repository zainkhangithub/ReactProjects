import './App.css';
import {useState} from 'react'
import { Task } from './Task'

function App() {
  let [todoList, setTodoList] = useState([])
  let [newTask, setNewTask] = useState("")
  
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task])
  }

  const delTask = (id) => {
    console.log(todoList)
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
        <div className="App">
          <div className="addTask">
            <input type="text" onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
          </div>
          <div className="list">
            {todoList.map((task) => {
              return(
                <Task taskName={task.taskName} id={task.id} delTask={delTask}  />
              )              
            })}
          </div>
        </div>
  );
}



export default App;
