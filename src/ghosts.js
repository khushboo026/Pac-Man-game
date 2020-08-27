class Ghosts{
    constructor(x,y, row, col){
        this.x = x ;
        this.y  = y;
        this.image;
        this.row = row;
        this.col = col;
    }

    drawGhost(){
        image(this.image,this.x+60,this.y,50,50)
    }
    
        moveUp(){
            if(game.grid.grid[this.row-1][this.col]===5 || game.grid.grid[this.row-1][this.col]===6) {
                this.moveGhost()
            } else {

                this.y -=70
                this.row-=1;
            }
        }
        moveDown(){
            if(game.grid.grid[this.row+1][this.col]===5 ||game.grid.grid[this.row+1][this.col]===6){
                this.moveGhost()
            } else {
                this.y += 70
             this.row+=1;

            }
            } 
            moveLeft(){
                if(game.grid.grid[this.row][this.col-1]===5 || game.grid.grid[this.row][this.col-1]===6){
                    this.moveGhost();
                    
                } else {
                    this.x -= 70
                    this.col-=1; 
                }
           
        }
        moveRight(){
            if(game.grid.grid[this.row][this.col+1]===5 || game.grid.grid[this.row][this.col+1]===6) {
                this.moveGhost();
                
            } else {
                this.x += 70
             this.col+=1;
            }  
        }
   

moveGhost(){
   
        let random = Math.floor(Math.random() * 4) + 1 

        if (random == 1) {
            this.moveUp();
        } else if (random == 2) {
            this.moveDown();
        } else if(random == 3) {
            this.moveLeft();
        }
        else {
            this.moveRight();
        }
        
}

}