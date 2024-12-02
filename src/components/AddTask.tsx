import React, { useState } from "react";

interface AddTaskProps {
  addTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Nueva tarea"
        className="border p-2 flex-grow"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Añadir</button>
    </form>
  );
};

export default AddTask;
