require('rethinkdb');
module.exports = function connectionClose(req, res, next) {
  if (req && req._rdbConn) {
    req._rdbConn.close();
  }
  if (next) next();
};
