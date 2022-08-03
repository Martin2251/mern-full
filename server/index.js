const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require('dotenv').config()

const app = express();
// use express.json () to fget data into json format

app.use(express.json());


// add port and connect to server
const PORT = process.env.PORT || 6000;



// import routes 

const TodoItemRoute = require('./routes/todoItems');
//connect database 

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database connected"))
.catch(err =>console.log(err))

app.use('/', TodoItemRoute);


app.listen(PORT, () => console.log("Server connected"));