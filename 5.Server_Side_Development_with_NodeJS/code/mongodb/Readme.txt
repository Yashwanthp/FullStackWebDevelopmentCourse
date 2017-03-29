Download and install mongodb
Add mongodb path to the environment variables path
navigate to the mongodb installed path - C:\Program Files\MongoDB\Server\3.2\bin
type "mongo" to start the server
navigate to the location where you want to create your database, the path should contain data folder.
Command - "mongod --dbpath=data"

REPL:
try following commands

	1. "db"
Prints out the database name
	2. Creating a database named "conFusion"
"use conFusion"
	3. "db help"
	4. Creating a collection
"db.dishes.insert({name:"",description:"Test"})"
	5. "db.dishes.find()"
Notice the _id property
	6. "db.dishes.find().pretty()"
	7. "var id = new ObjectId()"
	8. "id"
	9. "id.Timestamp()"

