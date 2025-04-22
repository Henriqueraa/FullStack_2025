require("colors");
var http = require("http");
var express = require("express");

var app = express();
let bodyParser = require("body-parser")
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views')

var server = http.createServer(app);
server.listen(80);
console.log("Servidor ligado!!".red);

// métodos e actions

app.get("/inicio", function(requisicao,resposta){
    resposta.redirect("Aulas_1_e_2/Aula_1/index.html")
})

app.post("/inicio", function(requisicao,resposta){
    resposta.redirect("Aulas_1_e_2/Aula_1/index.html")
})

// app.get("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.query.Nome
//     let login = requisicao.query.Login
//     let senha = requisicao.query.Senha
//     let nascimento = requisicao.query.Nascimento
//     console.log(nome,login,senha,nascimento)
// })

app.post("/cadastrar", function(requisicao,resposta){
    let Nome = requisicao.body.Nome
    let Login = requisicao.body.Login
    let Senha = requisicao.body.Senha
    let Nascimento = requisicao.body.Nascimento
    
    resposta.render("resposta", {Nome, Login, Senha, Nascimento})
})

app.get("/for_ejs", function(requisicao,resposta){
    let valor = requisicao.query.valor
    resposta.render("exemplo_for", {valor})
})