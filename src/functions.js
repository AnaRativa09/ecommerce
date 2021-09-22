const getFormatPrice = (price) => price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

export default getFormatPrice;
