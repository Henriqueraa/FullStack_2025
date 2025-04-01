let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

function desenhar_quadrado(cor_preen,x,y,a,b){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.fillRect(x,y,a,b);
    ctx.closePath();
}

function desenhar_linha(cor_preen,cor_borda,x,y,nx,ny){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.strokeStyle = cor_borda;
    ctx.moveTo(x,y);
    ctx.lineTo(nx,ny);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(cor_preen,cor_borda,x,y,r,st,end){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.strokeStyle = cor_borda;
    ctx.arc(x,y,r,st,end);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function escrever(cor_preen,fonte,align,text,x,y){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.font = fonte
    ctx.textAlign = align;
    ctx.fillText(text,x,y);
    ctx.closePath();
}

desenhar_quadrado('blue',0,0,50,50)
desenhar_quadrado('red',250,0,50,50)
desenhar_linha('blue','blue',0,0,150,150)
desenhar_linha('red','red',300,0,150,150)
desenhar_quadrado('aquamarine',0,120,30,30)
desenhar_quadrado('aquamarine',0,150,30,30)
desenhar_quadrado('aquamarine',270,135,30,30)
desenhar_linha('green','green',0,150,300,150)
desenhar_quadrado('red',110,150,40,40)
desenhar_linha('black','black',150,150,150,300)
desenhar_quadrado('yellow',0,240,30,60)
desenhar_quadrado('yellow',30,270,30,30)
desenhar_quadrado('black',270,240,30,60)
desenhar_quadrado('black',240,270,30,30)
desenhar_arco('aquamarine','green',150,300,40,Math.PI,2*Math.PI)
desenhar_arco('transparent','green',150,150,70,Math.PI,2*Math.PI)
desenhar_arco('transparent','green',150,300,60,1.5*Math.PI,2*Math.PI)
desenhar_arco('transparent','green',150,300,80,Math.PI,1.5*Math.PI)
desenhar_arco('transparent','green',150,300,60,1.5*Math.PI,2*Math.PI)
desenhar_arco('yellow','green',70,220,15,0,2*Math.PI)
desenhar_arco('yellow','green',230,220,15,0,2*Math.PI)
desenhar_arco('aquamarine','blue',150,110,15,0,2*Math.PI)
desenhar_arco('transparent','green',150,150,90,Math.PI,1.25*Math.PI)
desenhar_arco('transparent','green',150,150,90,1.75*Math.PI,2*Math.PI)
escrever('black','20px arial','center','Canvas',150,50)
