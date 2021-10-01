import { SearchIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import FilterMenu from '../components/FilterMenu';
import SideMenu from '../components/NavMenu';
import ProductGridView from '../components/ProductGridView';
import ProductListView from '../components/ProductListView';
import SearchHeader from '../components/SearchHeader';
import { ProductViewState } from '../store';

const ProductView = () => {
    const [productView] = useRecoilState(ProductViewState);

    if (productView == 'grid') {
        return <ProductGridView />;
    } else {
        return <ProductListView />;
    }
};

const IndexPage = () => {
    return (
        <div className="flex">
            <SideMenu />
            <FilterMenu />
            <main className="flex-1 overflow-y-scroll h-screen bg-gray-50">
                <SearchHeader />
                <ProductView />
            </main>
        </div>
    );
};

export default IndexPage;
