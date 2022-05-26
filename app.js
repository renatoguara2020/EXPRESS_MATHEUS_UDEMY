const express = require('express');


const app = express();
const port = 3000;
const path = require('path');

const basePath = path.join(__dirname, 'template')
app.use(express.urlencoded({extended:true,}));

app.use(express.json())

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

app.get('/users/add', (req, res)=>{

    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res)=>{
    //console.log(req.body)

    const firstName = req.body.firstName;
    const occupation = req.body.occupation;
    const password = req.body.password;
    const userName = req.body.userName;

    console.log(`O nome é ${firstName} trabalha em ${occupation} sua senha é: ${password} e seu nome de usuario é: ${userName}`);

})

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


