const os = require('os');
const { writeFile } = require('fs');

const { sentence } = require('./practice2');

const userName = os.userInfo().username;

writeFile(
  './content/practice.txt',
  `${sentence} ${userName}`,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('done with this task');
  },
);
