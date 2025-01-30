import { useState, createContext, useEffect } from "react";
import { task as data } from "../tasks";

export const MiContenido = createContext();

export const MiContenedor = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    setTasks([...tasks, { id: tasks.length, title, description }]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <MiContenido.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </MiContenido.Provider>
  );
};
