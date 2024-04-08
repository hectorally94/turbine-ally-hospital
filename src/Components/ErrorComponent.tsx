import React from 'react';

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">

    <div className="bg-red-500 text-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
        <p className="text-lg">{message}</p>
    </div>
    
    </div>
  );
};

export default ErrorComponent;
