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
drawGame() {
    background("black")
    this.grid.drawballs();
    this.player.drawPlayer();
    this.cherry.drawCherry();
    this.ghost.drawGhost();
    this.ghost.moveGhost();


   
    // let scoreCard = document.createElement("h2")
    // scoreCard.innerText = score;
    // let parent = document.getElementsByTagName("body");
    // parent.appendChild(scoreCard);
    // this.obstacles = this.cherry((obstacle)=>{
    //     if(this.cherry.image.collision(this.player)){
    //         console.log("cherry");
    //     }
    // })
    
}
}