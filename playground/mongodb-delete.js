const {MongoClient, ObjectID} = require('mongodb');
const user = process.argv[2];
console.log(user);
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log("Unable to connect to Mongo DB Server");
    }
    console.log("Connected to MongoDB Server");
    const db = client.db('TodoApp');
   //deleteMany
    // db.collection('Todos').deleteMany({name:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
   //deleteOne

   //findOneAndDelete
   db.collection('Todos').findOneAndDelete({completed:true}).then((result)=> {
        console.log(result);
   });

    //client.close();
});