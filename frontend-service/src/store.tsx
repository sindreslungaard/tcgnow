import { atom } from 'recoil';

const ProductViewState = atom({
    key: 'productView',
    default: 'grid',
});

export { ProductViewState };
