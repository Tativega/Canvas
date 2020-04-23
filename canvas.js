let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

console.log(c);

console.log(canvas);

//                         /\__/\     /^--^\     /^--^\
//                        ( ^°^ )
//                        \____/     \____/     \____/
//                       /      \   /      \   /      \
//                      |       |  |       |  |       |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
//
//                                CUADRADO

// c.fillRect(x, y, width, height);
// x e y determinan la posicion

// c.fillStyle = "#fa3" //si pongo un solo estilo, va a afectar a todos. si quiero
// que cada uno tenga un estilo diferente tengo q poner un fillstyle antes de cada uno

// c.fillRect(100, 100, 100, 100)

// c.fillRect(200, 200, 100, 100)

// c.fillRect(300, 300, 100, 100)

// c.fillRect(400, 400, 100, 100)

//
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//                       /^--^\     /^--^\     /^--^\
//                       \____/     \____/     \____/
//                      /      \   /      \   /      \
//                     |        | |        | |        |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
//                                LINEA

// c.beginPath();

//donde queremos que empiece el path:
//c.moveTo(x, y)
//ese punto es invisible hasta q se dclare el stroke method

// c.moveTo(50, 300);

//crea una linea hacia otro punto c.lineTo(x, y)

// c.lineTo(300, 100);
// c.lineTo(400, 300);

//para añadirle color, antes del metodo stroke:
// c.strokeStyle = "#fa34a3"  // cualquier formato de color

// c.stroke(); // este es el{q{efectivamente va a hacer q se vea la linea
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//                       /^--^\     /^--^\     /^--^\
//                       \____/     \____/     \____/
//                      /      \   /      \   /      \
//                     |        | |        | |        |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
/////////////////////////////////CIRCULO ////////////////////////////////////
//FUNCION Q DIBUJA EL ARCO O CIRCULO
//arc(x, y, radius, startAngle, endAngle:, anticlockwise)
// x: Int
// y: Int
//radius: Int --- es lo que determina el tamaño del circulo
// startAngle: float
// endAngle: float
// drawCounterClockwise: bool

//RADIANS: alternativa a los angulos. es matematicamente mas pura
//longitud circunferencia de un circulo: 2PI * R
//2PI radianes = 360°
//PI radian = 180°
//1 radian = 180°/PI
//PI / 180° = 1°

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// ESTO GENERA UN SOLO CIRCULO ESTATICO

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//                       /^--^\     /^--^\     /^--^\
//                       \____/     \____/     \____/
//                      /      \   /      \   /      \
//                     |        | |        | |        |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
/////////--------------CREAR MULTIPLES CIRCULOS ---------////////////////////

//para poder hacerlo sin tener que repetir la formula de arriba multiples veces

// for(var i = 0; i < 5; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     //para que vaya posicionando los circulos en lugares random de la ventana

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
// }

//__________________________________________________________________________
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//                       /^--^\     /^--^\     /^--^\
//                       \____/     \____/     \____/
//                      /      \   /      \   /      \
//                     |        | |        | |        |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
// -------------------INTERACTUAR CON EL CANVAS.---------------------------.

var mouse = {
  x: undefined,
  y: undefined,
};

var maxRadius = 40;
// var minRadius = 2

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  console.log(mouse);
});

window.addEventListener("resize", function (e) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

// __________________________________________________________________________
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//                       /^--^\     /^--^\     /^--^\
//                       \____/     \____/     \____/
//                      /      \   /      \   /      \
//                     |        | |        | |        |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
// ----GENERAR UNA CLASE CIRCULO PARA LUEGO GENERAR MULTIPLES INSTANCIAS----
//                                  oop js

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = "blue"; /// esto solo hace la linea del circulo vacia
    // c.stroke();
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    ////////INTERACTIVITY////////
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    ////////INTERACTIVITY////////

    this.draw();
  };
}

//__________________________________________________________________________
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//                       /^--^\     /^--^\     /^--^\
//                       \____/     \____/     \____/
//                      /      \   /      \   /      \
//                     |        | |        | |        |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
// ----------------.-.-.-.-..-ANIMAR EL CIRCULO .-.-.-.-.-.-.-.-.-.-..-.-.-.-.

//SE CREA UNA NUEVA INSTANCIA DE CIRCLE

// var circle = new Circle(200, 200, 3, 3, 30);

// //function animate() - RECURSIVA

// function animate() {
//     requestAnimationFrame(animate);

//     //limpiar el canvas cada vez q se arranca de vuelta la funcion
//     c.clearRect(0, 0, innerWidth, innerHeight)

//     circle.update();   //UPDATE ES UN METODO DE LA CLASE CIRCLE

// }

// animate();

// __________________________________________________________________________
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//                       /^--^\     /^--^\     /^--^\
//                       \____/     \____/     \____/
//                      /      \   /      \   /      \
//                     |        | |        | |        |
//                      \__  __/   \__  __/   \__  __/
// |^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|
// | | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |
// | | | | | | | | | | | | / / | | |\ \| | | | | |/ /| | | | | | | | | | | |
// | | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |
// ----------------genera aleatoreamente multiples circulos animados.-.-.-.

var circleArray = [];
var colorArray = [
  "#f79071",
  "#fa744f",
  "#16817a",
  "#024249",
  "#ffcc00",
  "#ff6666",
  "#cc0066",
  "#66cccc",
  "#5f6caf",
  "#010a43",
  "#f18867",
];

//va a pusear en un array 50 instancias de circle



function init () {
    circleArray = [];
    for (var i = 0; i < 500; i++) {
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dy = Math.random() - 0.5; ////velocidad de L-R
        var dx = Math.random() - 0.5; ////velocidad de U-D
        var radius = Math.random() * 3 + 1;
      
        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
}

//HAY Q LLAMAR A LA FUNCION ANIMATE CON UN LOOP ADENTRO Q RECORRA EL ARRAY
//DE CIRCLES

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();

// __________________________________________________________________________
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

//////MOVER CIRCULO ///////////////////
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dy = (Math.random() - 0.5) * 8;
// var dx = (Math.random() - 0.5) * 8;
// var radius = 30;
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight) //limpiar el canvas cada vez q se arranca de vuelta la funcion
//     c.beginPath();
// c.arc(x, y, radius, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// //esta condicion es para que una vez que el circulo llegue al borde
// //de la ventana, vuelva
// //se pone x + radius porq si ponemos x solo va a calcular cuando el centro del circulo llegue
// //al borde de de la ventana
// if (x + radius > innerWidth || x - radius < 0) {
//     dx = -dx
// }
// if (y + radius > innerHeight || y - radius < 0) {
//     dy = -dy
// }
// x += dx;
// y += dy;
// }

// animate();
