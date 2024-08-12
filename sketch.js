let imagem;
let musica;

function setup() {
  createCanvas(1000, 800);
  palavra= arroto();
  musica.loop();
}
function preload(){
   imagem = loadImage("imagem.avif");
  musica = loadSound("musica.mp3");
}

function draw() {
  background("lightblue");
  image(imagem,0,0,1000,800);
  batata();
  kibe();
  arroto();
}

function batata (){
  let minimo = 0;
  let maximo = width;
  let seguir = map (mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400)
  }

function kibe(){
   fill("violet");
  textSize(20);
  textAlign (CENTER,CENTER);
}

function arroto(){
  let palavras = ["deveria ser eu"];
  return random(palavras);
}