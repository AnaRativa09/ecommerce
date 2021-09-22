export const getFormatPrice = (price) => price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

export const getShortTitle = (title) => (title.length > 15 ? `${title.substring(0, 15)}...` : title);

export const getTotalPriceQty = (qty, priceProduct) => `${parseFloat(priceProduct) * qty}`;
