Databases
=========

Theory
------

A database is nothing but a place to store your data. it is mostly a dedicated software that handles all types of CRUD operations on your data. a database software gives you multiple ways to access/update your data.

There are multiple types of databases. every one of them only differs in "How" they store data. ultimate goal of every database is same: Store and get data as effectively as possible

NOTE: every type of database are super fast. Imagine the fastest thing you have seen so far, not multiply it by 100, and more 100. All the professional grade databases are even faster than that. So it's completely normal that a thought will come to your mind, "Which one is better" or "Which one is faster", the answer to that is as always: it depends.

### Relational Databases

These types of databases are the most common ones so far. They are one of the oldest Database systems as well. A relational DB stores the data in `rows` and `column` format.

eg:

```
________________________
id |    name   |    age |
---+-----------+--------|
1  |   John    |    33  |
---+-----------+--------|
2  |   Jack    |    50  |
---+-----------+--------|
3  |   Jenna   |    45  |
---+-----------+--------|

```

here, id, name, age and the columns, and every row represent the data stored in the database. We call these types of databases 'relational' because you can represent the data in terms of 'relations' to other data.

Such databases make up majority of applications in the world. (eg, facebook, apple, amazon etc all big company's use them for many of their products)

The LMS uses relational database called MySQL.

Few examples of Relational DBs: PostgresSQL, MySQL, Oracle SQL, MS-SQL etc if you notice, there are many ending with `-sql`. SQL stands for "Structured Query Language". pronounced as Sequel or S Q L. both are valid.

Because the data we are seeing is in a 'structured' format (table), the language that is used to manipulate the data in relational databases are also commonly known as "SQL databases"

### Non relational Databases

These are just opposite of Databases. which is why it's common to call them "no-sql" (pronounced as no-sequel)

In NoSQL databases, the data stored in DB has no relation with other data. in simple words you can store whatever you want without worrying about any structure.

i.e. One Table can store { name: "John" } the other can store { color: "red" }.

it's totally upto you what you want to store. these types of databases are very flexible. Mongodb is one example of NoSQL DB.

### Key-Value

Another way to store the data is key-value pairs. This is also a no-sql type of db. Imagine `localStorage` just like that you can store anything and give it a `key`. and based on this key you can later fetch this data, update, or delete as well.

These types of databases are mostly used as `caching` mechanism instead of primary source of data.

the examples of k-v store is: redis, lowdb, rocksdb etc

### GraphDB

The GraphDBs are relatively newer in the database domain. And they could be a little bit hard to imagine as well. in Graph DB, every data is stored as a "Node". this data doesn't have to follow any structure whatsoever.

But if you have two just data "Nodes" you can form a relation between them with an "Edge". See this [image](https://s33046.pcdn.co/wp-content/uploads/2019/08/simple-diagram-of-graph-database_1-624x543.png)

here we are storing Multiple Person, Multiple Cities, Teams And Stadiums. when you store any of these things, a "Node" is created for it. So if you create 2 Nodes:

```
Person {
    name: "john",
    age: 13
}

```

and

```
City {
    name: "Bangalore"
}

```

you can form an edge between them which represents how this person is related to that city. here the edge name is 'likes'. i.e. If you want to find all people who likes bangalore, or even if you want to find all cities a person likes, it's extremely easy to do that now.

If you have guessed, this is nothing but Relational + Non-Relational Both at the same time. GraphDBs are very versatile, since you can store whatever data you want + have relation between data

MongoDB
-------

Mongodb, as discussed above is a non-relational or No-SQL db. The reason why it's included in MERN stack is, everything is JS in mongodb. The database itself is written in C++, but the language that is used to connect to DB, request data from DB, add new data to DB is JavaScript.

So thankfully you don't have to learn any new language to learn Mongodb. it makes learning mongo very easy.

### Installation

MongoDB comes with 2 types, Enterprise and Community. the Community Edition is fully free and includes complete features of the database. Enterprise is the version that needs to pay, but it only includes "extra" features like 0% downtime etc. which are rarely needed for learning purpose.

head to [this link](https://www.mongodb.com/try/download/community), Download the Community Edition based on your operating system, and install it. it will mostly be just double click and next -> next -> next etc.

#### MongoSh

The above link only installs the database itself. to connect with database you will need another tool called as `mongosh`. install it from [here](https://www.mongodb.com/try/download/shell);

#### Document

Every Single smallest unit you can store in the mongodb, is called as a document. a document is nothing but a object from JS. it's as simple as that. thus, { name: "john" } is a valid mongodb 'document' and you can store it in mongodb, and perform any operation on it.

#### Collection

A collection is just set of documents. if you have 10 users information you want to store in your database, So you can create a "collection", give it a name, and then store the documents in it. Collections only job is to group similar types of documents. (here you can give it a name like "users" then later it becomes easy to ask mongodb `give me first 2 users from "users" collection`)

#### Database

Above we collectively referred "database" as a software that manages your data. but once you have that software (here mongodb) installed, a database is usually referred to as "set of similar type of data". overall it's a Group of collections. eg: now you have Users collection that has documents on users personal information, you can create one more collection that stores users Employment information, call it, `employee` etc.

you can have multiple such databases.

To summarize:

```
--------------------+
  Database          |
    +-------------  |
    |  Collections  |
    |  +------------|
    |  |  Document  |
    |  |            |
    |  |            |
--------------------+
```