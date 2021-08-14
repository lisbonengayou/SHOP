import { getProductsBySearchQuery } from "./scripts/get-products-by-search-query.js";
import { renderProducts } from "./scripts/render-products.js"
import { makeFragmentWithData } from "./scripts/make-fragment.js"
import { SORT } from "../constants.js";
import { initLS } from "./scripts/LS.js";
import { setCorrectCartSize } from "./scripts/set-correct-cart-size.js";
import { getCurrencyExchangeData } from "./api/api.js";
import { getMultiplicator } from "./scripts/get-multiplicator.js";

//const productTag = document.querySelector(".products");

const form = document.querySelector(".form");
const productSearch = document.querySelector(".product-search");
const asc = document.querySelector(".asc");
const dsc = document.querySelector(".dsc");
const select = document.querySelector(".select");

(async() => {
    try {
        initLS();
        setCorrectCartSize ();
        const currency = await getCurrencyExchangeData();
        let selectedCurrency = select.value;
        
        let multiplicator = getMultiplicator(select.value, currency)
        
        const data = await fetch("./mocked-products.json");
        const initialProducts = await data.json();
        let products = initialProducts; 
        
        const fragment = makeFragmentWithData(products, multiplicator, selectedCurrency);
        
        renderProducts(fragment)

        form.addEventListener("submit", (e) => {
            e.preventDefault();

          const result = getProductsBySearchQuery({
                query: productSearch.value,
                products: initialProducts,
            });

            products = result

            const fragment = makeFragmentWithData(result, multiplicator, selectedCurrency);
        
             renderProducts(fragment)

        });

        asc.addEventListener("click", () => {
            const result = sortBy({
                direction: SORT.ASC,
                products,
            });
             
            const fragment = makeFragmentWithData(result, multiplicator,selectedCurrency);
        
             renderProducts(fragment)
        });

        dsc.addEventListener("click", () => {
            const result = sortBy({
                direction: SORT.DSC,
                products,
            });
             
            const fragment = makeFragmentWithData(result, multiplicator, selectedCurrency);
        
             renderProducts(fragment)
        })
         
        select.addEventListener("change", (e) => {
            console.log("e", e.target.value)

            multiplicator = getMultiplicator(e.target.value, currency)
            selectedCurrency = e.target.value;
            const fragment = makeFragmentWithData(products, multiplicator, e.target.value);
        
             renderProducts(fragment)
        });

    } catch (error) {
        console.error(error)
    }

})();

const sortBy = ({
    direction,
    products,
}) => products.sort((a,b) => direction === SORT.DSC 
? Number(b.price) - Number(a.price)
: Number(a.price) - Number(b.price)
);











 
 

 
