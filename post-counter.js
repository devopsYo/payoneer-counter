const fs = require('fs');
const path = require('path');

class PostCounter {
  constructor(filePath) {
    this.filePath = filePath;
    this.load();
  }

  load() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      this.value = parseInt(data) || 0;
    } catch (err) {
      this.value = 0;
    }
  }

  save() {
    fs.writeFileSync(this.filePath, this.value.toString());
  }

  increment() {
    this.value++;
    this.save();
  }

  getCount() {
    return this.value;
  }

}

const logDirectory = path.join(__dirname, 'log');
const postCounterFilePath = path.join(logDirectory, 'post-counter.log');
const postCounterInstance = new PostCounter(postCounterFilePath);
module.exports = postCounterInstance;

