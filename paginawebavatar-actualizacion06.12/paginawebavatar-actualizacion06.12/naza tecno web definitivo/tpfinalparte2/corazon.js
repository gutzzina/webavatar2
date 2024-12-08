class Corazon {
  constructor() {
    
    this.direccion = random([1, -1]);
    if (this.direccion === 1) {
      this.posX = 0; 
    } else {
      this.posX = width; 
    }
    this.posY = random(height - 120, height - 60);
    this.tam = 50;
    this.velocidad = random(2, 7);
    this.recolectado = false;
  }

  dibujar() {
    image(imgC, this.posX, this.posY, this.tam, this.tam);
  }

  avance() {
    this.posX += this.velocidad * this.direccion;
    ;
  }

  fueraDePantalla() {
    if (this.direccion === 1) {
      return this.posX > width + this.tam; 
    } else {
      return this.posX < -this.tam; 
    }
  }
}
