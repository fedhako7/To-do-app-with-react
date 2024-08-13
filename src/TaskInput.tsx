import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (name: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleAdd = () => {
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="New Task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
