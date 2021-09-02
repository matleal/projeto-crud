const express = require('express');
const path = require('path');

const db = require('./database');
const routes = require('./routes');

const app = express();

//Conexão com o banco de dados
db.connect();

//Definindo o template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//Habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }));

//Definindo as rotas
app.use('/', routes);

//404 error
app.use((req, res) => { //middleware
    res.send('Pagina não encontrada');
})

//Executando o servidor 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));