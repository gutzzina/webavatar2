//Gavilan Fiorella Rocío 119039/8
//URL Youtube: https://www.youtube.com/watch?v=TwxGqHujKJ4

let imgPantallas = [];
let imgP;
let imgE;
let imgC;
let imgCH;
let imgEH;
let imgBotones = [];
let objJuego;

function preload() {
  imgPantallas =  [ loadImage('data/portada.png'),
    loadImage('data/fondoJuego.png'),
    loadImage('data/fondoGanaste.png'),
    loadImage('data/fondoPerdiste.png'),
    loadImage('data/creditos.png')];
  imgBotones = [
    loadImage('data/botonJugar.png'),
    loadImage('data/botonCreditos.png'),
    loadImage('data/botonReiniciar.png'),
    loadImage('data/perdiste.png'),
    loadImage('data/botonVolver.png'),
    loadImage('data/ganaste.png')];
  
  imgP =  loadImage('data/personaje.png'); 
  imgE = loadImage('data/enemigo.png'); 
  imgC = loadImage('data/corazon.png'); 
  imgEH = loadImage('data/hudEnemigo.png');
  imgCH = loadImage('data/hudCorazon.png');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
}

function draw() {
  objJuego.dibujar();
}

function mousePressed() {
  if (objJuego && objJuego.detectarClick) {
    objJuego.detectarClick(mouseX, mouseY);
  }
}

function keyPressed() {
    objJuego.keyPressed();
    
  if (key === 'd' ) {
    objJuego.personaje.velocidadX += 5;
   
  } else if (key === 'a' ) {
    objJuego.personaje.velocidadX -= 5;
    
  } else if (key === 'w' ) {
    objJuego.personaje.salto();
  
  }
}

function keyReleased() {
  if (key === 'w') {
    objJuego.personaje.finSalto(); 
  } else if (key === 'd') {
    objJuego.personaje.velocidadX = 0;
  } else if (key === 'a') {
    objJuego.personaje.velocidadX = 0;
  }
}
