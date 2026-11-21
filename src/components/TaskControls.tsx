import { ArrowDownWideNarrow } from "lucide-react";

export default function TaskControls({showOnlyIncomplete,
  setShowOnlyIncomplete,
  sortTasks}:Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={showOnlyIncomplete}
          onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
          style={{ marginRight: "5px" }}
        />
        Show only incomplete
      </label>
      <button
        onClick={sortTasks}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer"
        }}
      >
        <ArrowDownWideNarrow />
      </button>
    </div>
  )
}

type Props ={
  showOnlyIncomplete:boolean 
  setShowOnlyIncomplete:(show:boolean)=>void 
  sortTasks:()=>void
}