var connection = require('../connection')
  , connectionClose = require('../connection.close')
  , logPrefix = 'node-fullstack-rethinkdb/test/http.test'
  ;
module.exports = {
  assign: assign
};
function assign(self) {
  console.log(logPrefix+'|httpTapeSetup');
  var end2 = self.end;
  Object.assign(self, {
    rethinkConnection: function(cb) {
      return connection(self, cb);
    },
    end: function() {
      connectionClose(self);
      end2();
    }
  });
}