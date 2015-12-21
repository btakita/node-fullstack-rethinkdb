var r = require('rethinkdb')
  , config = require('./config')
  ;
module.exports = function connection(req, cb) {
  if (req._rdbConn) {
    cb(null, r, req._rdbConn);
  } else {
    r.connect(config, function(error, conn) {
      if (error) {
        cb(error.message);
      } else {
        req._rdbConn = conn;
        cb(null, r, conn);
      }
    });
  }
};
