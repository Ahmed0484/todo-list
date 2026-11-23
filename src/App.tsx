import { useReducer, useState } from 'react'
import './App.css'
import TaskControls from './components/TaskControls'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList/TaskList'
import type { Task } from './types/task'
import type { EditTask } from './types/editTask'
import { getStoredTasks } from './utils/localStorageUtil'
import { taskReducer } from './reducers/taskReducer'
export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks());
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const sortTasks = () => {
    dispatch({ type: "SORT" });
  };
  const addTask = (newTask: Task) => {
    dispatch({ type: "ADD", payload: newTask });
  };
  const toggleTaskDone = (id: number) => {
     dispatch({ type: "TOGGLE_DONE", payload: id });
  };
  const deleteTask = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const updateTask = (editTask:EditTask) => {
    const id= editTask.id
    const text = editTask.text
    const priority = editTask.priority
    dispatch({ type: "UPDATE", payload: {id, text, priority } });
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