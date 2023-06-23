const express = require('express');

const app = express();


//console.log(infoCursos);

const mongoose = require('mongoose');

const uri = "mongodb+srv://msilva41:g3NiKQpPHud4OD09@cluster0.neymvu6.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error);
    }
}

connect();


// Routers
const routerStudents = require('./routers/student.js');
app.use('/api/infoStudents/student', routerStudents);


// Routing
app.get('/', (req, res) => {
    res.send('My server with express is working');
});

app.get('/api/infoStudents', (req, res ) => {
    res.send(JSON.stringify(infoStudents));
});







const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Server is listening in port ${PUERTO}...`);
});







