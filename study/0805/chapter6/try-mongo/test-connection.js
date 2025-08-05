const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://iyongjun089:1234@cluster0.yzq4axu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());