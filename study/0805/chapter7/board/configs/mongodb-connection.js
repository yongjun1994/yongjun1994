require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;

// module.exports = function (callback) {
//   return MongoClient.connect(uri, callback);
// }

module.exports = async function () {
  const client = await MongoClient.connect(uri);
  return client;
};