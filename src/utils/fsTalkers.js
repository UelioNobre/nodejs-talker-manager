const fs = require('fs').promises;
const path = require('path');

const jsonFile = path.resolve(__dirname, '../talker.json');

const readTalkers = async () => {
  try {
    const data = await fs.readFile(jsonFile);
    const json = JSON.parse(data);
    return json;
  } catch (error) {
    console.log('ERROR ', error.message)
  }
}

module.exports = {
  readTalkers
}
