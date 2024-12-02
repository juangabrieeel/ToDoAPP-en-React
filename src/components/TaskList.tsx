import React from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTask,
  deleteTask,
}) => {
  return (
    <ul className="space-y-2 mt-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-gray-100 rounded-lg p-2 shadow-sm"
        >
          <span
            className={`cursor-pointer text-gray-800 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
