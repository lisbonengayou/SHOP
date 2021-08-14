import {createProductItem} from "./create-product-item.js";

export const makeFragmentWithData = (products, multiplicator, selectedCurrency) => {
    const fragment = new DocumentFragment();

    products.forEach (product => {
        const prodli = createProductItem(product, multiplicator, selectedCurrency);
        fragment.append(prodli);
    });

    return fragment;
 }
