const express = require('express')
const path = require('path')
const port = 5000

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('hello from express');
// });

// app.post('/contact', (req, res) => {
//     if(!req.body.name){
//         return res.status(400).send('Name is req');
//     }

//     // database stuff
//     res.status(201).send(`thank you ${req.body.name}`);
// });

// app.post('/login', (req, res) => {
//     if(!req.header('x-auth-token')){
//         return res.status(400).send('no token');
//     }

//     if(req.header('x-auth-token') !== '123456'){
//         return res.status(401).send('not authorized');
//     }

//     res.send('logged in');
// });

// app.put('/post/:id', (req, res) => {
//     // database stuff

//     res.json({
//         id: req.params.id,
//         title: req.body.title
//     });
// });

// app.delete('/post/:id', (req, res) => {
//     // database stuff
//     res.json({ msg: `post ${req.params.id} deleted`});
// });



app.listen(port, () => console.log(`Server startet on port ${port}!`));