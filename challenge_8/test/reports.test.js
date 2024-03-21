const assert = require('assert');
const { getProductWithMaxRevenueByCountry, getAggregateSales } = require('../app/reports');

describe('Estatísticas de Vendas', () => {
  describe('Função getAggregateSales', () => {
    it('Deve retornar as vendas agregadas corretamente', () => {
      const dataArray = [
        { 'Item Type': 'Electronics', 'Units Sold': '100', 'Total Revenue': '1000', 'Total Cost': '500', 'Total Profit': '500' },
        { 'Item Type': 'Electronics', 'Units Sold': '200', 'Total Revenue': '2000', 'Total Cost': '1000', 'Total Profit': '1000' },
        { 'Item Type': 'Books', 'Units Sold': '50', 'Total Revenue': '500', 'Total Cost': '250', 'Total Profit': '250' }
      ];
      const keyArray = ['Item Type'];

      const expectedResult = {
        'Electronics': { totalUnits: 300, totalRevenue: 3000, totalCost: 1500, totalProfit: 1500 },
        'Books': { totalUnits: 50, totalRevenue: 500, totalCost: 250, totalProfit: 250 }
      };

      assert.deepStrictEqual(getAggregateSales(dataArray, keyArray), expectedResult);
    });

    it('Deve retornar as vendas agregadas corretamente com duas chaves', () => {
      const dataArray = [
        { 'Item Type': 'Electronics', 'Region': 'North America', 'Units Sold': '100', 'Total Revenue': '1000', 'Total Cost': '500', 'Total Profit': '500' },
        { 'Item Type': 'Electronics', 'Region': 'North America', 'Units Sold': '200', 'Total Revenue': '2000', 'Total Cost': '1000', 'Total Profit': '1000' },
        { 'Item Type': 'Books', 'Region': 'Europe', 'Units Sold': '50', 'Total Revenue': '500', 'Total Cost': '250', 'Total Profit': '250' }
      ];
      const keyArray = ['Item Type', 'Region'];
  
      const expectedResult = {
        'Electronics-North America': { totalUnits: 300, totalRevenue: 3000, totalCost: 1500, totalProfit: 1500 },
        'Books-Europe': { totalUnits: 50, totalRevenue: 500, totalCost: 250, totalProfit: 250 }
      };
  
      assert.deepStrictEqual(getAggregateSales(dataArray, keyArray), expectedResult);
    });  

    it('Deve retornar um objeto vazio quando o array de dados de entrada é vazio', () => {
      const dataArray = [];
      const keyArray = ['Item Type', 'Region'];
  
      const expectedResult = {};
  
      assert.deepStrictEqual(getAggregateSales(dataArray, keyArray), expectedResult);
    });

    it('Deve lidar corretamente quando o array de chaves é fornecido vazio', () => {
      const keyArray = [];
      const dataArray = [
        { 'Item Type': 'Electronics', 'Region': 'North America', 'Units Sold': '100', 'Total Revenue': '1000', 'Total Cost': '500', 'Total Profit': '500' },
        { 'Item Type': 'Electronics', 'Region': 'North America', 'Units Sold': '200', 'Total Revenue': '2000', 'Total Cost': '1000', 'Total Profit': '1000' },
        { 'Item Type': 'Books', 'Region': 'Europe', 'Units Sold': '50', 'Total Revenue': '500', 'Total Cost': '250', 'Total Profit': '250' }
      ];
  
      const expectedResult = 'Chaves obrigatórias'
  
      assert.deepStrictEqual(getAggregateSales(dataArray, keyArray), expectedResult);
    });

    it('Deve lidar corretamente quando nenhum array de chaves é fornecido', () => {
      const dataArray = [
        { 'Item Type': 'Electronics', 'Region': 'North America', 'Units Sold': '100', 'Total Revenue': '1000', 'Total Cost': '500', 'Total Profit': '500' },
        { 'Item Type': 'Electronics', 'Region': 'North America', 'Units Sold': '200', 'Total Revenue': '2000', 'Total Cost': '1000', 'Total Profit': '1000' },
        { 'Item Type': 'Books', 'Region': 'Europe', 'Units Sold': '50', 'Total Revenue': '500', 'Total Cost': '250', 'Total Profit': '250' }
      ];
  
      const expectedResult = 'Chaves obrigatórias'
  
      assert.deepStrictEqual(getAggregateSales(dataArray), expectedResult);
    });
  });

});