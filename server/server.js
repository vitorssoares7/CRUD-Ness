const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
app.use('/', require('./routes/route'));

app.listen(3000);
console.log("Server rodando na porta 3000");