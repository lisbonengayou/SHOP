import { addToCart } from "./LS.js";

export const createProductItem = ({
    _id,
    imag,
    ProductName,
    author,
    tags,
    AvailableQty,
    price,
}, multiplicator,selectedCurrency) => {

    const li = document.createElement("li")
    li.className = "product-item";

    const img = document.createElement("img")
    img.className = "product-img";
    img.src = imag;
    img.alt = `imag of ${ProductName}`;

    const div = document.createElement("div")
    div.className = "product-info";

    const h3Pn = document.createElement("h3")
    h3Pn.className = "product-name";
    h3Pn.innerHTML = ProductName;

    const h4Pa = document.createElement("h4")
    h4Pa.className = "product-author";
    h4Pa.innerHTML = `Author: ${author}` ;

    const ul = document.createElement("ul")
    ul.className = "tags-list"

    

    tags.forEach((tag) => {
        const tagli = document.createElement("li")
        tagli.className = "tag-item";
        tagli.innerHTML = `#${tag}` ;

        ul.append(tagli)
    })

    const divPq = document.createElement("div")
    divPq.className ="product-quantity";
    divPq.innerHTML = `Available Quantity: ${AvailableQty}`;

    const divCw = document.createElement("div")
    divCw.className = "control-wrapper"

    const h4Pq = document.createElement("h4")
    h4Pq.className ="product-price";
    h4Pq.innerHTML = `${(price/multiplicator).toFixed(2)} ${selectedCurrency}`;

    const btn = document.createElement("button")
    btn.type = "button"
    btn.className ="add-to-cart";
    btn.innerHTML = "add-to-cart";
    btn.addEventListener("click",() =>{
        addToCart({
            _id,
            imag,
            ProductName,
            author,
            tags,
            AvailableQty,
            price,
        })
    })



    li.append(img)
    li.append(div)

    div.append(h3Pn)
    div.append(h4Pa)
    div.append(ul)
    div.append(divPq)
    div.append(divCw)

    divCw.append(h4Pq)
    divCw.append(btn)

     return li;
}
 