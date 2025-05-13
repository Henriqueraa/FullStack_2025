// Pacotes  necessários
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const { red } = require('colors');
const MongoClient = require("mongodb").MongoClient;

const uri = 'mongodb+srv://Henriqueraa:yBV43UWXBz0TbS8C@perfis.yqemitq.mongodb.net/?retryWrites=true&w=majority&appName=perfis';

const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("bd_completo");
var usuarios = dbo.collection("usuarios");
var Carros = dbo.collection("Carros");

var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80, () => {
  console.log('server started'.red);
});

app.get('/', (req, res) => {
  res.redirect("usuarios/cadastro.html");
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

// app.get("/listar_usuarios", function(req, resp) {

//     // busca todos os usuarios no banco de dados
//     usuarios.find().toArray(function(err, items) {
//         // renderiza a resposta para o navegador
//         resp.render("lista_usuarios.ejs", { usuarios: items });
//       });

// });


// app.post("/atualizar_usuario", function(req, resp) {

//     let data = { db_login: req.body.login, db_senha: req.body.senha };
//     let newData = { $set: {db_senha: req.body.novasenha} };

//     // atualiza senha do usuário
//     usuarios.updateOne(data, newData, function (err, result) {
//           console.log(result);
//           if (result.modifiedCount == 0) {
//             resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
//           }else if (err) {
//             resp.render('resposta_usuario.ejs', {resposta: "Erro ao atualizar usuário!"})
//           }else {
//             resp.render('resposta_usuario.ejs', {resposta: "Usuário atualizado com sucesso!"})        
//           };
//     });

// });


// app.post("/remover_usuario", function(req, resp) {

//     let data = { db_login: req.body.login, db_senha: req.body.senha };

//     // remove do usuário
//     usuarios.deleteOne(data, function (err, result) {
//         console.log(result);
//         if (result.deletedCount == 0) {
//           resp.render('resposta_usuario.ejs', {resposta: "Usuário/senha não encontrado!"})
//         }else if (err) {
//           resp.render('resposta_usuario.ejs', {resposta: "Erro ao remover usuário!"})
//         }else {
//           resp.render('resposta_usuario.ejs', {resposta: "Usuário removido com sucesso!"})        
//         };
//       });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//CARROS

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

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qnt: req.body.qnt };

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

    let data = { db_marca: req.body.marca, db_modelo: req.body.modelo, db_ano: req.body.ano, db_qnt: req.body.qnt };

    // venda do carro
    Carros.updateOne(data, newData, function (err, result) {
        console.log(result);
        if (result.modifiedCount == 0) {
          resp.render('resposta_usuario.ejs', {resposta: "Carro não encontrado!"})
        }
        else if (err) {
          resp.render('resposta_usuario.ejs', {resposta: "Erro ao vender o Carro!"})
        }
        else {
          if(db_qnt > 0){
            resp.render('resposta_carro.ejs', {resposta: "Carro vendido com sucesso!"})   
          }
          else{
            resp.render('resposta_carro.ejs', {resposta: "Carro Esgotado!",})  
          }
        }
    });
});

app.get("/listar_carros", function(req, resp) {

    usuarios.find().toArray(function(err, items) {
        resp.render("lista_carros.ejs", {Carros:items});
      });

});


