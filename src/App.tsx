import { useState } from 'react'
import './App.css'
import TaskControls from './components/TaskControls'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList/TaskList'
import type { Task } from './types/task'
import type { EditTask } from './types/editTask'
import { getStoredTasks, updateLocalStorage } from './utils/localStorageUtil'
export default function App() {
  const [tasks, setTasks] = useState<Task[]>(getStoredTasks());
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const sortTasks = () => {
    const sortedTasks = [...tasks]
      .sort((a, b) => a.priority - b.priority);
    setTasks(sortedTasks);
    updateLocalStorage(sortedTasks);
  };
  const addTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };
  const toggleTaskDone = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) =>
      task.id !== id 
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };
  const updateTask = (editTask:EditTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTask.id ?
        { ...task, text: editTask.text, priority: editTask.priority }
        : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };
  return (
    <div className="app">
      <h2 className="title">To-Do List</h2>
      <TaskForm addTask={addTask} />
      <TaskControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks} />
      <TaskList tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
        toggleTaskDone={toggleTaskDone}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  )
}