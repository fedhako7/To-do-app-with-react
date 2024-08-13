import React from 'react';
import { Task } from './types/Task';

interface TaskListProps {
  tasks: Task[];
  editTask: (id: number, newName: string) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, editTask, deleteTask }) => {
  const handleEdit = (id: number) => {
    const newName = prompt('Edit Task Name');
    if (newName) {
      editTask(id, newName);
    }
  };

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
