import React, { ReactNode } from 'react';
import Leftbar from '@/components/custom/layout/leftbar';
import Rightbar from '@/components/custom/layout/rightbar';
import TopNav from '@/components/custom/layout/TopNav';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='bg-hero bg-cover h-screen overflow-hidden px-4'>
            <div className='p-4 flex items-center justify-center'>
                <TopNav/>
            </div>
            <div className='flex h-full'>
                <div className='w-60 h-[85%] mr-10 bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border rounded-full py-6'><Leftbar /></div>
                <div className='flex-1 overflow-auto h-[85%] hide-scrollbar bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-l-lg border-l border-b border-t'>{children}</div>
                <div className='w-1/4 overflow-auto h-[85%] hide-scrollbar bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border-r rounded-r-lg border-b border-t'><Rightbar /></div>
            </div>
        </div>

    );
}

export default Layout;