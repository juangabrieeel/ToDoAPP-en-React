import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-700">About This App</h2>
      <p className="mt-2 text-gray-600">
        This is a simple task management app built with React, TypeScript, and
        Tailwind CSS. It showcases concepts like state management, reusable
        components, and modern UI design. It has been fully developed by Juan
        Gabriel Caro Diaz with the aim of consolidating knowledge in react and
        hooks.
      </p>
    </div>
  );
};

export default AboutPage;
