export  const renderProducts = (fragment) => {
    const productTag = document.querySelector(".products");
    
    productTag.innerHTML = ""

    productTag.append(fragment);
 }