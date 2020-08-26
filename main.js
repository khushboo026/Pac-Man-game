const canvasWidth = 1470;
const canvasHeight = 1050;
//let score = 0;
const squareSize = canvasWidth / 15;
const game = new Game();

function preload() {
    game.preloadGame();
}

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
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
}

// let scoreCard = document.createElement("h2")
// scoreCard.innerText = game.player.score
//let parent = document.getElementsByTagName("div");
// document.body.appendChild(scoreCard);