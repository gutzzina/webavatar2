class Juego {
  constructor() {
    this.estado = "inicio"; 
    this.personaje = new Personaje();
    this.enemigos = [];
    this.corazones = [];
    this.puntos = 0; 
    this.meta = 5;
    this.vidas = 3; 
    this.totalVida=3;
    this.timerC = 4;
    this.timerE = 6;
    this.instrucciones = new Instrucciones();
  }

  dibujar() {
    if (this.estado === "inicio") {
      this.dibujarInicio();
    } else if (this.estado === "juego") {
      this.dibujarJuego();
    } else if (this.estado === "creditos") {
      this.dibujarCreditos();
    } else if (this.estado=== "ganaste") {
      this.dibujarGanaste();
    } else if (this.estado=== "perdiste") {
      this.dibujarPerdiste();
    }
  }

  dibujarInicio() {
    image(imgPantallas[0], 0, 0, width, height);
    image(imgBotones[0], width / 2 - 50, height / 2);
    image(imgBotones[1], width / 2 - 58, height / 2 + 60);
  }

  dibujarJuego() {
    image(imgPantallas[1], 0, 0, width, height);
    this.personaje.mover();
    this.personaje.dibujar();
    this.instrucciones.mostrar();
    this.instrucciones.activarInstruccionesExtras();

    for (let i = this.enemigos.length - 1; i >= 0; i--) {
      let enemigo = this.enemigos[i];
      enemigo.dibujar();
      enemigo.avance();

      if (this.verificarColision(this.personaje, enemigo)) {
        this.vidas--; 
        this.enemigos.splice(i, 1); 
      }
    }
    for (let i = this.corazones.length - 1; i >= 0; i--) {
      let corazon = this.corazones[i];
      corazon.dibujar();
      corazon.avance();
      if (this.verificarColision(this.personaje, corazon)) {
        this.puntos++; 
        this.corazones.splice(i, 1); 
      }
    }

    if (frameCount%60 === 0 && this.timerE > 0) {
      this.timerE--;
    }
    if (this.timerE === 0) {
      this.enemigos.push(new Enemigo()); 
      this.timerE = 5;
    }
    if (frameCount%60 === 0 && this.timerC > 0) {
      this.timerC--;
    }
    if (this.timerC ===0) {
      this.corazones.push(new Corazon());
      this.timerC = 7;
    }

    fill(255);
    textSize(20);
    image(imgCH, 10, 20, 50, 60);
    text( this.puntos + " / " + this.meta, 90, 50);
    image(imgEH, 10, 85, 50, 60);
    text(this.vidas + " / " + this.totalVida, 90, 85+35);

    if (this.puntos >= 5) {
      this.estado = "ganaste";
    } else if (this.vidas <= 0) {
      this.estado = "perdiste";
    }
  }
  keyPressed() {
    if (key === 'w' && this.instrucciones.instruccionActual === 0) {
      this.personaje.salto();
      this.instrucciones.siguienteInstruccion();
    } else if (key === 'd' && this.instrucciones.instruccionActual === 1) {
      this.personaje.velocidadX += 5;
      this.instrucciones.siguienteInstruccion();
    } else if (key === 'a' && this.instrucciones.instruccionActual === 2) {
      this.personaje.velocidadX -= 5;
      this.instrucciones.siguienteInstruccion();
    }
  }

  dibujarCreditos() {
    image(imgPantallas[4], 0, 0, width, height);
    image (imgBotones[4], 260, 300);
    
  }
  dibujarGanaste() {
    image(imgPantallas[2], 0, 0, width, height);
    image (imgBotones[5], 165, 100);
    image (imgBotones[4], 260, 300);
  }
  dibujarPerdiste() {
    image(imgPantallas[3], 0, 0, width, height);
    image (imgBotones[3], 165, 100);
    image (imgBotones[2], 260, 300);
  }

  verificarColision(obj1, obj2) {
    let centro1X = obj1.posX + obj1.tamaño / 2;
    let centro1Y = obj1.posY + obj1.tamaño / 2;
    let centro2X = obj2.posX + obj2.tam / 2;
    let centro2Y = obj2.posY + obj2.tam / 2;
    let distancia = dist(centro1X, centro1Y, centro2X, centro2Y);
    return distancia <= (obj1.tamaño / 2 + obj2.tam / 2);
  }

  detectarClick(x, y) {
    if (this.estado === "inicio") {
      if (x > width / 2 - 50 && x < width / 2 + 50 && y > height / 2 && y < height / 2 + 50) {
        this.estado = "juego";
        this.instrucciones.temporizador = 5;
        this.instrucciones.mostrarInstruccion = true;
        this.instrucciones.instruccionActual = 0 ;
      }
      else if (x > width / 2 - 58 && x < width / 2 + 58 && y > height / 2 + 60 && y < height / 2 + 110) {
        this.estado = "creditos";
      }
    } else if (this.estado === "creditos") {
       if (x > 260 && x < 360  && y > 300 && y < 300 + 100) {
        this.estado = "inicio"; 
      }
      this.estado = "inicio";
    } else if (this.estado === "ganaste") {
      if (x > 260 && x < 360  && y > 300 && y < 300 + 100) {
        this.estado = "inicio";
        this.vidas = 3;
        this.puntos = 0;
      }
    } else if (this.estado === "perdiste") {
      if (x > 250 && x < 360  && y > 300 && y < 300 + 100) {
        this.estado = "juego";
        this.vidas = 3;
        this.puntos = 0;
        this.personaje.dibujar();
      }
    }
  }
}
