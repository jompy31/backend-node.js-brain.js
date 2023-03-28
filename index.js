const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb+srv://Angelica:Hola123@cluster0.hup56ap.mongodb.net/?retryWrites=true&w=majority';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
