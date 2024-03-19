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

//increment counterPost  for each request post
app.use(morgan('tiny', {
  skip: (req, res) => req.method !== 'POST',
  stream: {
    write: () => {
      postCounterInstance.increment();
    }
  }
}))

//log each request
app.use(morgan('common', {
  stream: accessLogStream
}))

app.get('/counter', (req, res) => {
  res.set('Version', '1.0.x');
  res.json({ count: postCounterInstance.value });
});


app.listen(process.env.PORT || 3000);