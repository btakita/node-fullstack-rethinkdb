var nodeEnv = require('./node.env')
  , intRandom = require('./int/random')
  ;
module.exports = {
  host: nodeEnv.rethinkDbHost,
  port: selectPort(nodeEnv.rethinkDbPort),
  authKey: nodeEnv.rethinkDbAuthKey,
  db: nodeEnv.rethinkDbDb
};
function selectPort(str) {
  var values = str.toString().split(',');
  return values[intRandom(0, values.length)];
}
