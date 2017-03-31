var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
// Connecting to Database
// As the mongodb is running on the same machine, following url works.
var url = 'mongodb://localhost:27017/conFusion';

// Establish the connection
// The callback function will return the reference to the databse which we can make use of further communication with Mongo Database server.
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log("Connected correctly to server");


    var collection = db.collection("dishes");

    // insert a document into collection
    collection.insertOne({ name: "Uthapizza", description: "test" }, function (err, result) {
        assert.equal(err, null);
        console.log("After Insert:");
        // ops - data inserted
        console.log(result.ops);

        // Find the collections and retirieve
        // find(<filter value>)
        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found: ");
            console.log(docs);
            // restore the database back to the pristine state.
            db.dropCollection("dishes", function (err, result) {
                assert.equal(err, null);
                db.close();
            })
        });
    });
});