//to do list, imput sound,directional model, assets/corner rooms
//secret room

let button
let BotMid
let RightMid
let LeftMid
let TopMid
let Center
let Field
let Ghost
let GridX = 2
let GridY = 2
let playerX = 200
let playerY = 200
let gameState = 0
let A = 0
let B = 0
let C = 0
let D = 0
let E = 0
let F = 0
let G = 0
let H = 0
let I = 0
let Win = 'Oh yeah, i was born as a ghost'
let Clue1 = 'maybe I choked     on some pizza'
let Death = 'Wait... How did I die?'
let Credits
let tunes
function preload() {
  Field = loadImage('Field.jpg')
  Ghost = loadImage('Ghost.png')
  Center = loadImage('house_center.png')
  BotMid = loadImage('Bottom_Middle.png')
  RightMid = loadImage('Middle_right.png')
  LeftMid = loadImage('Middle_left.png')
  TopMid = loadImage('middle_top.png')
  tunes = loadSound('Ghost.mp3')
}

function setup() {
  // image(Field,400,400)
  createCanvas(400, 400);
  fill(255)
      button = createButton('Start Game')
  button.position (width/2,300)
  button.mousePressed(GameStart)
 // Credits = createButton('Credits')
 // Credits.mousePressed(GameStart)
 // Credits.position(width/2,320)
 // Credits.hide()
  masterVolume(0.1)
  tunes.loop()
}

function draw() {
  if (gameState == 0){
    fill(1)
    textSize(20)
    text('Spooky Ghost Game',width/2,height/2)
  }
  if (gameState == 1){
    fill(255)
    textSize(12)
  if (GridY < 1) {
    image(Field, 0, 0, 400, 400)
  }
  if (GridY > 3) {
    image(Field, 0, 0, 400, 400)
  }
  if (GridX < 1) {
    image(Field, 0, 0, 400, 400)
  }
  if (GridX > 3) {
    image(Field, 0, 0, 400, 400)
  }
  if (GridX == 1 & GridY == 2) {
    //background(20,0,100)
    image(LeftMid, 0, 0, 400, 400)
    A = 1
    //text(Clue1, playerX, playerY - 10, 100, 100)
  }
  if (GridX == 2 & GridY == 2) {
    //background(100,0,100)
    image(Center, 0, 0, 400, 400)
    B = 1
    text(Death, playerX, playerY - 10, 200, 200)
  }
  if (GridX == 3 & GridY == 2) {
    image(RightMid, 0, 0, 400, 400)
    //background(220,0,100)
    C = 1
  }
  if (GridX == 6 & GridY == 9){
    text('nice',playerX,playerY-10)
  }
  if (GridX == 1 & GridY == 1) {
    image(Center, 0, 0, 400, 400)
    //background(20,0,20)
    D = 1
  }
  if (GridX == 2 & GridY == 1) {
    image(BotMid, 0, 0, 400, 400)
     text(Clue1,playerX,playerY-10,100,100)
    //background(100,0,20)
    E = 1
  }
  if (GridX == 3 & GridY == 1) {
    image(Center, 0, 0, 400, 400)
    //background(220,0,20)
    F = 1
  }
  if (GridX == 1 & GridY == 3) {
    image(Center, 0, 0, 400, 400)
    //background(20,0,220)
    G = 1
  }
  if (GridX == 2 & GridY == 3) {
    image(TopMid, 0, 0, 400, 400)
    //background(100,0,220)
    H = 1
  }
  if (GridX == 3 & GridY == 3) {
    image(Center, 0, 0, 400, 400)
    //background(220,0,220)
    I = 1
  }
  if(GridX ==1.5&GridY==1.5){
    background(1)
    text('After wondering around your house for a few minutes',75,200)
    text('you remember you were born a ghost',100,220)
    text('must have been a pretty crazy dream you had about dying',70,240)
    text('tunes are ghost + friend by louie zong',95,260)
    //Credits.show()
  }
  image(Ghost, playerX, playerY, 60, 60)
  //Temporary win condition
  if (A + B + C + D + E + F + G + H + I == 9) {
//    text(Win, width / 2, height / 2, 70, 80)
    GridX = 1.5
    GridY = 1.5
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    playerY += 5;
  }
  if (playerX > 400) {
    playerX = 20
    GridX++
    print(GridX, GridX)
  }
  if (playerX < 0) {
    playerX = 380
    GridX--
    print(GridX, GridX)
  }
  if (playerY > 400) {
    playerY = 20
    GridY--
    print(GridY)
  }
  if (playerY < 0) {
    playerY = 380
    GridY++
    print(GridY)
  }
}
//if (gameState == 2) {
 // background(100)
 // fill(random(255),random(255),random(255))
//  text('tunes are ghost + friend by louie zong')
//}
}
function GameStart() {
gameState =+1
button.hide()
}