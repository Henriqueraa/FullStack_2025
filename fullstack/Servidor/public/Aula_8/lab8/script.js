let canvas = document.getElementById('canvas1')
let ctx = canvas.getContext('2d')

let img = new Image();
img.src = './cubo_mágico.jpg';


let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

img.onload = function(){
    desenhar();

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect()
    mouseX = evento.clientX - rect.left
    mouseY = evento.clientY - rect.top
    console.log(mouseX, mouseY)
    desenhar()
})
}

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    img.width = 30;
    img.height = 30;
    let imgW = img.width;
    let imgH = img.height;


    let desenhaX = mouseX - imgW / 2;
    let desenhaY = mouseY - imgH / 2;

    
    if (desenhaX < 0) 
        desenhaX = 0;
    if (desenhaY < 0) 
        desenhaY = 0;
    if (desenhaX + imgW > canvas.width) 
        desenhaX = canvas.width - imgW;
    if (desenhaY + imgH > canvas.height)
         desenhaY = canvas.height - imgH;

    ctx.drawImage(img, desenhaX, desenhaY, imgW, imgH);
  }





