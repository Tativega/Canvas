let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

console.log(c);

console.log(canvas);


var mouse = {
  x: undefined,
  y: undefined,
};

var maxRadius = 40;
¿

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
+

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();


