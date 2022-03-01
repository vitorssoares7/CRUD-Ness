const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use('/', require('./routes/route'));

app.listen(3000);
console.log("Server rodando na porta 3000");