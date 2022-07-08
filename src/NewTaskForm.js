import React from 'react';
import { Button, Form } from 'react-bootstrap';

function NewTaskForm({ addTask, isEditing }) {
  const [taskName, setTaskName] = React.useState("");
  const [taskTime, setTaskTime] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");
  const newTask = {title: taskName, time: taskTime, description: taskDescription, isDone: false};

  const handleSubmit = e => {
    e.preventDefault();
    if (!taskName) return;
    addTask(newTask);
    setTaskName("");
    setTaskTime("");
    setTaskDescription("");
  };

  return (
    <Form className={isEditing ? "hide-new-task-form" : "show-new-task-form"} onSubmit={handleSubmit}> 
      <h4 className="task-form-header">New Task</h4>
      <Form.Group className="form-group">
        <Form.Label><b>Task Name</b></Form.Label>
        <Form.Control type="text" className="input" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Task Name" />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label><b>Time Limit</b></Form.Label>
        <Form.Control type="text" className="input" value={taskTime} onChange={e => setTaskTime(e.target.value)} placeholder="Estimated Time" />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control as="textarea" className="input" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} placeholder="Description" />
      </Form.Group>
      <Button className="button-submit" variant="primary mb-3" type="submit">
        Add Task
      </Button>
    </Form>
  );
}

export default NewTaskForm;