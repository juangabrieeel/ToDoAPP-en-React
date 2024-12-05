import React from "react";
import { TaskProvider } from "../context/TaskContext";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const HomePage: React.FC = () => {
  return (
    <TaskProvider>
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Task Manager
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default HomePage;
