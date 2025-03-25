function ver_num(){
    let num = parseInt(document.getElementById('num').value);
    let num_random = Math.random()*100;
    let valor = Math.floor(num_random);
    
    if (num == valor){
        document.getElementById('resp').style.setProperty("background-color", "green");
        document.getElementById('resp').innerHTML = "número Igual";
    }
    else if (num < valor){
        document.getElementById('resp').style.setProperty("background-color", "red");
        document.getElementById('resp').innerHTML = "número Menor";
    }
    else{
        document.getElementById('resp').style.setProperty("background-color", "red");
        document.getElementById('resp').innerHTML = "número Maior   ";
    }
}

