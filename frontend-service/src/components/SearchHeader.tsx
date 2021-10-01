import { SearchIcon } from '@heroicons/react/solid';
import GridListView from './GridListView';

const SearchHeader = () => {
    return (
        <header className="flex gap-2 border-b items-center mx-4 my-3 pb-3">
            <SearchIcon className="h-6 w-6 text-gray-700" />
            <input
                className="flex-1 bg-gray-50 py-1 m-0 outline-none"
                type="text"
                placeholder="Search for any card.."
            />
            <GridListView />
        </header>
    );
};

export default SearchHeader;
