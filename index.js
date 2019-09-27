const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const route_usuarios = require('./routes/route_usuarios')
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use((req, res, next) => { //Configuracao do CORS
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})



//Instanciando Rotas
app.use('/usuarios', route_usuarios)
const port = 5000
app.listen(port, () => {
    console.log(`Conectado na porta ${port}`)
});