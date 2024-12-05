import React from "react";
import { Task as TaskType } from "../types";
import { useTask } from "../context/TaskContext";

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = React.memo(({ task }) => {
  const { removeTask } = useTask(); // Usamos el hook personalizado

  return (
    <li className="bg-white p-4 rounded-md shadow flex justify-between items-center">
      <span className="text-gray-700">{task.name}</span>
      <button
        onClick={() => removeTask(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
});

export default Task;
