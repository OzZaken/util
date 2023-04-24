const Memcached = require('memcached');
const memcached = new Memcached('localhost:11211');

const CACHE_TTL = 3600; // 1 hour

function set(key, value, callback) {
  memcached.set(key, value, CACHE_TTL, function(err) {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function get(key, callback) {
  memcached.get(key, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

function add(key, value, callback) {
  memcached.add(key, value, CACHE_TTL, function(err) {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function replace(key, value, callback) {
  memcached.replace(key, value, CACHE_TTL, function(err) {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

function del(key, callback) {
  memcached.del(key, function(err) {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
}

module.exports = {
  set,
  get,
  add,
  replace,
  del
};
