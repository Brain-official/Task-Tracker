import './index.css';
import { useState } from 'react';
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTask from './Components/AddTask';




function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "4th June ",
      reminder: false  
    },
  
  {
      id: 2,
      text: "Flight to US",
      day: "11th September ",
      reminder: false  
    },
  
  {
      id: 3,
      text: "CS rotation ",
      day: "9th February ",
      reminder: false  
  },
  ])




  //Adds Task to the Task tracker as objects
  const addTask = (task)=> {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
    console.log(id)
  }



  ///Deletes task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }



  ///Toggle Reminder: Changes the state of the reminder boolean in tasks
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?  {...task, reminder: !task.reminder} : task)) 
  }


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={ addTask} />
      {tasks.length <= 0 ?
        "No Task left" :
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      }
    </div>
  );
}


export default App;







