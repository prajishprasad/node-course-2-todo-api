const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

const {ObjectID} = require('mongodb');

const app = express();

//Middleware
app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
    const todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({todos}); //Passing this as an object is better as it allows you to add extra fields later on
    }, (err) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req,res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id))
        res.send('Invalid ID');
    Todo.findById(id).then((todo)=>{
        if(!todo){
            res.status(404).send('TODO does not exist');
        }
        res.send(todo);
    });
    //res.send(req.params);
});

app.listen('3000', () =>{
    console.log('Started on port 3000');
});