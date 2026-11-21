import { useState } from "react";
import type { EditTask } from "../../types/editTask"
import type { Task } from "../../types/task"
import TaskItem from "./TaskItem"
import EditTaskForm from "./EditTaskForm";

export default function TaskList({ tasks, showOnlyIncomplete, toggleTaskDone, deleteTask,
    updateTask }: Props) {
    const [editingTaskId, setEditingTaskId] = useState<number|null>(null);
    return (
        <ul >
            {tasks
                .filter((task) => !showOnlyIncomplete || !task.done)
                .map(((task) => (
                    <li key={task.id} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px",
                        borderBottom: "1px solid #ccc",
                        gap: "10px",
                    }}>
                        {editingTaskId === task.id ? (
                            <EditTaskForm
                                task={task}
                                setEditingTaskId={setEditingTaskId}
                                updateTask={updateTask}
                            />
                        ) : (
                            <TaskItem
                                task={task}
                                deleteTask={deleteTask}
                                toggleTaskDone={toggleTaskDone}
                                setEditingTaskId={setEditingTaskId}
                            />
                        )}
                    </li>
                )))}
        </ul>
    )
}

type Props = {
    tasks: Task[]
    showOnlyIncomplete: boolean
    toggleTaskDone: (id: number) => void
    deleteTask: (id: number) => void
    updateTask: (editTask: EditTask) => void
}