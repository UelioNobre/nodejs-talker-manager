const fs = require('fs').promises;
const path = require('path');

const jsonFile = path.resolve(__dirname, '../talker.json');

const readTalkers = async () => {
  try {
    const data = await fs.readFile(jsonFile);
    const json = JSON.parse(data);
    return json;
  } catch (error) {
    console.log('ERROR :: readTalkers', error.message);
  }
};

const writeTalkers = async (talker) => {
  try {
    const talkers = await readTalkers();
    const id = talkers.length;

    talkers.push({...talker, id});
    const data = JSON.stringify([...talkers, talker]);
    await fs.writeFile(jsonFile, data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  readTalkers,
  writeTalkers
};
