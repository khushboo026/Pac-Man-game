const canvasWidth = 1470;
const canvasHeight = 1050;
const squareSize = canvasWidth / 15;
const game = new Game();

function preload() {
    game.preloadGame();
}

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
   // let ele = createAudio("pacman_chomp.wav");
   // ele.loop();
    game.setupGame();
}

function draw() {
    clear();
    game.drawGame();
}

function keyPressed(){
    if(keyCode === 38){
        game.player.moveUp();
        }
        if(keyCode === 40){
        game.player.moveDown();
        }
        if(keyCode === 39){
            game.player.moveRight();
        }
        if(keyCode === 37){
            game.player.moveLeft();
        }
        if(keyCode === 13 && (game.gameStatus == "game over" || game.gameStatus == "start")){
          //  console.log(grid1)
            game.player.lives = 3
            game.grid.grid = JSON.parse(JSON.stringify(grid1));
            game.player.x = 700;
            game.player.y = 640;
            game.player.col = 10;
            game.player.row = 9;
            game.gameStatus = "playing";
        }
}
