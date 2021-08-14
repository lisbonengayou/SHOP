import { getCorrectCartSizeFromLS } from "./LS.js";

export  const setCorrectCartSize = () => {
    const cartSize = document.querySelector(".cart-size");

    const size = getCorrectCartSizeFromLS();

    cartSize.innerHTML = size;
}
