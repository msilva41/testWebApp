
const express = require('express');

const {student} = require('../datos/cursos.js').infoStudents;

const routerStudents = express.Router();


// middleware
routerStudents.use(express.json());


//    Router
// GET
routerStudents.get('/', (req, res) => {
    res.send(JSON.stringify(student));
});

routerStudents.get('/:id', (req, res) => {
    const id = req.params.id;
    const results = student.filter(estudiantes => estudiantes.id === id);

    if (results.length === 0) {
        return res.status(404).send(`There is no students with the id ${id}.`);
    }

    res.send(JSON.stringify(results));
})

// POST
routerStudents.post('/', (req, res) => {
    let newStudent = req.body;
    student.push(newStudent);
    res.send(JSON.stringify(student));
});

// PUT
routerStudents.put('/:id', (req, res) => {
    const studentUpdate = req.body;
    const id = req.params.id;

    const indice = student.findIndex(student => student.id == id);
    console.log(indice);

    if (indice >= 0) {
        student[indice] = studentUpdate;
    }
    res.send(JSON.stringify(student));
});

// DELETE
routerStudents.delete('/:id', (req, res) => {
    const id = req.params.id;

    const indice = student.findIndex(student => student.id == id);

    if (indice >= 0) {
        student.splice(indice, 1);
    }
    res.send(JSON.stringify(student));
});

module.exports = routerStudents;