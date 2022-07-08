import React from 'react';
import { Button, Form } from 'react-bootstrap';

function UpdateTaskForm({ 
    isEditing, 
    currentEditTask, 
    currentEditName, 
    currentEditTime, 
    currentEditDescription, 
    setTaskName, 
    setTaskTime, 
    setTaskDescription, 
    updateTask, 
    closeEditForm }) {
      
  const newTask = {title: currentEditName, time: currentEditTime, description: currentEditDescription, isDone: false};

  const handleSubmit = e => {
    e.preventDefault();
    if (!currentEditName) {newTask.title = currentEditTask.title};
    if (!currentEditTime) {newTask.time = currentEditTask.time};
    if (!currentEditDescription) {newTask.description = currentEditTask.description};
    updateTask(newTask);
    closeEditForm();
  };

  return (
    <Form className={isEditing ? "show-edit-form" : "hide-edit-form"} onSubmit={handleSubmit}>
      <div className="edit-form-header">
        <Button className="button-action" variant="outline-danger" size="sm" onClick={() => closeEditForm()}>✕</Button>
      </div>
      <h4>Edit Task</h4>
      <Form.Group className="form-group">
        <Form.Label><b>Task Name</b></Form.Label>
        <Form.Control type="text" id="edit-input" value={currentEditName} onChange={e => setTaskName(e.target.value)} placeholder={currentEditTask.title}/>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label><b>Time Limit</b></Form.Label>
        <Form.Control type="text" id="edit-input" value={currentEditTime} onChange={e => setTaskTime(e.target.value)} placeholder={currentEditTask.time} />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label><b>Description</b></Form.Label>
        <Form.Control as="textarea" id="edit-textarea" value={currentEditDescription} onChange={e => setTaskDescription(e.target.value)} placeholder={currentEditTask.description} />
      </Form.Group>
      <Button className="button-submit" variant="primary mb-3" type="submit">
        Save
      </Button>
    </Form>
  );
}

export default UpdateTaskForm;