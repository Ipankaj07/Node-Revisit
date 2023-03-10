MONGO CRUD
==========

Insert / Create
---------------

Create or insert operations add new documents to a collection. If the collection does not currently exist, insert operations will create the collection.

```
db.collection.insertOne({name: "John"})

```

Similarly if you have multiple records to insert, use `insertMany`

```
db.collection.insertMany([{name: "John"}, {name: "Jack"}])

```

Read/Retrieve
-------------

The read operation is very flexible. because mongo is read first database, it gives you multiple ways to find, get, filter, sort, paginate the data before fetching it. so that you don't have to fetch all the data from db and then filter in your language before sending to client

```
db.collection.find()

```

This will get each and every document from the database

you can limit the size of array returned by `limit` function.

```
db.collection.find().limit(10)

```

this will return 1 to 10 documents (first 10). if you want next 10, (11 to 20), use `skip`

```
db.collection
    .find()     // finds all documents
    .skip(10)   // Skips first 10
    .limit(10)  // returns 10 document after that. so 11 to 20

```

If you want to selectively find 1 document:

```
db.collection.find({name: "John"})

```

This will get only documents whose name is john

If you want AND operation

```
db.collection.find({name: "john", age: 33});

```

This will fetch all documents whose name is John AND age is 33. both conditions need to be passed

if you want OR operation

```
db.collection.find({$or: [{name:"John"}, {age: 33}]})

```

This will fetch all the documents whose either name is John OR age is 33. any condition passes, the document is returned.

Update
------

the `updateOne` or `updateMany` work exactly same as Insert operation, except it takes 2 arguments. first argument is how do you want to find the document, second is once you find it how do you update it.

```
db.collection.updateOne(
    {name: "John"},      // Find one document whose name is John
    {$set: {name: "John Cena"}}  // Set this `name` key on it
)

```

When you use $set, if the key already exists, it will be replaced with newly given value, if it doesnt it will be created

Delete
------

The delete operation is exactly same as others

```
db.collection.deleteOne({id: 5})

```

will delete the document whose id is 5. you can provide any other criteria here