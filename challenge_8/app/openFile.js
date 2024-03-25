const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const extensionDictionary = {
  '.csv': readCSV,
}

/**
 * Lê um arquivo ".csv" e retorna os dados como um array de objetos.
 * @param {string} fileName - O nome do arquivo CSV a ser lido.
 * @returns {Promise<Array<Object>>} Uma Promise que resolve com um array de objetos representando os dados do arquivo CSV.
 * @throws {Error} Se houver algum erro durante a leitura do arquivo.
 */
async function readCSV(fileName) {
  const filePath = path.join(__dirname, '..', '..', fileName);
  
  return new Promise((resolve, reject) => {
    const results = [];
    const readStream = fs.createReadStream(filePath);

    readStream
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject('error'));
    
    readStream.on('error', (error) => reject(`Erro de leitura de aquivo - ${error}`));
  }); 
}

/**
 * Abre um arquivo com base em seu nome e extensão.
 * @param {string} fileName - O nome do arquivo a ser aberto (sem a extensão).
 * @param {string} fileExtension - A extensão do arquivo a ser aberto, exemplo: ".csv".
 * @returns {Promise<Array<Object>>} Uma Promise que resolve com um array de objetos representando os dados do arquivo.
 * @throws {Error} Se houver algum erro durante a abertura ou leitura do arquivo.
 */
async function open(fileName, fileExtension) {
  try {
    return await extensionDictionary[fileExtension](`${fileName}${fileExtension}`);
  }
  catch (error) { throw error; }
}

module.exports = { open }
