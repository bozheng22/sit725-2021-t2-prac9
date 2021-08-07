require("dotenv").config();
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
let projectCollection;

// DB connection
const uri =
  "mongodb+srv://sit725:jmdAX4kZxEv9vmZx@sit725-2021-t2-week4.9iugr.mongodb.net/sit725-2021-t2-week4?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const createCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("Mongodb connected");
    } else {
      console.log("DB error: ", err);
      process.exit(1);
    }
  });
};

// const cardList = [
//   {
//     title: "Kitten 2",
//     image: "images/kitten-2.jpg",
//     link: "About Kitten 2",
//     desciption: "Demo desciption about kitten 2",
//   },
//   {
//     title: "Kitten 3",
//     image: "images/kitten-3.jpg",
//     link: "About Kitten 3",
//     desciption: "Demo desciption about kitten 3",
//   },
// ];

const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

app.get("/api/projects", (req, res) => {
  getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "success", data: result });
    }
  });
  //   res.json({ statusCode: 200, message: "success", data: cardList });
});

app.post("/api/projects", (req, res) => {
  console.log("New project added", req.body);
  var newProject = req.body;
  //   cardList.push(newProject);
  insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Project added", data: result });
    }
  });
  //   res.json({
  //     statusCode: 200,
  //     message: "Card added successfully",
  //     data: newProject,
  //  });
});

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
  createCollection("pets");
});
