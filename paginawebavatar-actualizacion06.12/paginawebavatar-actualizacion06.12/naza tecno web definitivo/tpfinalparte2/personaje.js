class Personaje {
  constructor() {
    this.posX = width/2;
    this.posY = height - 100;
    this.tamaño = 70;
    this.velocidadX = 0;
    this.velocidadY = 0;
    this.gravedad = 0.8;
    this.saltando = false;
  }

  dibujar() {
    image(imgP, this.posX, this.posY, this.tamaño, this.tamaño);
  }

  salto() {
    if (this.posY === height - 70) {
      this.velocidadY = -9; 
      this.saltando = true;
    }
  }
  finSalto() {
    this.saltando = false;  
  }

  mover() {
    this.posX += this.velocidadX;
    this.posX = constrain(this.posX, 0, width - this.tamaño);
    this.posY += this.velocidadY;

    if (this.saltando && this.velocidadY < 0) {
      this.velocidadY -= 0.6; 
    }

    this.velocidadY += this.gravedad;
    if (this.posY > height - 70) {
      this.posY = height - 70;
      this.velocidadY = 0;
      this.saltando = false; 
    }
  }
}
