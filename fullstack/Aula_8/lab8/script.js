let canvas = document.getElementById('canvas1')
let ctx = canvas1.getContext('2d')

function mouse(){
    document.addEventListener('mousemove', function(evento){
        let rect = canvas.getBoundingClientRect()
        Xmouse = evento.clientX - rect.left
        Ymouse = evento.clientY - rect.top
        console.log(Xmouse, Ymouse)
    })
}

mouse()