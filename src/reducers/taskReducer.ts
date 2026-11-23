import type { EditTask } from "../types/editTask";
import type { Task } from "../types/task";
import { updateLocalStorage } from "../utils/localStorageUtil";


// This is the reducer function that handles all state changes for the task list
export const taskReducer = (state:Task[], action:Action) => {

  // We'll store the new version of the task list here
  let updatedTasks:Task[];

  // Decide what to do based on the action type
  switch (action.type) {

    // If the action is to add a task
    case "ADD":
      // Create a new array with the current tasks plus the new one from action.payload
      updatedTasks = [...state, action.payload as Task];
      break;

    // If the action is to remove a task
    case "REMOVE":
      // Filter out the task whose id matches action.payload (the task ID to remove)
      updatedTasks = state.filter((t) => t.id !== action.payload);
      break;

    // If the action is to update a task's text or priority
    case "UPDATE":
      // Map through all tasks and update the one that matches the given taskId
      updatedTasks = state.map((task) =>
        task.id === ((action.payload) as EditTask).id
          ? { ...task, text: ((action.payload) as EditTask).text, priority: ((action.payload) as EditTask).priority }
          : task
      );
      break;

    // If the action is to toggle a task's done status
    case "TOGGLE_DONE":
      // Map through all tasks and flip the 'done' value of the matching task
      updatedTasks = state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      break;

    // If the action is to sort tasks by priority
    case "SORT":
      // Make a copy of the tasks and sort them by ascending priority (lowest number first)
      updatedTasks = [...state]
      .sort((a, b) => a.priority - b.priority);
      break;
    
    // If no matching action type is found, just return the current state
    default:
      updatedTasks = state;
  }

  // Save the updated task list to localStorage for persistence
  updateLocalStorage(updatedTasks);

  // Return the new task list to update the state
  return updatedTasks;

}

type Action = {
    type:string
    payload?:number|Task|EditTask
}