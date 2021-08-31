const express = require('express');
const path = require('path');

const app = express();

//Definindo o template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//Habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }));

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo teste'
    })
})

//404 error
app.use((req, res) => { //middleware
    res.send('Pagina não encontrada');
})

//Executando o servidor 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));