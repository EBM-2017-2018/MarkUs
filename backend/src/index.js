const fetch = require('node-fetch');
const User = require('./api/users/userModel');

const path = require('path');

const express = require('express');
const serveStatic = require('serve-static');
const config = require('./config');
const bodyParser = require('body-parser');

const app = express();
const server = require('http')
  .Server(app);

fetch('https://linkapp.ebm.nymous.io/api/promos/listpromosof/student', {
  headers: {
    Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJyb2xlIjoiYWRtaW5pc3RyYXRldXIiLCJub20iOiJyb290IiwicHJlbm9tIjoicm9vdCIsImVtYWlsIjoicm9vdEByb290LmZyIiwiaWF0IjoxNTIxNzI0MzUwfQ.jw6uYIOEhtBXekYXHQNjG6Prdi21_Z5oEacGnQ-rsIU',
    'Content-Type': 'application/json',
  },
})
  .then(res => res.json())
  .then(res => console.log(res));

app.use(require('ebm-auth')
  .initialize({
    provider: 'https://linkapp.ebm.nymous.io/',
    userFactory: userData => User.findOne({ linkappId: 'userData._id' })
      .then(user => Object.assign({}, userData, user)),
  }));

app.use(bodyParser.json());

app.use('/api', require('ebm-auth')
  .requireAuth({
    provider: 'https://linkapp.ebm.nymous.io/',
  }), require('./api'));

app.use(serveStatic('./public'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(config.app.port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening on port ${config.app.port}`);
  }
});
