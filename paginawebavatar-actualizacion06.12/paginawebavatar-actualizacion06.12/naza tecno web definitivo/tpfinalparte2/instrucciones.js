class Instrucciones {
  constructor() {
    this.instrucciones = [
      "Usa 'W' para saltar",
      "Usa 'D' para moverte a la derecha",
      "Usa 'A' para moverte a la izquierda"
    ];
    this.instruccionActual = 0; 
    this.mostrarInstruccion = true; 
    this.temporizador = 5; 
    this.mostrarInstruccionesExtras = false; 
    this.instruccionesExtras = [
      "¡Evita los obstáculos!",
      "¡Agarra los corazones!"
    ];
  }

  mostrar() {
    if (this.mostrarInstruccion) {
      fill(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      text(this.instrucciones[this.instruccionActual], width / 2, height / 2);
    }
    if (this.mostrarInstruccionesExtras) {
      fill(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      text(this.instruccionesExtras[0], width / 2, height / 2 - 100);
      text(this.instruccionesExtras[1], width / 2, height / 2 - 180);
    }
  }

  siguienteInstruccion() {
    if (this.instruccionActual < this.instrucciones.length - 1) {
      this.instruccionActual++; 
    } else {
      this.mostrarInstruccion = false; 
      this.activarInstruccionesExtras();
    }
  }

  activarInstruccionesExtras() {
    if (frameCount%60 === 0 && this.temporizador > 0 ) {
      this.temporizador--;
      this.mostrarInstruccionesExtras = true;
    }
    if (this.temporizador === 0) {
      this.mostrarInstruccionesExtras = false;
      this.temporizador=0;
    }
  }
}
