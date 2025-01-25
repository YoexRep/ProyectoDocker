const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola Mundo desde API');
});

app.get('/saluda', (req, res) => {
    res.send('Saludos desde API con Express actualizado 4');
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});