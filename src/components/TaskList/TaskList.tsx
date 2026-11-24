import { useState } from "react";
import type { Task } from "../../types/task"
import TaskItem from "./TaskItem"
import EditTaskForm from "./EditTaskForm";

export default function TaskList({ tasks, showOnlyIncomplete}: Props) {
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
                                setEditingTaskId={setEditingTaskId} />
                        ) : (
                            <TaskItem
                                task={task}
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
}