import React, { useContext } from "react";
import { MiContenido } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(MiContenido);
  const handleSubmit = (id) => {
    deleteTask(id);
  };
  return (
    <div className="bg-slate-600 rounded-lg p-2 text-center text-white">
      <h1 className="text-2xl font-bold capitalize text-black">{task.title}</h1>
      <p>{task.title}</p>
      <button
        className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-400"
        onClick={() => handleSubmit(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
