/// DATABASE Connections
//database connection
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://sit725:jmdAX4kZxEv9vmZx@sit725-2021-t2-week4.9iugr.mongodb.net/sit725-2021-t2-week4?retryWrites=true&w=majority";
let mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let projectsCollection;

mongoClient.connect((err, db) => {
  // projectsCollection = mongoClient.db("sit725-2021-t2-week4").collection("projects");
  if (!err) {
    console.log("Database Connected");
  } else {
    console.log("[error]", err);
  }
});

exports.mongoClient = mongoClient;
