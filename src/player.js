class Player{
    constructor(){
        this.col = 10;
        this.row = 9;
        this.x = 700;
        this.y = 640;
        this.image
        this.score = 0;
        this.lives = 3;
     //   this.sound;
    
    }
    
    drawPlayer(){
        image(this.image,this.x,this.y,55,55)
        document.querySelector('span').innerText = this.lives
    }
    moveUp(){
        if(game.grid.grid[this.row-1][this.col]===5 || game.grid.grid[this.row-1][this.col]===6) {
            return
        }

         this.y -=70
         this.row-=1;
         this.image = loadImage("assets/pacman-up.png");
         if(game.grid.grid[this.row][this.col]===0) 
         {         this.score+=1
            document.querySelector('tag').innerText = this.score
             game.grid.grid[this.row][this.col]=1;
         }

    }
    moveDown(){
        if(game.grid.grid[this.row+1][this.col]===5 ||game.grid.grid[this.row+1][this.col]===6) {
            return
        }
         this.y += 70
         this.row+=1;
         this.image = loadImage("assets/pacman-down.png");
         if(game.grid.grid[this.row][this.col]===0) {
            this.score+=1
           document.querySelector('tag').innerText = this.score
             game.grid.grid[this.row][this.col]=1;}

        }
        moveLeft(){
            if(game.grid.grid[this.row][this.col-1]===5 || game.grid.grid[this.row][this.col-1]===6) {
                return
            }
            this.x -= 70
        this.col-=1;
        this.image = loadImage("assets/pacman-left.png");
        if(game.grid.grid[this.row][this.col]===0) {
            this.score+=1
           document.querySelector('tag').innerText = this.score
            game.grid.grid[this.row][this.col]=1;
        }
    }
    moveRight(){
        if(game.grid.grid[this.row][this.col+1]===5 || game.grid.grid[this.row][this.col+1]===6) {
            return
        }
        this.x += 70
         this.col+=1;
         this.image = loadImage("assets/pacman-right.jpeg")
         if(game.grid.grid[this.row][this.col]===0) {
            this.score+=1
            document.querySelector('tag').innerText = this.score
             game.grid.grid[this.row][this.col]=1;
         }

    }

    isPositionSame(){
        if((this.row ===game.ghost1.row && this.col===game.ghost1.col)||(this.row ===game.ghost2.row && this.col===game.ghost2.col)||(this.row ===game.ghost3.row && this.col===game.ghost3.col)){
            this.lives -=1;
            this.x = 700;
        this.y = 640;
        this.col = 10;
        this.row = 9;
        image(this.image,this.x,this.y,55,55)
        document.querySelector('span').innerText = this.lives

        game.sound.stop()
        setTimeout(()=>{
            game.sound.loop()
        },750)
        }
        if(this.lives<1) {
            game.gameStatus = "game over";
          //  game.grid.grid = grid1;
            alert("Game Over")
        }
           
    }
}