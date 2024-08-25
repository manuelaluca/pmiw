function dibujarCuadrado(i, j) {
  let pantalla = width / 2;
  let x = j * tam + pantalla;
  let y = i * tam;

  if ((i + j) % 2 == 0) fill(n);
  else fill(b);

  rect(x, y, tam, tam);
}

function calcularTamaño(puntoX, puntoY) {
  let distancia = dist(mouseX, mouseY, puntoX, puntoY);
  let tamañoMapeado = map(distancia, 0, width, tam / 2.2, tam / 4);
  return tamañoMapeado;
}
