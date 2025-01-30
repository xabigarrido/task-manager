import React, { useContext, useState } from "react";
import { MiContenido } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(MiContenido);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    createTask(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto bg-slate-600 p-5">
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="bg-white text-center font-bold w-full p-3"
        placeholder="Titulo"
        value={title}
        autoFocus
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        className="bg-white text-center font-bold w-full p-3 mt-2"
        placeholder="Descripcion"
        value={description}
      />
      <button
        onClick={() => handleSubmit()}
        className="bg-blue-500 px-4 py-2 rounded-2xl font-bold text-white hover:bg-yellow-300 "
      >
        Agregar
      </button>
    </div>
  );
}

export default TaskForm;
