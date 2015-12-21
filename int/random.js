// http://blog.tompawlak.org/how-to-generate-random-values-nodejs-javascript
function intRandom (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
module.exports = intRandom;
