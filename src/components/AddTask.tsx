import React, { useState } from "react";
import { useTask } from "../context/TaskContext";

const AddTask: React.FC = () => {
  const { addTask } = useTask(); // Usamos el hook personalizado
  const [taskName, setTaskName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName(""); // Limpiamos el input tras agregar la tarea
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
