const express = require('express');


const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname, 'template')

const checkAuth = function(req, res, next){

    req.authStatus = true;


    if(req.authStatus){

        next()
        console.log("Está logado no sistema!!!!, pode continuar a usar")

    }else{

        console.log("Não Está logado no sistema ainda !!!")
    }
}


app.use(checkAuth)

app.get('/users/:id', function(req, res){

    const id = req.params.id;
    console.log(`<h1>Estamos buscando Usuário pelo ID: ${id}</h1>`)
    res.sendFile(`${basePath}/users.html`)

})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`) // interpolação com ``
})

app.listen(port, () => {

     console.log(`App rodando na porta: ${port}`)

})