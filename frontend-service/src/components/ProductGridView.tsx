import { HeartIcon } from '@heroicons/react/solid';

const ProductGridView = () => {
    let data = [];
    for (let i = 0; i < 12; i++) {
        data.push({
            id: `${i}`,
            title: 'Ursaring',
            set: 'Neo Discovery',
            condition: 'Near Mint',
            price: 500,
            //thumbnail: 'https://via.placeholder.com/200x300',
            thumbnail:
                'https://tcgnow.s3.eu-central-003.backblazeb2.com/c91c7d43-fb13-4f5a-b0bb-ba00127d1a55.jpg',
        });
    }

    return (
        <div className="flex flex-wrap m-2">
            {data.map((product, index) => {
                return (
                    <article
                        key={product.id}
                        className="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex"
                    >
                        <div className="bg-white rounded-sm flex-1 h-80 m-2 shadow cursor-pointer">
                            <div className="p-2 h-full flex">
                                <div className="flex items-center bg-gray-700 h-full">
                                    <img
                                        className="max-h-full max-w-full"
                                        src={product.thumbnail}
                                        alt="thumbnail"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="px-4 relative h-full">
                                        <h1 className="font-semibold">
                                            {product.title}
                                        </h1>
                                        <h1 className="italic mt-1 text-sm text-gray-600">
                                            {product.set}
                                        </h1>

                                        <div className="my-4"></div>

                                        <div className="rounded-full text-xs bg-green-700 inline-block px-3 py-1 text-white font-semibold">
                                            {product.condition}
                                        </div>

                                        <h1 className="font-semibold mt-5">
                                            {product.price} kr
                                        </h1>

                                        <div className="mt-5 flex items-center mt-3 gap-1 hover:text-red-500 cursor-pointer">
                                            <HeartIcon className="block h-4 w-4" />
                                            <span className="block text-xs">
                                                Add to favourite
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default ProductGridView;
