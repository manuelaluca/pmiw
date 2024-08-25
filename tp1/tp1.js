//https://youtu.be/Rb7isbl-E3A
                                                                                             //Manuela Luca 119071/8 
                                                                                             //Comisión 2
let obra;
let num = 10;
let tam = 40;
let n;
let b;

function preload() {
 obra = loadImage('data/opart.jpg');
}

function setup() {
  createCanvas(800, 400);
  n = color(0);
  b = color(255);
}

function draw() {
  image(obra, 0, 0);
  console.log(mouseX + " / " + mouseY);

  let pantalla = width / 2;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let x = j * tam + pantalla;
      let y = i * tam;
      dibujarCuadrado(i, j);
      
      let nuevoTamaño = calcularTamaño(x + tam / 2, y + tam / 2);

      if ((i + j) % 2 == 0) fill(b);
      else fill(n);

      ellipse(x + tam / 2, y + tam / 2, nuevoTamaño, nuevoTamaño);
    }
  }
}

function mousePressed() {
  n = color(random(255), random(255), random(255));
  b = color(random(150), random(150), random(150));
}

function keyPressed() {
  tam--;
  num++;

  if (key === 'r') {
    tam = 40;
    num = 10;
    n = color(0);
    b = color(255);
  }
}
