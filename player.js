class Player{
    constructor(){
        this.col = 10;
        this.row = 9;
        //this.grid[row][col]
        this.x = 700;
        this.y = 640;
        this.image
        this.score = 0;
        this.lives = 3;
    
    }
    drawPlayer(){
        image(this.image,this.x,this.y,55,55)
        document.querySelector('span').innerText = this.lives
    }
    moveUp(){
        if(game.grid.grid[this.row-1][this.col]===5 || game.grid.grid[this.row-1][this.col]===6) {
            return
        }
       // rotate(this.image,90)
        //this.image = loadImage(this.image)
         this.y -=70
         this.row-=1;
         if(game.grid.grid[this.row][this.col]===0) 
         {         this.score+=1
            document.querySelector('tag').innerText = this.score
             game.grid.grid[this.row][this.col]=1;
           //  if(!game.grid.isGameOver()) alert("Level Cleared")
         }

    }
    moveDown(){
        if(game.grid.grid[this.row+1][this.col]===5 ||game.grid.grid[this.row+1][this.col]===6) {
            return
        }
         this.y += 70
         this.row+=1;
         if(game.grid.grid[this.row][this.col]===0) {
            this.score+=1
           document.querySelector('tag').innerText = this.score
             game.grid.grid[this.row][this.col]=1;}
           //  if(game.grid.isGameOver()) alert("Level Cleared")

        }
        moveLeft(){
            if(game.grid.grid[this.row][this.col-1]===5 || game.grid.grid[this.row][this.col-1]===6) {
                return
            }
            this.x -= 70
        this.col-=1;
        if(game.grid.grid[this.row][this.col]===0) {
            this.score+=1
           document.querySelector('tag').innerText = this.score
            game.grid.grid[this.row][this.col]=1;
          //  if(game.grid.isGameOver()) alert("Level Cleared")
        }
    }
    moveRight(){
        if(game.grid.grid[this.row][this.col+1]===5 || game.grid.grid[this.row][this.col+1]===6) {
            return
        }
        this.x += 70
         this.col+=1;
         if(game.grid.grid[this.row][this.col]===0) {
            this.score+=1
            document.querySelector('tag').innerText = this.score
             game.grid.grid[this.row][this.col]=1;
           //  if(game.grid.isGameOver()) alert("Level Cleared")
         }

    }

    isPositionSame(){
        if(this.row ===game.ghost.row && this.col===game.ghost.col){
            this.lives -=1;
            this.x = 700;
        this.y = 640;
        this.col = 10;
        this.row = 9;
        image(this.image,this.x,this.y,55,55)
        document.querySelector('span').innerText = this.lives

        }
        if(this.lives<1) alert("Game Over")
    }
}