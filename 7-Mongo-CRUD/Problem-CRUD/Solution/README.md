1. All users whose gender is male

```
db.usersdata.find({gender: "Male"});
```

2. all users whose ID is even
```
db.usersdata.find({id: {$mod: [2, 0]}});
```

3. Users who currently live in Japan
```
 db.usersdata.find({relocate_to: "Japan"});
```

4. Users who are female and live in India
```
db.usersdata.find({$and: [{gender: "Female", native : "India"}]});
```

5. Users who are more than 25 years old
```
db.usersdata.find({age: {$gt: 25}});
```

6. Users who are less than 50 years old and live in United State
```
db.usersdata.find({$and: [{age: {$lt: 50}, native : "United States"}]});
```

7. Total number of users who want to relocate to France (count only)
```
db.usersdata.find({relocate_to: "France"}).count();
```

8. Total number of users who are from USA and want to relocate to russia, sort them by age in ascending order
```
db.usersdata.find({$and: [{native: "United States", relocate_to : "Russia"}]}).sort({age: 1});
```

9. Get all users, sort them by total number of family member ASC and age DESC order
```
db.usersdata.find().sort({family_members: 1, age: -1});
```