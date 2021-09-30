import { SearchIcon } from '@heroicons/react/solid';

const SearchHeader = () => {
    return (
        <header className="flex gap-2 border-b items-center pb-3">
            <SearchIcon className="h-6 w-6 text-gray-700" />
            <input
                className="flex-1 py-2 m-0 outline-none"
                type="text"
                placeholder="Search for any card.."
            />
            <div className="flex-none">temp text</div>
        </header>
    );
};

export default SearchHeader;
