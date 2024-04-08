import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { SiFuturelearn } from 'react-icons/si';
import { SiOpenaccess } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { FaAddressBook } from 'react-icons/fa';
import HamburgerButton from '../HamburgerMenuButton/HamburgerButton';
import { useKeycloak } from '@react-keycloak/web';

// Define types for menu items and sub-menu items
interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
  gap?: string;
  requiredRoles: string[];
  submenus?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  subpath: string;
  icon: JSX.Element;
  requiredRoles: string[];
}

// Tooltip component to display menu item titles
const Tooltip: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="absolute z-10 w-auto py-1 px-2 text-sm bg-gray-800 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden dark:bg-gray-800 dark:text-white">
      {title}
    </div>
  );
};

// AdminSidebar component
export const AdminSidebar: React.FC = () => {
  const [open, setOpen] = useState(true); // State to manage sidebar open/close
  const [mobileMenu, setMobileMenu] = useState(false); // State to manage mobile menu open/close
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null); // State to manage submenu open/close

  const [userRoles, setUserRoles] = useState<string[]>(['']); // Example user roles

  const location = useLocation(); // Get current location
  const { keycloak, initialized } = useKeycloak(); // Destructure keycloak and initialized from useKeycloak hook
  
  
  useEffect(() => {
    const extractRolesFromToken = () => {
      if (keycloak && keycloak.authenticated) {
        const tokenContent = keycloak.tokenParsed;
        const realmRoles = tokenContent?.realm_access?.roles || [];
        const resourceRoles = tokenContent?.resource_access?.['turbine-app']?.roles || [];
        const allRoles = [...realmRoles, ...resourceRoles];
        const uniqueRoles = Array.from(new Set(allRoles));
        setUserRoles(uniqueRoles);
      } else {
        console.log('Keycloak not authenticated or not available.');
      }
    };

    if (initialized) {
      extractRolesFromToken();
    }
  }, [keycloak, initialized]); // Run effect when keycloak or initialization state changes

  const Menus: MenuItem[] = [
    { 
      title: 'Dashboards', 
      path: '/dashboard', 
      icon: <AiFillPieChart />, requiredRoles: ['admin'],
      submenus: [
        { title: 'dashboard', subpath: '/dashboard', icon: <AiFillPieChart />,requiredRoles: ['admin'] },
      ]
    },
    { 
      title: 'Finacial Managment', 
      path: '/FinacialManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','finance'],
      submenus: [
        { title: 'FinacialManagment', subpath: '/FinacialManagment', icon: <AiFillPieChart />,requiredRoles: ['admin','finance'] },
      ]
    },
    { 
      title: 'Report and Analysis', 
      path: '/ReportAnalysis', 
      icon: <AiFillPieChart />, requiredRoles: ['admin'],
      submenus: [
        { title: 'Report & Analysis', subpath: '/ReportAnalysis', icon: <AiFillPieChart />,requiredRoles: ['admin'] },
      ]
    },
    { 
      title: 'HR Managment', 
      path: '/HRManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','hr'],
      submenus: [
        { title: 'HR Managment', subpath: '/HRManagment', icon: <AiFillPieChart />,requiredRoles: ['admin','hr'] },
      ]
    },
    { 
      title: 'Ambulance Managment', 
      path: '/AmbulanceManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin'],
      submenus: [
        { title: 'Ambulance Managment', subpath: '/AmbulanceManagment', icon: <AiFillPieChart />,requiredRoles: ['admin'] },
      ]
    },
    { 
      title: 'Inventory', 
      path: '/Inventory', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','finance'],
      submenus: [
        { title: 'Inventory', subpath: '/Inventory', icon: <AiFillPieChart />,requiredRoles: ['admin','finance'] },
      ]
    },

    { 
      title: 'FeedBAck Managment', 
      path: '/FeedBAckManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin'],
      submenus: [
        { title: 'FeedBAck Managment', subpath: '/FeedBAckManagment', icon: <AiFillPieChart />,requiredRoles: ['admin'] },
      ]
    },

    { 
      title: 'Mortualy Managment', 
      path: '/MortualyManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin'],
      submenus: [
        { title: 'Mortualy Managment', subpath: '/MortualyManagment', icon: <AiFillPieChart />,requiredRoles: ['admin'] },
      ]
    },

    { 
      title: 'Discharge Managment', 
      path: '/DischargeManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin'],
      submenus: [
        { title: 'Discharge Managment', subpath: '/DischargeManagment', icon: <AiFillPieChart />,requiredRoles: ['admin'] },
      ]
    },

    { 
      title: 'Laboratory', 
      path: '/Laboratory', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','labo'],
      submenus: [
        { title: 'Laboratory', subpath: '/Laboratory', icon: <AiFillPieChart />,requiredRoles: ['admin','labo'] },
      ]
    },

    { 
      title: 'InsuranceClaim', 
      path: '/InsuranceClaim', 
      icon: <AiFillPieChart />, requiredRoles: ['admin'],
      submenus: [
        { title: 'InsuranceClaim', subpath: '/InsuranceClaim', icon: <AiFillPieChart />,requiredRoles: ['admin'] },
      ]
    },

    { 
      title: 'BIllingCollection', 
      path: '/BIllingCollection', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','billing','finance'],
      submenus: [
        { title: 'BIlling Collection', subpath: '/BIllingCollection', icon: <AiFillPieChart />,requiredRoles: ['admin','billing','finance'] },
      ]
    },

    { 
      title: 'NurcingStation', 
      path: '/NurcingStation', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','nursing'],
      submenus: [
        { title: 'Nurcing Station', subpath: '/NurcingStation', icon: <AiFillPieChart />,requiredRoles: ['admin','nursing'] },
      ]
    },

    { 
      title: 'In Patient Managment', 
      path: '/InPatientManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','nursing'],
      submenus: [
        { title: 'InPatientManagment', subpath: '/InPatientManagment', icon: <AiFillPieChart />,requiredRoles: ['admin','nursing'] },
      ]
    },

    { 
      title: 'ProcedureRoom ', 
      path: '/ProcedureRoom', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','nursing'],
      submenus: [
        { title: 'ProcedureRoom', subpath: '/ProcedureRoom', icon: <AiFillPieChart />,requiredRoles: ['admin','nursing'] },
      ]
    },

    { 
      title: 'Emergency', 
      path: '/Emergency', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','nursing'],
      submenus: [
        { title: 'Emergency', subpath: '/Emergency', icon: <AiFillPieChart />,requiredRoles: ['admin','nursing'] },
      ]
    },

    { 
      title: 'ClinicalManagment', 
      path: '/ClinicalManagment', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','nursing'],
      submenus: [
        { title: 'Clinical Managment', subpath: '/ClinicalManagment', icon: <AiFillPieChart />,requiredRoles: ['admin','nursing'] },
      ]
    },

    { 
      title: 'PatientRegistration', 
      path: '/PatientRegistration', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','billing'],
      submenus: [
        { title: 'Patient Registration', subpath: '/PatientRegistration', icon: <AiFillPieChart />,requiredRoles: ['admin','billing'] },
      ]
    },

    { 
      title: 'Doctor', 
      path: '/Doctor', 
      icon: <AiFillPieChart />, requiredRoles: ['admin','doctor'],
      submenus: [
        { title: 'Doctor', subpath: '/Doctor', icon: <AiFillPieChart />,requiredRoles: ['admin','doctor'] },
      ]
    }
  ];

  // Function to handle menu item click
  const handleMenuClick = (path: string) => {
    setOpen(false); // Close the sidebar
    if (submenuOpen === path) {
      setSubmenuOpen(null);
    } else {
      setSubmenuOpen(path);
    }
  };

  // Function to handle submenu item click
  const handleSubmenuClick = () => {
    setMobileMenu(false); // Close the mobile menu
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`${open ? 'w-60' : 'w-fit'} hidden sm:block relative bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}>
        <BsArrowLeftCircle
          className={`${!open && 'rotate-180'} absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`} onClick={() => setSubmenuOpen(null)}>
            <FaAddressBook/>
            {open && (
              <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                 Turbine Clinic
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          {/* Render menu items */}   {/* Render menu items based on user roles */}
          {Menus.filter(menu => menu.requiredRoles.some(role => userRoles.includes(role))).map((menu, index) => (
         
            <li key={index}>
              {/* Main menu item */}
              <div
                onClick={() => handleMenuClick(menu.path)}
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${menu.gap ? 'mt-9' : 'mt-2'}`}
              >
                {/* Menu icon with tooltip */}
                <span className='text-2xl relative group'>
                  {menu.icon}
                  <Tooltip title={menu.title} />
                </span>
                {/* Menu title */}
                <span className={`${!open && 'hidden'} origin-left duration-300 hover:block`}>
                  {menu.title}
                </span>
              </div>
              {/* Render submenus if submenu is open */}
              {submenuOpen === menu.path && (
                <ul className="ml-6">
                  {/* Render submenu items */}

          {menu.submenus?.filter(menu => menu.requiredRoles.some(role => userRoles.includes(role))).map((submenu, subIndex)=> (
                    <Link to={submenu.subpath} key={subIndex} onClick={handleSubmenuClick}>
                      <li
                        className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${menu.gap ? 'mt-3' : 'mt-2'}`}
                      >
                        {/* Submenu icon with tooltip */}
                        <span className='text-2xl relative group'>
                          {submenu.icon}
                          <Tooltip title={submenu.title} />
                        </span>
                        {/* Submenu title */}
                        <span className={`${!open && 'hidden'} origin-left duration-300 hover:block`}>
                          {submenu.title}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {/* Render menu items */}
          {Menus.filter(menu => menu.requiredRoles.some(role => userRoles.includes(role))).map((menu, index) => (
            <div key={index}>
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                onClick={() => handleMenuClick(menu.path)}
              >
                {menu.title}
              </span>
              {/* Render submenus if submenu is open */}
              {submenuOpen === menu.path && (
                <ul className="ml-6">
                  {/* Render submenu items */}
          {menu.submenus?.filter(menu => menu.requiredRoles.some(role => userRoles.includes(role))).map((submenu, subIndex)=> (
                    <Link to={submenu.subpath} key={subIndex} onClick={handleSubmenuClick}>
                      <li
                        className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${menu.gap ? 'mt-3' : 'mt-2'}`}
                      >
                        {/* Submenu icon with tooltip */}
                        <span className='text-2xl relative group'>
                          {submenu.icon}
                          <Tooltip title={submenu.title} />
                        </span>
                        {/* Submenu title */}
                        <span className={`${!open && 'open'} origin-left duration-300 hover:block`}>
                          {submenu.title}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
    </>
  );
};
