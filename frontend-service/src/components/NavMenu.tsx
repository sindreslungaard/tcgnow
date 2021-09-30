import {
    ChatIcon,
    HeartIcon,
    HomeIcon,
    MenuIcon,
    PlusCircleIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
    UserCircleIcon,
} from '@heroicons/react/solid';

const NavMenu = () => {
    return (
        <nav className="bg-blue-700 py-4 h-screen w-16 text-white flex flex-col items-center flex-none">
            <div className="flex-1 flex flex-col gap-8">
                <HomeIcon className="h-7 w-7 cursor-pointer" />
                <ChatIcon className="h-7 w-7 cursor-pointer" />
                <HeartIcon className="h-7 w-7 cursor-pointer" />
                <PlusIcon className="h-7 w-7 cursor-pointer" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8"></div>

            <div className="flex-none flex flex-col gap-8 items-center">
                <QuestionMarkCircleIcon className="h-6 w-6 cursor-pointer" />
                <UserCircleIcon className="h-7 w-7 cursor-pointer" />
            </div>
        </nav>
    );
};

export default NavMenu;
