const openFile = require('./openFile');
const reports = require('./reports');

const fileName = 'sales';
const extensionName = '.csv'

openFile.open(fileName, extensionName)
  .then((successData) => {
    let report;

    report = reports.getAggregateSales(successData, ['Item Type']);
    console.log(report);
    console.log('\n|-------------------------|\n');
    
    report = reports.getAggregateSales(successData, ['Item Type', 'Region']);
    console.log(report);
    console.log('\n|-------------------------|\n');

    report = reports.getProductWithMaxRevenueByCountry(successData);
    console.log(report);
    console.log('\n|-------------------------|\n');

  })
  .catch((failure) => console.log(failure))