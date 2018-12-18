const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log("Unable to connect to Mongo DB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // Adding a user
    db.collection('Users').insertOne({
        name: 'Prajish',
        age: 31,
        location: 'Mumbai'
    }, (err,result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
})