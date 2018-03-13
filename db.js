var MongoClient = require('mongodb').MongoClient;
var ObjectID = new require('mongodb').ObjectID;
var mongoUrl = 'mongodb://localhost:27017/diabetic_foot';

function getPatientCollection(cb) {
	MongoClient.connect(mongoUrl, function (err, db) {
		if (err) console.log(err)
		console.log("Connected correctly to server");
		var collection = db.collection('patient');
		cb(collection)
		db.close();

	});
}

/*
window.getPatients = function getPatients(str, cb) {
	// console.log("dddddddddddddd")
	var criteria = {};
	if (typeof str == "function") {
		cb = str;
	} else {
		criteria = { "history.info.name": new RegExp(str) }
	}
	console.log(">>criteria>>", criteria)
	var findDocuments = function (db, callback) {
		// Get the documents collection
		var collection = db.collection('patient');
		// Find some documents
		collection.find(criteria).limit(50).toArray(function (err, docs) {
			docs = docs.map(function (doc) {
				doc.history.info.id = doc._id.toString()
				return doc
			})
			console.log("patients >>> ", docs)
			callback(docs);
		});

	}
	// Use connect method to connect to the Server
	MongoClient.connect(mongoUrl, function (err, db) {
		if (err) console.log(err)
		console.log("Connected correctly to server");

		findDocuments(db, function (patients) {
			db.close();
			console.log("pppppp", patients)
			cb(patients)
		});
	});
}
*/
window.getPatients = function getPatients(str, cb) {
	var criteria = {};
	if (typeof str == "function") {
		cb = str;
	} else {
		criteria = { "history.info.name": new RegExp(str) }
	}
	var findDocuments = function (collection) {
		// Find some documents
		collection.find(criteria).limit(50).toArray(function (err, docs) {
			if (err) console.log(err)
			docs = docs.map(function (doc) {
				doc.history.info.id = doc._id.toString()
				return doc
			})
			cb(docs);
		});

	}
	getPatientCollection(findDocuments)
}
/*
window.getPatient = function getPatient(id, cb) {
	var findDocument = function (db, callback) {
		// Get the documents collection
		var collection = db.collection('patient');
		// Find some documents
		collection.findOne({ "_id": ObjectID(id) }, function (err, item) {
			item.history.info.id = item._id.toString()
			callback(item);
		});

	}
	// Use connect method to connect to the Server
	MongoClient.connect(mongoUrl, function (err, db) {
		if (err) console.log(err)

		console.log("Connected correctly to server");

		findDocument(db, function (patient) {
			db.close();
			cb(patient)
		});
	});
} */

window.getPatient = function getPatient(id, cb) {
	var findDocument = function (collection) {
		// Find some document
		collection.findOne({ "_id": ObjectID(id) }, function (err, item) {
			item.history.info.id = item._id.toString()
			cb(item);
		});

	}
	getPatientCollection(findDocument)
}

window.createPatient = function insertToMongo(doc, cb) {
	var insertDocuments = function (collection) {
		// Insert some documents
		collection.insert(doc, function (err, result) {
			if (err) console.log(err)
			cb(result);
		});
	}
	getPatientCollection(insertDocuments)
}
/*
function insertToMongo(doc, cb) {
	var insertDocuments = function (db, callback) {
		// Get the documents collection
		var collection = db.collection('patient');
		// Insert some documents
		collection.insert(doc, function (err, result) {
			if (err) console.log(err)

			callback(result);
		});
	}

	// Use connect method to connect to the Server
	MongoClient.connect(mongoUrl, function (err, db) {
		if (err) console.log(err)

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
			if (err) console.log(err)

			callback(result);
		});
	}

	// Use connect method to connect to the Server
	MongoClient.connect(mongoUrl, function (err, db) {
		if (err) console.log(err)

		console.log("Connected correctly to server");

		updateDocument(db, function () {
			db.close();
			cb(true)
		});
	});
}*/

window.updatePatient = function updateIntoMongo(id, doc, cb) {

	var updateDocument = function (collection) {
		// Update document where a is 2, set b equal to 1
		collection.updateOne({ "_id": ObjectID(id) }, doc, function (err, result) {
			if (err) console.log(err)
			cb(result);
		});
	}

	getPatientCollection(updateDocument)
}

/*
window.createPatient = function (patient, cb) {
	// console.log("ddddddddd")
	insertToMongo(patient, cb)
}
window.updatePatient = function (id, patient, cb) {
	updateIntoMongo(id, patient, cb)
}
*/