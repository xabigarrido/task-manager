import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="containerm-auto p-5 mt-3 rounded-2xl">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
