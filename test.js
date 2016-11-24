const test = require('ava');
const getMeteorGlobal = require('./index.js');

global.Package = {
  mongo: { Mongo: true },
  underscore: { _: true },
  'cultofcoders:redis-oplog': { RedisOplog: true },
};

test('get globals', (t) => {
  t.is(getMeteorGlobal('mongo', 'Mongo'), true);
  t.is(getMeteorGlobal('underscore', '_'), true);
  t.is(getMeteorGlobal('cultofcoders:redis-oplog', 'RedisOplog'), true);
  t.is(getMeteorGlobal('tracker', 'Tracker'), null);
});
