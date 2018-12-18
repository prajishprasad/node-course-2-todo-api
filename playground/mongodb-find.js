///const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log("Unable to connect to Mongo DB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
    // //db.collection('Todos').find({completed:false}).toArray().then((docs)=>{ // Query for uncompleted tasks
    // db.collection('Todos').find({_id: new ObjectID('5c18ce6ed3a7cc084a463799')}).toArray().then((docs)=>{
    //     console.log('TODOS');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });
     //db.collection('Todos').find({completed:false}).toArray().then((docs)=>{ // Query for uncompleted tasks
     db.collection('Todos').find().count().then((count)=>{
        console.log(`TODOS count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos',err);
    });
    //client.close();
})