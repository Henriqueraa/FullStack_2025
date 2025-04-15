let p1 = document.getElementById('p1').innerHTML
console.log(p1)

document.getElementById('p1').innerHTML = "Olá mundo"


// exercicio 1
let nome = "Henrique"
let idade = "20"
let ano_atual = 2025
let ano_nascimento = ano_atual - idade
let resposta = "Olá " + nome + ", seu ano de nascimento é " + ano_nascimento
document.getElementById('ex1').innerHTML = resposta

function imprimeMensagem(msg, name){
    console.log(msg,"-" + name)
}
imprimeMensagem("mensagem 1", " Henrique")
imprimeMensagem("mensagem 2", " Carlos")
imprimeMensagem("mensagem 3", " Gabi")

//Exemplo de função soma
function soma(n1,n2){
    return n1 + n2 
}

let c = soma(3,4)
console.log("A soma de " + 3 + " e " + 4 + " é igual a " + c)

function incremento(){
    let ex2_in = parseInt(document.getElementById('ex2_in').value)
    for(let i= 0; i <= ex2_in; i++){ 
        console.log(i) 
    }   
}

function ex3(){
    let num1 = parseInt(document.getElementById("ex3_1").value)
    let num2 = parseInt(document.getElementById("ex3_2").value)
    let result = soma(num1,num2)
    document.getElementById("ex3_resp").innerHTML = "A soma de " + num1 + " e " + num2 + " é " + result  
    return result
}

function mult(num1,num2){
    return num1*num2
}

function ex4(){
    let num1 = parseInt(document.getElementById("ex4_1").value)
    let num2 = parseInt(document.getElementById("ex4_2").value)
    let result = 0
    if (num1 < 0 || num2 < 0){
        result = soma(num1,num2)
    }
    else{
        result = mult(num1,num2) 
    }

    document.getElementById("ex4_resp").innerHTML = "O resultado é " + result  
    
}

