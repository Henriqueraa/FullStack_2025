let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

function desenhar_quadrado(ctx,cor_preen,x,y,a,b){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.fillRect(x,y,a,b);
    ctx.closePath();
}

function desenhar_linha(ctx, cor_preen, cor_borda, x, y, pontos) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.strokeStyle = cor_borda;
    ctx.moveTo(x, y);
    for (let i = 0; i < pontos.length; i++) {
        ctx.lineTo(pontos[i][0], pontos[i][1]);
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


function desenhar_arco(ctx,cor_preen,cor_borda,x,y,r,st,end){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.strokeStyle = cor_borda;
    ctx.arc(x,y,r,st,end);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function escrever(ctx,cor_preen,fonte,align,text,x,y){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preen;
    ctx.font = fonte
    ctx.textAlign = align;
    ctx.fillText(text,x,y);
    ctx.closePath();
}

desenhar_quadrado(ctx,'blue',0,0,50,50)
desenhar_quadrado(ctx,'red',250,0,50,50)
desenhar_linha(ctx,'blue','blue',0,0,[[150,150]])
desenhar_linha(ctx,'red','red',300,0,[[150,150]])
desenhar_quadrado(ctx,'aquamarine',0,120,30,30)
desenhar_quadrado(ctx,'aquamarine',0,150,30,30)
desenhar_quadrado(ctx,'aquamarine',270,135,30,30)
desenhar_linha(ctx,'green','green',0,150,[[300,150]])
desenhar_quadrado(ctx,'red',110,150,40,40)
desenhar_linha(ctx,'black','black',150,150,[[150,300]])
desenhar_quadrado(ctx,'yellow',0,240,30,60)
desenhar_quadrado(ctx,'yellow',30,270,30,30)
desenhar_quadrado(ctx,'black',270,240,30,60)
desenhar_quadrado(ctx,'black',240,270,30,30)
desenhar_arco(ctx,'aquamarine','green',150,300,40,Math.PI,2*Math.PI)
desenhar_arco(ctx,'transparent','green',150,150,70,Math.PI,2*Math.PI)
desenhar_arco(ctx,'transparent','green',150,300,60,1.5*Math.PI,2*Math.PI)
desenhar_arco(ctx,'transparent','green',150,300,80,Math.PI,1.5*Math.PI)
desenhar_arco(ctx,'transparent','green',150,300,60,1.5*Math.PI,2*Math.PI)
desenhar_arco(ctx,'yellow','green',70,220,15,0,2*Math.PI)
desenhar_arco(ctx,'yellow','green',230,220,15,0,2*Math.PI)
desenhar_arco(ctx,'aquamarine','blue',150,110,15,0,2*Math.PI)
desenhar_arco(ctx,'transparent','green',150,150,90,Math.PI,1.25*Math.PI)
desenhar_arco(ctx,'transparent','green',150,150,90,1.75*Math.PI,2*Math.PI)
escrever(ctx,'black','20px arial','center','Canvas',150,50)

let canvas2 = document.getElementById('canvas2')
let ctx2 = canvas2.getContext('2d')


desenhar_quadrado(ctx2,'grey',0,220,300,100);
desenhar_quadrado(ctx2,'rgb(142, 31, 4)',110,140,80,80);
desenhar_linha(ctx2,'rgb(250, 98, 81)','rgb(250, 98, 81)',110,140,[[150,100],[190,140]]);
desenhar_arco(ctx2,'yellow','transparent',220,60,40,0,2*Math.PI)
desenhar_quadrado(ctx2,'brown',40,170,20,50);
desenhar_arco(ctx2,'rgb(20, 169, 17)','transparent',50,160,25,0,2*Math.PI);
desenhar_quadrado(ctx2,'rgb(0, 145, 255)',0,220,40,130);
desenhar_quadrado(ctx2,'rgb(0, 145, 255)',40,260,70,40);
desenhar_arco(ctx2,'rgb(0, 145, 255)','rgb(0, 145, 255)',0,220,40,1*Math.PI,2*Math.PI);
desenhar_arco(ctx2,'rgb(0, 145, 255)','rgb(0, 145, 255)',110,301,40,1*Math.PI,2*Math.PI);
desenhar_quadrado(ctx2,'brown',260,210,20,50);
desenhar_arco(ctx2,'rgb(20, 169, 17)','transparent',270,200,25,0,2*Math.PI);
desenhar_quadrado(ctx2,'rgb(102, 24, 4)',141.75,180,16.5,40);  
desenhar_quadrado(ctx2,'rgb(7, 226, 255)',158.25,155,24.75,24.75);
desenhar_quadrado(ctx2,'rgb(7, 226, 255)',117,155,24.75,24.75);   




