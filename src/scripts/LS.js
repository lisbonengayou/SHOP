const LS = localStorage;

const stringify = data => JSON.stringify(data);
const parse = data => JSON.parse(data);

export const initLS = () => {
    if (!LS.getItem("cart")) {
        LS.setItem("cart", stringify([]))
    }
}

export const addToCart = product => {
  const parsedCard = parse(LS.getItem("cart"));

  if (!parsedCard.find(item => item._id === product._id)) {
      LS.setItem("cart", stringify([
     ...parsedCard, 
     product]))
  }
}

export const getCorrectCartSizeFromLS = () => {
    const parsedCard = parse(LS.getItem("cart"));
  
    return parsedCard?.length ?? 0;
  }