class Enemigo {
  constructor() {
    this.direccion = random([1, -1]); 
    if (this.direccion === 1) {
      this.posX = 0; 
    } else {
      this.posX = width;
    }
    this.posY = random(height - 150, height - 60); 
    this.tam = 50;
    this.velocidad = random(3, 10);
    this.colisionado = false;
  }

  dibujar() {
    image(imgE, this.posX, this.posY, this.tam, this.tam);
  }

  avance() {
    this.posX += this.velocidad * this.direccion;
  }

  fueraDePantalla() {
    if (this.direccion === 1) {
      return this.posX > width + this.tam;
    } else {
      return this.posX < -this.tam;
    }
  }
}
