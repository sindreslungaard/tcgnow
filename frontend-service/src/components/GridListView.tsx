import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { ProductViewState } from '../store';

const GridListView = () => {
    const [productView, setProductView] = useRecoilState(ProductViewState);

    //let [active, setActive] = useState<'grid' | 'list'>('grid');

    return (
        <div className="bg-blue-50 rounded-full p-1 flex">
            <div
                onClick={() => setProductView('grid')}
                className={
                    'flex-1 flex items-center rounded-full py-1 px-3 ' +
                    (productView == 'grid'
                        ? 'bg-white text-blue-700 cursor-default'
                        : 'cursor-pointer text-gray-500')
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-current w-4 h-4 mr-2"
                >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span className="text-sm">Grid</span>
            </div>
            <div
                onClick={() => setProductView('list')}
                className={
                    'flex-1 flex items-center rounded-full py-1 px-3 ' +
                    (productView == 'list'
                        ? 'bg-white text-blue-700 cursor-default'
                        : 'cursor-pointer text-gray-500')
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-current w-4 h-4 mr-2"
                >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
                <span className="text-sm">List</span>
            </div>
        </div>
    );
};

export default GridListView;
