import { SearchIcon } from '@heroicons/react/solid';
import FilterMenu from '../components/FilterMenu';
import SideMenu from '../components/NavMenu';
import SearchHeader from '../components/SearchHeader';

const IndexPage = () => {
    return (
        <div className="flex">
            <SideMenu />
            <FilterMenu />
            <main className="flex-1 p-4">
                <SearchHeader />
            </main>
        </div>
    );
};

export default IndexPage;
