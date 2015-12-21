var processEnv = process.env;
var env = {
  rethinkDbAuthKey: processEnv.RETHINKDB_AUTH_KEY || '',
  rethinkDbHost: processEnv.RETHINKDB_HOST || 'localhost',
  rethinkDbPort: processEnv.RETHINKDB_PORT || 28015,
  rethinkDbDb: processEnv.RETHINKDB_DB
};
if (!env.rethinkDbDb) {
  throw 'Please set RETHINKDB_DB environment variable';
}
module.exports = env;
