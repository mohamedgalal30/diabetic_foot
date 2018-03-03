var MongoClient = require('mongodb').MongoClient;
var ObjectID = new require('mongodb').ObjectID;


window.getPatients = function getPatients(str, cb) {
  // alert("dddddddddddddd")
  var criteria = {};
  if (typeof str == "function") {
    cb = str;
  } else {
    criteria = { "info.name": new RegExp(str) }
  }
  var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('patient');
    // Find some documents
    collection.find(criteria).limit(50).toArray(function (err, docs) {
      docs = docs.map(function (doc) {
        doc.info.id = doc._id.toString()
        return doc
      })
      callback(docs);
    });

  }
  // Connection URL
  var mongoUrl = 'mongodb://mongo-server:27017/diabetic_foot';
  // Use connect method to connect to the Server
  MongoClient.connect(mongoUrl, function (err, db) {
    console.log("Connected correctly to server");

    findDocuments(db, function (patients) {
      db.close();
      // alert(patients)
      cb(patients)
    });
  });
}






function insertToMongo(doc, cb) {
  var insertDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('patient');
    // Insert some documents
    collection.insert(doc, function (err, result) {
      callback(result);
    });
  }

  // Connection URL
  var mongoUrl = 'mongodb://localhost:27017/diabetic_foot';
  // Use connect method to connect to the Server
  MongoClient.connect(mongoUrl, function (err, db) {
    console.log("Connected correctly to server");

    insertDocuments(db, function () {
      db.close();
      cb(true)
    });
  });
}

function updateIntoMongo(id, doc, cb) {

  var updateDocument = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('patient');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ "_id": ObjectID(id) }, doc, function (err, result) {
      callback(result);
    });
  }

  // Connection URL
  var mongoUrl = 'mongodb://localhost:27017/diabetic_foot';
  // Use connect method to connect to the Server
  MongoClient.connect(mongoUrl, function (err, db) {
    console.log("Connected correctly to server");

    updateDocument(db, function () {
      db.close();
      cb(true)
    });
  });
}


window.getPatient = function getPatient(id, cb) {
  var findDocument = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('patient');
    // Find some documents
    collection.findOne({ "_id": ObjectID(id) }, function (err, item) {
      item.info.id = item._id.toString()
      callback(item);
    });

  }
  // Connection URL
  var mongoUrl = 'mongodb://localhost:27017/diabetic_foot';
  // Use connect method to connect to the Server
  MongoClient.connect(mongoUrl, function (err, db) {
    console.log("Connected correctly to server");

    findDocument(db, function (patient) {
      db.close();
      cb(patient)
    });
  });
}
window.createPatient = function (patient, cb) {
  // alert("ddddddddd")
  insertToMongo(patient, cb)
}
window.updatePatient = function (id, patient, cb) {
  updateIntoMongo(id, patient, cb)
}