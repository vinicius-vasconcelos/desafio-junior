const openFile = require('./openFile');

const fileName = 'sales';
const extensionName = '.csv'

openFile.open(fileName, extensionName)
  .then((success) => {
    console.log(success);
  })
  .catch((failure) => console.log(failure))