require("colors");
var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://Henriqueraa:yBV43UWXBz0TbS8C@perfis.yqemitq.mongodb.net/?retryWrites=true&w=majority&appName=perfis';
const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("perfis");
var dbo2 = client.db("bd_completo");
var usuarios = dbo2.collection("usuarios");
var Carros = dbo2.collection("Carros");
var usuario = dbo.collection("usuario");
var posts = dbo.collection("posts");
var http = require("http");
var express = require("express");
let usuarioss = [];
var app = express();
let bodyParser = require("body-parser");
const { TIMEOUT } = require("dns");
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
    usuarioss.push({Login, Senha});
    console.log("Usuário cadastrado:", {Login, Senha});
    resposta.redirect("Aula_10/Lab10/Login.html");
    });
    
    app.post("/Login", function(requisicao, resposta) {
    let login = requisicao.body.Login;
    let senha = requisicao.body.Senha;
    let usuario = usuarioss.find(u => u.Login === login && u.Senha === senha);
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
// -----------------------------------------------------
// lab 11
app.post("/cadastrar",function(requisicao,resposta){
    let Nome = requisicao.body.Nome;
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    let Nascimento = requisicao.body.Nascimento;
    
    console.log(Nome, Login, Senha, Nascimento);
    
    var data = { db_nome: Nome, db_login: Login, db_senha: Senha, db_nasc: Nascimento };
    
    usuario.insertOne(data, function(err){
    if(err){
    resposta.render("resposta", {status: "Erro", Nome, Login, Senha, Nascimento});
    }
    else{
    resposta.render("resposta", {status: "Sucesso", Nome,Login,Senha,Nascimento});
    }
    
    })
    
    })
    
    app.post('/logar2', function(requisicao,resposta){
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    console.log(Login, Senha);
    
    var data = {db_login: Login, db_senha: Senha};
    
    usuario.find(data).toArray(function(err, items){
    console.log(items)
    if(err){
    //erro ao logar
    resposta.render("resposta_login",{status: "erro ao logar"});
    
    }
    else if(items.length == 0){
    //não encontrou usuario
    resposta.render("resposta_login",{status: "usuario/senha não encontrado"});
    
    }
    else{
    //usuario encontrado
    resposta.render("resposta_login",{status: "usuario "+Login+" logado"});
    }   
    })
    })

    app.post("/Postar", function(requisicao,resposta){
        let Titulo = requisicao.body.Titulo
        let Resumo = requisicao.body.Resumo
        let Conteudo = requisicao.body.Conteudo
        var data = {db_Titulo: Titulo,db_Resumo: Resumo,db_Conteudo: Conteudo}
        posts.insertOne(data, function(err){   
            if (err) {
                resposta.render('lab11',{status: "Erro", Titulo, Resumo, Conteudo})
            }
              else {
                resposta.render('lab11',{status: "sucesso", Titulo, Resumo, Conteudo})       
            }
            });
    })

    app.get("/Gera_post", function(requisicao,resposta){
        resposta.redirect("Aula_11/lab11/cadastrar_post.html")
    })
    
    app.get("/blog", function(requisicao,resposta){
        posts.find().toArray(function(err, items) {
            if (err) {
              resposta.send("Erro ao encontrar os posts!");
            }else {
                console.log(items);
              resposta.render("blog",{ posts:items})        
            };
          });
      
        });

/////////////////////////////////////////////////////////////////////////
// Usuários

app.post("/cadastrar_usuario", function(req, resp) {

    let data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    // salva dados no banco
    usuarios.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_usuario.ejs', {resposta: "Erro ao cadastrar usuário!"})
      }
      else {
        resp.render('resposta_usuario.ejs', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });

});


app.post("/logar_usuario", function(req, resp) {

    let data = {db_login: req.body.login, db_senha: req.body.senha };

    // busca um usuário no banco de dados
    usuarios.find(data).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
          resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
        }
        else if (err) {
          resp.render('resposta_usuario.ejs', {resposta: "Erro ao logar usuário!"})
        }
        else {
          Carros.find().toArray(function(err, items) {
          resp.render("lista_carros",{Carros:items});
          })
        };
    })
})

app.post("/cadastrar_carro", function(req, resp) {

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qnt: req.body.qnt };

    // salva dados no banco
    Carros.insertOne(data, function (err, items) {
      if (err) {
        resp.render('resposta_carro.ejs', {resposta: "Erro ao cadastrar o Carro!"})
      }
      else {
      Carros.find().toArray(function(err, items) {
      resp.render("lista_carros",{Carros:items})
      });        
      }
    });

});

app.post("/remover_carro", function(req, resp) {

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano};

    // remoção do anuncio do carro
    Carros.deleteOne(data, function (err, result) {
        console.log(result);
        if (result.deletedCount == 0) {
          resp.render('resposta_carro.ejs', {resposta: "Carro não encontrado!"})
        }
        else if (err) {
          resp.render('resposta_carro.ejs', {resposta: "Erro ao remover o Carro!"})
        }
        else {
          Carros.find().toArray(function(err, items) {
          resp.render("lista_carros",{Carros:items})
        })
        }
      });
});

app.post("/atualizar_carro", function(req, resp) {

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qnt: req.body.qnt };
    let newData = { $set: {db_marca: req.body.newmarca, db_modelo: req.body.newmodelo, db_ano: req.body.newano, db_qnt: req.body.newqnt} };

    // atualiza o anuncio do carro
    Carros.updateOne(data, newData, function (err, result) {
          console.log(result);
          if (result.modifiedCount == 0) {
            resp.render('resposta_carro.ejs', {resposta: "Carro não encontrado!"})
          }
          else if (err) {
            resp.render('resposta_carro.ejs', {resposta: "Erro ao atualizar o Carro!"})
          }
          else {
          Carros.find().toArray(function(err, items) {
          resp.render("lista_carros",{Carros:items})
        })
        }
      });
});
;
app.post("/vender_carro", function(req, resp) {
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const ano = req.body.ano;

  const filtro = { db_marca: marca, db_modelo: modelo, db_ano: ano };

  Carros.findOne(filtro, function(err, carro) {
    if (err || !carro) {
      return resp.render('resposta_carro.ejs', {resposta: "Carro não encontrado!"});
    }

    const qntAtual = parseInt(carro.db_qnt);

    if (qntAtual <= 0) {
      return resp.render('resposta_carro.ejs', {resposta: "Carro esgotado!"});
    }

    if (qntAtual === 1) {
      // Remove o carro do banco
      Carros.deleteOne(filtro, function(err, result) {
        if (err || result.deletedCount === 0) {
          return resp.render('resposta_carro.ejs', {resposta: "Erro ao remover carro esgotado!"});
        }

        Carros.find().toArray(function(err, items) {
          resp.render('lista_carros.ejs', {Carros: items, mensagem: "Carro vendido! Estoque esgotado, anúncio removido."});
        });
      });
    } else {
      // Apenas decrementa a quantidade
      const novaQnt = qntAtual - 1;

      Carros.updateOne(filtro, { $set: { db_qnt: novaQnt } }, function(err, result) {
        if (err || result.modifiedCount === 0) {
          return resp.render('resposta_carro.ejs', {resposta: "Erro ao vender o carro!"});
        }

        Carros.find().toArray(function(err, items) {
          resp.render('lista_carros.ejs', {Carros: items, mensagem: "Carro vendido com sucesso!"});
        });
      });
    }
  });
});


app.get("/listar_carros", function(req, resp) {

    usuarios.find().toArray(function(err, items) {
        resp.render("lista_carros.ejs", {Carros:items});
      });

});
    
