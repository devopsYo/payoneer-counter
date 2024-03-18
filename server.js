const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream') 
const postCounterInstance = require('./post-counter.js');

const app = express();
const logFileName = 'access.log';

const accessLogStream = rfs.createStream(logFileName, {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
})

app.use(morgan('tiny', {
  skip: (req, res) => req.method !== 'POST',
  stream: {
    write: () => {
      postCounterInstance.increment();
    }
  }
}))

app.use(morgan('common', {
  stream: accessLogStream
}))

app.get('/counter', (req, res) => {
  res.json({ count: postCounterInstance.value });
});


app.listen(3000);