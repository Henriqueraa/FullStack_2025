// let carro = {
//     cor: 'Silver',
//     modelo: 'SUV',
//     marca: 'Toyota',
//     buzina: function(){
//        return 'bi bi' ;
//     }
// };

// console.log(carro);
// console.log(carro.cor);
// console.log(carro.buzina());


// let carro2 = {
//     cor: 'black',
//     modelo: 'SUV',
//     marca: 'Ford',
//     buzina: function(){
//        return 'booown' ;
//     }
// };

// console.log(carro2);
// console.log(carro2.cor);
// console.log(carro2.buzina());


class Carro{
    constructor(cor, modelo, marca, buzina){
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca
    }
    buzina(){
        return 'bi bi'
    }
}

let carro1 = new Carro('black', 'SUV', 'Honda');
let carro2 = new Carro('purple', 'Hatch', 'Volkswagen')
console.log(carro1)
console.log(carro2)

let carros = []
carros.push(carro1)
carros.push(carro2)
for(let i = 0; i < carros.length; i++){
    console.log(carros[i].buzina)
}


class Retangulo{
    constructor(cor_linha,cor_preenchimento,espessura_linha,x,y,largura,altura){
        this.cor_linha = cor_linha ;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }

    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.strokeStyle = this.cor_linha;
        contexto.fillRect(this.x,this.y,this.largura,this.altura);
        contexto.strokeRect(this.x,this.y,this.largura,this.altura);
        contexto.closePath();
        
    }
}

let canvas = document.getElementById('canvas1');
let ctx = canvas1.getContext('2d');

let Retangulo1 = new Retangulo('orange', 'red', 3, 0, 0, 20, 20)
let Retangulo2 = new Retangulo('orange', 'red', 3, 180, 180, 20, 20)
let Retangulo3 = new Retangulo('black', 'red', 3, 180, 180, 20, 20)
Retangulo1.desenhe(ctx)
let direcao_x = 0

function animacao(){

    if (Retangulo1.x >= 180){
        direcao_x = -1
    }
    else if(Retangulo1.x <= 0){
        direcao_x = 1       
    }
        
    Retangulo1.x += direcao_x;
    ctx.clearRect(0,0,400,400)
    Retangulo1.desenhe(ctx)
    Retangulo2.desenhe(ctx)
    Retangulo3.desenhe(ctx)
    requestAnimationFrame(animacao)  

}

animacao()

document.addEventListener('keydown', function(evento){
    let tecla = evento.key
    console.log(tecla)

    if ( tecla == 'ArrowUp'){
        Retangulo2.y -= 5
    }
    if ( tecla == 'ArrowDown'){
        Retangulo2.y += 5
    }
    if ( tecla == 'ArrowRight'){
        Retangulo2.x += 5
    }
    if ( tecla == 'ArrowLeft'){
        Retangulo2.x -= 5
    }
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect()
    let Xmouse = parseInt(evento.clientX - rect.left);
    let Ymouse = parseInt(evento.clientY - rect.top); 
    console.log(Xmouse, Ymouse)
    Retangulo3.x = Xmouse
    Retangulo3.y = Ymouse
})
