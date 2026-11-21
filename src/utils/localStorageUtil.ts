import type { Task } from "../types/task";

export const getStoredTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

export const updateLocalStorage = (tasks:Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};