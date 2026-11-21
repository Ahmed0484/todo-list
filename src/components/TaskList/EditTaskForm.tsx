import { useState } from "react";
import type { EditTask } from "../../types/editTask";
import type { Task } from "../../types/task";

export default function EditTaskForm({ task, setEditingTaskId, updateTask }:Props) {
  const [editText, setEditText] = useState(task.text);
  const [editPriority, setEditPriority] = useState(task.priority);

  const saveEdit = () => {
    if (editText.trim()) {
      //call updateTask passed down from App.
      updateTask({ id: task.id,text: editText, priority:editPriority });
      //update editingTaskId state to null
      setEditingTaskId(null);
    }
  };

  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        style={{
          flexGrow: 1,
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="number"
        min="1"
        value={editPriority}
        onChange={(e) => setEditPriority(Number(e.target.value))}
        style={{
          width: "50px",
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={saveEdit}
        style={{
          borderRadius: "5px",
          backgroundColor: "#28a745",
          color: "white",
          padding: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </>
  );
}

type Props={ 
  task:Task
  setEditingTaskId:(id:number|null)=>void
  updateTask:(editTask:EditTask)=>void
 }