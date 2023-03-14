const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = 3000;

// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/hello', (req, res) => {
    res.sendFile(__dirname + "/hello.html")
})

app.listen(port, console.log(`Server is listening on port ${port}...`));