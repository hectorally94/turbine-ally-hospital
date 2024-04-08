import React, { ReactNode } from 'react';

interface BackgroundProps {
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    return <div className='bg-white dark:bg-gray-800'>{children}</div>;
}

export default Background;
