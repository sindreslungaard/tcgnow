import FilterMenu from '../components/FilterMenu';
import SideMenu from '../components/NavMenu';

const IndexPage = () => {
    return (
        <div className="flex">
            <SideMenu />
            <FilterMenu />
            <div className="flex-1">Main</div>
        </div>
    );
};

export default IndexPage;
