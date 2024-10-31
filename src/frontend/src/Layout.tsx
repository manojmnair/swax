import { Outlet } from 'react-router-dom';

import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
export const DashBoardLayout = () => (
    <div className="flex w-full gap-2 pt-2">
        <div className="hidden xl:block w-[20%] shadow-slate-400">
            <LeftMenu />
        </div>
        <div className="w-full lg:w-[80%] xl:w-[60%]">
            <div className="flex flex-col gap-6">
                <Outlet />
            </div>
        </div>
        <div className="hidden lg:block w-[20%]">
            <RightMenu />
        </div>
    </div>
)
export const HomeLayout = () => (
    <div className="flex gap-4 pt-2">
        <Outlet />
    </div>
)