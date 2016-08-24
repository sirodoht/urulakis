const Promise = require('bluebird');
const uid = require('uid-safe');
const redis = require('redis');
const config = require('config');

Promise.promisifyAll(redis.RedisClient.prototype);

const indexCtrl = module.exports = {};

indexCtrl.getIndex = function (req, res) {
  res.render('index');
};

indexCtrl.create = function (req, res) {

  const client = redis.createClient();
  client.select(1);

  client.on('error', err => {
    console.log('Error on redis:', err);
  });

  return uid(3)
    .then(id => {
      this.id = id;
      return client.setAsync(id, req.body.url);
    })
    .then(() => {
      res.redirect('/r/' + this.id);
    })
    .catch(err => console.log('indexCtrl.create() :: Error on new redis create:', err));
};

indexCtrl.getResult = function (req, res) {
  const url = config.host + '/' + req.params.id;
  res.render('result', { url });
};

indexCtrl.redirectToResult = function (req, res) {

  const client = redis.createClient();
  client.select(1);

  client.on('error', err => {
    console.log('Error on redis:', err);
  });

  return client.getAsync(req.params.id)
    .then((value) => {
      res.redirect(301, value);
    });

};
