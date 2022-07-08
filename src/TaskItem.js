import React from 'react';
import { Button } from 'react-bootstrap';

function TaskItem({ index, task, markTask, removeTask, editTask, isEditing }) {
  return (
    <div>
      <div className="task-body">
        <div className="task-header">
          <div className="task-title">
            <div className="task-name" style={{ textDecoration: task.isDone ? "line-through" : "" }}>
              {task.title}
            </div>
            <div>
              {task.time}
            </div>
          </div>
          <div className="button-group">
            <Button className="button-action" variant="outline-success" size="sm" onClick={() => markTask(index)}>✓</Button>{' '}
            <Button className="button-action" variant="outline-danger" size="sm" onClick={() => removeTask(index)}>✕</Button>
            <Button className="button-action" variant={isEditing ? "outline-info" : "outline-primary"} size="sm" onClick={() => editTask(index)}>{isEditing ? "save" : "edit"}</Button>
          </div>
        </div>
      </div>
      <div> 
        {task.description}
      </div>
    </div>
  );
}

export default TaskItem;