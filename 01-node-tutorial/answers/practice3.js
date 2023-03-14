fs = require('fs').promises;

const makeFile = async () => {
  try {
    for (let i = 1; i <= 10; i++) {
      await fs.writeFile('./content/practice2.txt', `This is file ${i}\n`, {
        flag: 'a',
      });
    }
  } catch (err) {
    console.log(err);
  }
};
makeFile();
