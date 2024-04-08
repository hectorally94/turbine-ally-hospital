
import React, { ReactNode } from 'react';
import AdminNavbar from '../Components/Navbar/AdminNavbar';
import { AdminSidebar } from '../Components/Sidebar/AdminSidebar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto '>
                <AdminSidebar/>
                <div className='grow'>
                    <AdminNavbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    );
};

export default Layout;
