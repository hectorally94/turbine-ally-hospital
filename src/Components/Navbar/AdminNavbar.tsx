import React from 'react';
import Toggle from '../../MyCustomTheme/ThemeToggle';
import { useKeycloak } from '@react-keycloak/web';
import { FiLogOut } from 'react-icons/fi'; // Import FiLogOut icon from react-icons/fi

const AdminNavbar = () => {
  const { keycloak, initialized } = useKeycloak();

  const handleLogout = () => {
    if (initialized) {
      keycloak.logout();
    }
  };

  const buttonJsx = initialized ? (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
    >
      <FiLogOut className="w-5 h-5" /> {/* Render the FiLogOut icon */}
      <span>Logout</span>
    </button>
  ) : (
    <button
      onClick={() => keycloak.login()}
      className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      <span>Cnnecting..</span>
    </button>
  );

  return (
    <nav className='bg-white border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex justify-between items-center mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
             Turbine Clinic
          </span>
        </div>

        <div className='flex justify-end pr-4'>
          <Toggle />
          {buttonJsx} {/* Render the login/logout button based on initialized state */}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
