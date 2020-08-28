class Game {
    constructor(){
        this.score = 0;
        this.gameStatus = "start"
     
    }

preloadGame() {
    this.playerImgs = loadImage("assets/pacman-boy.png");
    this.dotImg = loadImage("assets/pacman-ball.png");
    this.ghost1Img = loadImage("assets/ghost1.png");
    this.ghost2Img = loadImage("assets/ghost2.png");
    this.ghost3Img = loadImage("assets/ghost3.png");
    this.startImg = loadImage("assets/start.png");
    this.sound = loadSound("Chomp.mp3");
    

}
setupGame(){
    this.sound.loop();

   
     this.player = new Player();
    this.player.image = this.playerImgs
  //  this.player.sound = this.sound;
    this.grid = new Grid();
    this.grid.dotImage = this.dotImg
    this.ghost1 = new Ghosts( 650,500,7,10);
    this.ghost2 = new Ghosts( 590,500,7,9);
    this.ghost3 = new Ghosts( 710,500,7,11);
    this.ghost1.image = this.ghost1Img;
    this.ghost2.image = this.ghost2Img;
    this.ghost3.image = this.ghost3Img;
    this.start = new Start();
    this.start.image = this.startImg;
   // this.start.image.imageMode(CENTER);

}

drawGame() {
   // this.sound.play();
   
    if(this.gameStatus == "start") {
        clear()

        this.start.drawPlayer();
        
        text("press Enter to start", width/2, height-200)
        textSize(100);
        textAlign(CENTER);
        fill("black")
        // show start page text()
    } else if (this.gameStatus == "playing") {
    background("black")
    this.grid.drawballs();
    this.player.drawPlayer();
    this.ghost1.drawGhost();
    this.ghost2.drawGhost();
    this.ghost3.drawGhost();
    if(frameCount%30===0) {

        this.ghost1.moveGhost();
        this.ghost2.moveGhost();
        this.ghost3.moveGhost();

    }
    this.grid.isGameOver();
   this.player.isPositionSame();


    } else if (this.gameStatus == "game over") {
        // show text("Game Over", x, y) 
        // text("press Enter to play again", width/2, height/2)
        // textSize(100);
        // textAlign(CENTER);
        // fill('black')

    }
}
}