require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const alunos = require('./routes/routes.js');

const app = express()
    .use(express.json())
    .use(cors())
    .use('/alunos/', alunos);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});