require("colors");
var http = require("http");
var express = require("express");
let usuarios = [];
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

// app.get("/inicio", function(requisicao,resposta){
//     resposta.redirect("Aulas_1_e_2/Aula_1/index.html")
// })

app.get("/", function(requisicao,resposta){
    resposta.redirect("Aulas_1_e_2/Página pessoal/projetos.html")
})

// app.get("/cadastrar", function(requisicao,resposta){
//     let nome = requisicao.query.Nome
//     let login = requisicao.query.Login
//     let senha = requisicao.query.Senha
//     let nascimento = requisicao.query.Nascimento
//     console.log(nome,login,senha,nascimento)
// })

// app.post("/cadastrar", function(requisicao,resposta){
//     let Nome = requisicao.body.Nome
//     let Login = requisicao.body.Login
//     let Senha = requisicao.body.Senha
//     let Nascimento = requisicao.body.Nascimento
    
//     resposta.render("resposta", {Nome, Login, Senha, Nascimento})
// })

app.get("/for_ejs", function(requisicao,resposta){
    let valor = requisicao.query.valor
    resposta.render("exemplo_for", {valor})
})

// app.post("/Login", function(requisicao, resposta){
//     let login = requisicao.body.Login;
//     let senha = requisicao.body.Senha;

//     if (!usuarios[login]) {
//         return resposta.render("resposta_lab10", { Login: "", erro: "Usuário não cadastrado. Por favor, cadastre-se primeiro." });
//     }

//     if (usuarios[login] !== senha) {
//         return resposta.render("resposta_lab10", { Login: "", erro: "Senha incorreta. Tente novamente." });
//     }

//     resposta.render("resposta_lab10", { Login: login, erro: "" });
// });

// app.post("/Cadastra", function(requisicao, resposta){
//     let login = requisicao.body.Login;
//     let senha = requisicao.body.Senha;

//     // Verifique se o usuário já está cadastrado
//     if (usuarios[login]) {
//         return resposta.render("resposta_lab10", { Login: "", erro: "Usuário já cadastrado. Tente outro login." });
//     }

//     // Caso o login não exista, cadastre o usuário
//     usuarios[login] = senha;

//     // Envia uma resposta que vai mostrar um alerta e redirecionar para o login
//     resposta.render("resposta_lab10", { 
//         Login: "",
//         erro: "",
//         mensagem: "Cadastro realizado com sucesso! Redirecionando para o login..." 
//     });
// });

app.post("/Cadastra", function(requisicao, resposta){
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    usuarios.push({Login, Senha});
    console.log("Usuário cadastrado:", {Login, Senha});
    resposta.redirect("Aula_10/Lab10/Login.html");
    });
    
    app.post("/Login", function(requisicao, resposta) {
    let login = requisicao.body.Login;
    let senha = requisicao.body.Senha;
    let usuario = usuarios.find(u => u.Login === login && u.Senha === senha);
    let msg = "Usuário ou senha incorreto, tente novamente!"
    let status;

    if (usuario) {
        status = 1; 
    resposta.render("resposta_lab10", {login, status});
    } 
    else {
        status = 0; 
    resposta.render("resposta_lab10", {msg, status});
    }

    });