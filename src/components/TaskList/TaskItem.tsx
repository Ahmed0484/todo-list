import { Pencil, Trash } from "lucide-react"
import type { Task } from "../../types/task"
import { useTaskActions } from "../../contexts/TaskContext"

export default function TaskItem({ task,setEditingTaskId }: Props) {
  const {toggleTaskDone, deleteTask} = useTaskActions()
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTaskDone(task.id)}
          style={{ marginRight: "10px" }}
        />
        <span style={{
          textDecoration: task.done ? "line-through" : "none",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>{task.text}
          <span style={{
            backgroundColor: "#8ed6ee",
            color: "red",
            borderRadius: "50%",
            padding: "4px 8px",
            fontSize: "11px",
            fontWeight: "bold",
            textAlign: "center",
            display: "inline-block",
          }}>{task.priority}</span>
        </span>
      </div>

      <div style={{ display: "flex", gap: "5px" }}>
        <button
          onClick={() => setEditingTaskId(task.id)}
          style={{
            borderRadius: "50%",
            backgroundColor: "#35BCFF",
            color: "black",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Pencil size={16} />
        </button>
        <button
          style={{
            borderRadius: "50%",
            backgroundColor: "#dc3545",
            color: "black",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => deleteTask(task.id)}
        >
          <Trash size={16} />
        </button>
      </div>
    </>
  )
}

type Props = {
  task: Task
  setEditingTaskId: (id: number|null) => void
}