const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = (canvas.width = 800)
const CANVAS_HEIGHT = (canvas.height = 700)
//estableciendo la velocidad del movimiento de el fondo
let gameSpeed = 5
//extrayendo la imagen 
const backgroundLayer1 = new Image()
backgroundLayer1.src = "layer-1.png"
const backgroundLayer2 = new Image()
backgroundLayer2.src = "layer-2.png"
const backgroundLayer3 = new Image()
backgroundLayer3.src = "layer-3.png"
const backgroundLayer4 = new Image()
backgroundLayer4.src = "layer-4.png"
const backgroundLayer5 = new Image()
backgroundLayer5.src = "layer-5.png"
let x = 0
// funcion requestAnimationFrame actualiza una animación antes del próximo repintado. El método toma una devolución de llamada como argumento para ser invocado antes del repintado.x-= hace que la animacion valla hacia adelante en orizontal
function animate() {
    //limpi el canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  //dibuja en el canvas
  ctx.drawImage(backgroundLayer4, x, 0)
  x -= gameSpeed
  requestAnimationFrame(animate)
}
animate()
