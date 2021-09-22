export const getFormatPrice = (price) => price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

export const getShortTitle = (title, num) => (title.length > num ? `${title.substring(0, num)}...` : title);

export const getTotalPriceQty = (qty, priceProduct) => `${parseFloat(priceProduct) * qty}`;
