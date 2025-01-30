import React, { useContext } from "react";
import { MiContenido } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(MiContenido);
  if (tasks.length === 0)
    return (
      <h1 className="text-center text-white font-bold text-2xl">
        No hay tareas
      </h1>
    );
  return (
    <div className="grid grid-cols-4 gap-2 mt-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
