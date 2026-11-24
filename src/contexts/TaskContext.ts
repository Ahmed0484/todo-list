import { createContext, useContext } from "react";
import type { TaskContextType } from "../App";

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);
export const useTaskActions = () => useContext(TaskContext);