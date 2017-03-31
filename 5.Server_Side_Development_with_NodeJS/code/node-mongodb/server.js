var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var dboper = require('./operations');

// Connection URL
// Connecting to Database
// As the mongodb is running on the same machine, following url works.
var url = 'mongodb://localhost:27017/conFusion';

// Establish the connection
// The callback function will return the reference to the databse which we can make use of further communication with Mongo Database server.
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log("Connected correctly to server");



    dboper.insertDocument(db, { name: "Vadonut", description: "Test" }, "dishes", function (result) {
        // Printing the returned value
        console.log(result.ops);
        // Check to see if the insertion is successful
        dboper.findDocuments(db, "dishes", function (docs) {
            // logging return value
            console.log(docs);
            // update after we confirm that there is some document available to update
            dboper.updateDocument(db, { name: "Vadonut" }, { description: "Updated Test" }, "dishes", function (result) {
                // print the result 
                console.log(result.result);
                dboper.findDocuments(db, "dishes", function (docs) {
                    // Check if update is successful
                    console.log(docs);
                    db.dropCollection("dishes", function (result) {
                        console.log(result);
                        db.close();
                    })
                })
            })
        })
    });
});

/*
When the database is executed:
1. Open the connection to Database
2. Insert the collection
3. Update the collection
4. Delete the collection.
*/