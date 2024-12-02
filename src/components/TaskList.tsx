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

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center">
          <span
            className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
