import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { Task } from './types/Task';
import './App.css';

// Function to generate a unique ID for each task
const generateId = (): number => Math.floor(Math.random() * 10000);

const App: React.FC = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a new task
  const addTask = (name: string) => {
    setTasks([...tasks, { id: generateId(), name }]);
  };

  // Function to edit an existing task
  const editTask = (id: number, newName: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, name: newName } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
