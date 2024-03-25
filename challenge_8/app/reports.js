
/**
 * Retorna o tipo de produto com a maior receita para cada país.
 * @param {Array<Object>} dataArray - Um array de objetos contendo os dados das vendas.
 * @returns {Object} Um objeto onde as chaves são os países e os valores são os tipos de produto com a maior receita para cada país.
 */
function getProductWithMaxRevenueByCountry(dataArray) {
  return dataArray.reduce((acc, item) => {
    const country = item['Country'];
    const itemType = item['Item Type'];
    const totalRevenue = parseFloat(item['Total Revenue']);

    if (!acc[country] || totalRevenue > acc[country].totalRevenue) {
      acc[country] = {
        itemType,
        totalRevenue
      };
    }

    return acc;
  }, {});
}


/**
 * Retorna as vendas agregadas por uma ou mais chaves especificadas.
 * @param {Array<Object>} dataArray - Um array de objetos contendo os dados das vendas.
 * @param {Array<string>} keyArray - Um array de strings contendo as chaves a serem usadas para agrupar os dados das vendas.
 * @returns {Object | string} Um objeto onde as chaves são as combinações das chaves especificadas e os valores são os dados agregados das vendas | string de erro.
 */
function getAggregateSales(dataArray, keyArray) {
	if(!keyArray || !keyArray.length) return 'Chaves obrigatórias';

	return dataArray.reduce((acc, item) => {
    const key = keyArray.map(key => item[key]).join('-');
    const totalUnits = parseInt(item['Units Sold']);
    const totalRevenue = parseFloat(item['Total Revenue']);
    const totalCost = parseFloat(item['Total Cost']);
    const totalProfit = parseFloat(item['Total Profit']);
    if (!acc[key]) {
      acc[key] = {
        totalUnits,
        totalRevenue,
        totalCost,
        totalProfit,
      };
    } else {
      acc[key].totalUnits += totalUnits;
      acc[key].totalRevenue += totalRevenue;
      acc[key].totalCost += totalCost;
      acc[key].totalProfit += totalProfit;
    }

    return acc;
  }, {});
}

module.exports = {
	getAggregateSales,
	getProductWithMaxRevenueByCountry,
}
