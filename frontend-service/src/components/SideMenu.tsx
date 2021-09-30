import {
    ChatIcon,
    HeartIcon,
    HomeIcon,
    MenuIcon,
    UserCircleIcon,
} from '@heroicons/react/solid';

const SideMenu = () => {
    return (
        <nav className="bg-blue-700 py-4 fixed h-full w-14 text-white flex flex-col items-center flex-none">
            <div className="flex-none">
                <MenuIcon className="h-7 w-7 cursor-pointer" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <HomeIcon className="h-7 w-7 cursor-pointer" />
                <ChatIcon className="h-7 w-7 cursor-pointer" />
                <HeartIcon className="h-7 w-7 cursor-pointer" />
            </div>

            <div className="flex-none">
                <UserCircleIcon className="h-7 w-7 cursor-pointer" />
            </div>
        </nav>
    );
};

export default SideMenu;
