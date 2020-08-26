class Game {
    constructor(){
        this.score = 0;
     
    }
preloadGame() {
    this.playerImgs = loadImage("pacman-boy.png");
    this.dotImg = loadImage("pacman-ball.png");
    this.cherryImg = loadImage("cherry.jpg");
    this.ghost1Img = loadImage("ghost1.png");
    this.ghost2Img = loadImage("ghost2.png");
    this.ghost3Img = loadImage("ghost3.png");
}
setupGame(){
     this.player = new Player();
    this.player.image = this.playerImgs
    this.grid = new Grid();
    this.grid.dotImage = this.dotImg
    this.cherry = new Cherry();
    this.cherry.image = this.cherryImg;
    this.ghost = new Ghosts();
    this.ghost.image1 = this.ghost1Img;
    this.ghost.image2 = this.ghost2Img;
    this.ghost.image3 = this.ghost3Img;

}
//    isPositionSame(){
//        if(this.player.row===this.ghost.row && this.player.col === this.player.col){
//            this.player.lives -=1
//        }
//        if(this.player.lives < 1) console.log("Game Over")

//     }
drawGame() {
    background("black")
   // if(level ===1){
    this.grid.drawballs();
    this.player.drawPlayer();
    this.cherry.drawCherry();
    this.ghost.drawGhost();
    if(frameCount%30===0) {

        this.ghost.moveGhost();
     //   console.log(" here")
    }
    this.grid.isGameOver();
   this.player.isPositionSame();
//}
// if(level === 2){

// }
//     this.grid.drawballs();
//     this.player.drawPlayer();
//     this.cherry.drawCherry();
//     this.ghost.drawGhost();
//     if(frameCount%30===0) {

//         this.ghost.moveGhost();
//      //   console.log(" here")
//     }
//     this.grid.isGameOver();
//    this.player.isPositionSame();
}
}