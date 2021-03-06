var assert = require('assert');
/*
db - database
document - document to be inserted
collection - which collection of database to be inserted
callback - Return the result of the operation
*/
exports.insertDocument = function(db, document, collection, callback){
    var coll = db.collection(collection);

    //Insert some documents
    coll.insert(document, function(err, result){
        assert.equal(err, null);
        console.log("Inserted " + result.result.n + " documents into the document collection " + collection);
        callback(result);
    })
};
exports.findDocuments = function(db,collection,callback){
    var coll = db.collection(collection);
    coll.find({}).toArray(function(err,docs){
        assert.equal(err,null);
        callback(docs);
    })
};

exports.removeDocument = function(db, document,collection,callback){
    var coll = db.collection(collection);

    coll.deleteOne(document,function(err,result){
        assert.equal(err,null);
        console.log("Remved the document " + document);
    });
};

exports.updateDocument = function(db,document,update,collection,callback){
    var coll = db.collection(collection);
    coll.updateOne(document,{$set:update},null,function(err,result){
        assert.equal(err,null);
        console.log("Updated the document with " + update);
        callback(result);
    })
}