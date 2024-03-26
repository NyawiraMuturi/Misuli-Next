import React, { ReactNode } from 'react';
import Leftbar from '@/components/custom/layout/leftbar';
import Rightbar from '@/components/custom/layout/rightbar';
import TopNav from '@/components/custom/layout/TopNav';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div className='p-4 flex items-center justify-center	border'>
                <TopNav/>
            </div>
            <div className='flex'>
                <div className='w-1/4 border h-screen'><Leftbar /></div>
                <div className='flex-1 overflow-auto h-screen hide-scrollbar '>{children}</div>
                <div className='w-1/5 border overflow-auto h-screen hide-scrollbar '><Rightbar /></div>
            </div>
        </div>

    );
}

export default Layout;