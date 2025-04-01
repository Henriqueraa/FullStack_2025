let canvas = document.getElementById('cvsteo');
let ctx =  cvsteo.getContext('2d');

// retângulos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect(0,0,70,70);
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(250,260,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,260,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.font = "70px Arial"
ctx.textAlign = "center";
ctx.fillText("Henriqueraa",200,370);
ctx.strokeText("Henriqueraa",195,370)
ctx.closePath();



let ex1 = document.getElementById('cvs1');
let ctx1 =  cvs1.getContext('2d');

// ex 1

// QA
ctx1.beginPath();
ctx1.lineWidth = 5;
ctx1.fillStyle = 'red';
ctx1.fillRect(0,0,70,70);
ctx1.closePath();
// QVM
ctx1.beginPath();
ctx1.lineWidth = 5;
ctx1.fillStyle = 'green';
ctx1.fillRect(330,330,70,70);
ctx1.closePath();
// QVR
ctx1.beginPath();
ctx1.lineWidth = 5;
ctx1.fillStyle = 'yellow';
ctx1.fillRect(0,330,70,70);
ctx1.closePath();
// QA
ctx1.beginPath();
ctx1.lineWidth = 5;
ctx1.fillStyle = 'blue';
ctx1.fillRect(330,0,70,70);
ctx1.closePath();

// Circe
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.strokeStyle = 'green';
ctx1.arc(100,150,25,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();
// Circd
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
ctx1.strokeStyle = 'green';
ctx1.arc(290,150,25,0*Math.PI,2*Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

// texto
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'black';
ctx1.font = "20px Arial"
ctx1.textAlign = "center";
ctx1.fillText("Desenvolvimento Web",200,90);
ctx1.closePath();

// arco
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'transparent';
ctx1.strokeStyle = 'green';
ctx1.arc(200,200,60,0*Math.PI,Math.PI);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

// linha meio
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'green';
ctx1.strokeStyle = 'green';
ctx1.moveTo(0,200);
ctx1.lineTo(400,200);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

// linha dd-e
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'blue';
ctx1.strokeStyle = 'blue';
ctx1.moveTo(330,70);
ctx1.lineTo(0,400);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

// linha dd-e
ctx1.beginPath();
ctx1.lineWidth = 2;
ctx1.fillStyle = 'red';
ctx1.strokeStyle = 'red';
ctx1.moveTo(70,70);
ctx1.lineTo(400,400);
ctx1.fill();
ctx1.stroke();
ctx1.closePath();

let ex2 = document.getElementById('cvs2');
let ctx2 =  cvs2.getContext('2d');

// chao
ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'grey';
ctx2.fillRect(0,270,400,200);
ctx2.closePath();
// casa
ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'brown';
ctx2.fillRect(160,190,80,80);
ctx2.closePath();
// telhado
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'orange';
ctx2.strokeStyle = 'orange';
ctx2.moveTo(160,190);
ctx2.lineTo(200,150);
ctx2.lineTo(240,190);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(290,150,25,0*Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();