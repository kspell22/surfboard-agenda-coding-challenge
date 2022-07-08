import React from "react";
import "./App.css";
import { Card } from 'react-bootstrap';
import NavBar from './NavBar';
import TaskItem from './TaskItem';
import NewTaskForm from "./NewTaskForm";
import UpdateTaskForm from "./UpdateTaskForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import templateTasks from "./templateTasks";

function App() {
  const [taskList, setTaskList] = React.useState(templateTasks);
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentEditTask, setCurrentEditTask] = React.useState("");
  const [currentEditIndex, setCurrentEditIndex] = React.useState("");
  const [currentEditName, setCurrentEditName] = React.useState("");
  const [currentEditTime, setCurrentEditTime] = React.useState("");
  const [currentEditDescription, setCurrentEditDescription] = React.useState("");
  
  const addTask = newTask => {
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
  };

  const markTask = index => {
    const newTaskList = [...taskList];
    newTaskList[index].isDone = !taskList[index].isDone;
    setTaskList(newTaskList);
  };

  const editTask = index => {
    setCurrentEditIndex(index);
    setIsEditing(!isEditing);
    setCurrentEditTask(taskList[index]);
    setCurrentEditName(taskList[index].title);
    setCurrentEditTime(taskList[index].time);
    setCurrentEditDescription(taskList[index].description);
  }

  const updateTask = newTask => {
    const newTaskList = [...taskList];
    newTaskList[currentEditIndex] = newTask;
    setTaskList(newTaskList);
  }

  const setTaskName = name => {
    setCurrentEditName(name)
  }

  const setTaskTime = time => {
    setCurrentEditTime(time)
  }

  const setTaskDescription = description => {
    setCurrentEditDescription(description)
  }

  const closeEditForm = () => {
    setIsEditing(!isEditing);
  }

  const removeTask = index => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <div className="app">
      <NavBar/>
      <div className="container">
        <NewTaskForm addTask={addTask} isEditing={isEditing}/>
        <div className="task-list">
          {taskList.map((task, index) => (
            <Card className="task-card">
              <Card.Body>
                <TaskItem
                  key={index}
                  index={index}
                  task={task}
                  markTask={markTask}
                  removeTask={removeTask}
                  editTask={editTask}
                  isEditing={isEditing}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
        <UpdateTaskForm 
          isEditing={isEditing}
          currentEditTask={currentEditTask}
          currentEditName={currentEditName}
          currentEditTime={currentEditTime}
          currentEditDescription={currentEditDescription}
          setTaskName={setTaskName}
          setTaskTime={setTaskTime}
          setTaskDescription={setTaskDescription}
          updateTask={updateTask}
          closeEditForm={closeEditForm}
        />
      </div>
    </div>
  );
}

export default App;
