import React from "react";
import { useTask } from "../context/TaskContext";

const TaskForm: React.FC = () => {
  const { addTask } = useTask();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const taskName = formData.get("taskName") as string;
    if (taskName.trim()) {
      addTask(taskName);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        name="taskName"
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

export default TaskForm;
