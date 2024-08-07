import React from 'react';
import { SideNav } from './sidenav';
import { Navbar } from '@/components/navbar/Navbar';

export const DashBoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className="">
        <Navbar />
        
        
      </div>
      <div className="w-full h-full">
        <div
          className="flex h-screen"
        >
          <div className="h-[100%] lg:block hidden">
            <SideNav style="relative desktopNav overflow-auto dark:bg-zinc-800 bg-white shadow me-2 me-1" />
          </div>
          <div className="w-full block ">
            <SideNav />
            <div className="px-4 w-full h-full mt-4 ">
              <div className="pb-14 flex flex-col justify-between md:h-screen h-auto">
                {children}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
