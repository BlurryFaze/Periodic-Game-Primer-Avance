var canvas;
var backgroundImage;
var titulo
var botonplay
var score
var hola
var tabla
var gameState = "PLAY"
var botonregresar
var amboton1
var veboton2
var moboton3
var roboton4
var veoboton5
var aviso
var vecboton6
var moboton7
var azboton8
var click

function preload() {
  
  backgroundImage = loadImage("sciencebg.png");
  tituloimg = loadImage ("titulo2.png")
  tablaimg = loadImage("tabla.jpg");
  moradoimg = loadImage ("moradooscuro.png");
  amarilloimg = loadImage ("amarillo.png");
  verdeimg = loadImage ("verde claro.png")
  regresarimg= loadImage ("regresar.png");
  botonplayimg = loadImage ("botonplay.png")
 roimg = loadImage ("rojo.png");
 veoimg = loadImage ("verdeo.png")
 avisoimg = loadImage ("aviso.png")
 vecimg = loadImage ("verdecian.png")
 moimg2 = loadImage ("morado.jpg")
 azimg = loadImage ("azul.png")
 clickimg = loadImage ("click3.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  fondo = createSprite(width/2,height/2,width,height);

  fondo.addImage(backgroundImage)
  fondo.scale=8
 titulo = createSprite(800,220,50,50);
 titulo.addImage(tituloimg);
 titulo.scale =0.5;

 botonplay = createSprite(800,520,50,50)
 botonplay.addImage(botonplayimg);
 botonplay.scale=0.4;



 tabla = createSprite (width/2,height/2,100,100)
 //tabla = createSprite (800,400,100,100)
 tabla.addImage(tablaimg);
 tabla.scale = 0.1;
 tabla.visible = false;

 botonregresar = createSprite(70,675,50,50)
 botonregresar.visible =false
 botonregresar.addImage(regresarimg)
 botonregresar.scale=0.2;

 amboton1 = createSprite(253.5,64.5,50,50)
 amboton1.visible = false
 amboton1.addImage(amarilloimg)
  amboton1.scale=0.21;
  
 veboton2 = createSprite (253.5, 129,50,50)
  veboton2.visible=false;
veboton2.addImage(verdeimg)
veboton2.scale=1.3;
  
  moboton3 = createSprite (253.5,196.5,50,50)
  moboton3.visible=false;
  moboton3.addImage(moradoimg)
  moboton3.scale =0.9
 

  roboton4 = createSprite (537,64.5,50,50)
  roboton4.visible = false
  roboton4.addImage(roimg)
  roboton4.scale =1.3;

  veoboton5 = createSprite (537,130,50,50)
  veoboton5.visible = false
  veoboton5.addImage(veoimg)
  veoboton5.scale = 1.5;

  aviso = createSprite (800,625,50,50)
  aviso.visible = false
  aviso.addImage(avisoimg)
  aviso.scale = 0.3;

  vecboton6 = createSprite (537,195,50,50)
  vecboton6.visible = false;
  vecboton6.addImage(vecimg)
  vecboton6.scale=1.3;

  moboton7 = createSprite (820,64,50,50)
  moboton7.visible = false;
  moboton7.addImage (moimg2)
  moboton7.scale=0.13;

  azboton8 =createSprite (820,130,50,50)
  azboton8.visible = false
  azboton8.addImage(azimg)
  azboton8.scale=1;

  click = createSprite (400,630,50,50)
  click.visible = false
  click.addImage (clickimg)
  click.scale =0.3;

  score = 0;
  
}

function draw() {
  
  //image (backgroundImage,0,0,windowWidth,windowHeight)
  background("blue");
  text("Puntuación: "+ score, 1300,80);
 
    
    
  if(mousePressedOver(botonplay)) {
   botonplay.visible = false;
   titulo.visible = false;
   botonregresar.visible = true;
   tabla.visible = true;
  veboton2.visible = true
   amboton1.visible = true
   moboton3.visible = true;
   roboton4.visible =true;
   veoboton5.visible = true;
   aviso.visible = true;
   vecboton6.visible = true;
   moboton7.visible = true;
   azboton8.visible = true;
   click.visible = true;
   tabla.scale=0.9
   console.log(1)
  }
  if(mousePressedOver(botonregresar)) {
    botonplay.visible = true;
    titulo.visible = true;
    botonregresar.visible = false;
    tabla.visible = false;
    veboton2.visible=false;
    moboton3.visible=false;
    amboton1.visible= false;
    roboton4.visible = false;
    veoboton5.visible = false;
    vecboton6.visible = false;
    aviso.visible = false;
    moboton7.visible = false;
    azboton8.visible = false;
    click.visible = false;
   }

 
 //  else if (gameState === END) {
    
   //}
     
    drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

