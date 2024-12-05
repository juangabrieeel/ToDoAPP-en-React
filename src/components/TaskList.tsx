import React from "react";
import { useTask } from "../context/TaskContext";

const TaskList: React.FC = () => {
  const { tasks, removeTask } = useTask();

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="bg-white p-4 rounded-md shadow flex justify-between items-center"
        >
          <span className="text-gray-700">{task.name}</span>
          <button
            onClick={() => removeTask(task.id)}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
