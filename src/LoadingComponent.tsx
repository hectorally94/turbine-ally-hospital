import React from 'react';

const LoadingComponent: React.FC = () => {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl mb-4">Loading...</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
