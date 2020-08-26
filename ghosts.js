class Ghosts{
    constructor(){
        this.x = 650 ;
        this.y  = 500;
        this.image1;
        this.image2;
        this.image3;
        this.row = 7;
        this.col = 9;
    }

    drawGhost(){
        image(this.image1,this.x+60,this.y,50,50)
        image(this.image2,this.x,this.y,50,50)
        image(this.image3,this.x+120,this.y,50,50)
    }
    
        moveUp(){
            if(game.grid.grid[this.row-1][this.col]===5 || game.grid.grid[this.row-1][this.col]===6) {
                this.moveLeft();
            }
             this.y -=70
             this.row-=1;
            // this.moveLeft();
         //    image(this.image2,this.x,this.y,50,50)
    
        }
        moveDown(){
            if(game.grid.grid[this.row+1][this.col]===5 ||game.grid.grid[this.row+1][this.col]===6) {
                this.moveRight();
            }
             this.y += 70
             this.row+=1;
           //  this.moveRight();
          //   image(this.image2,this.x,this.y,50,50)
    
            }
            moveLeft(){
                if(game.grid.grid[this.row][this.col-1]===5 || game.grid.grid[this.row][this.col-1]===6) {
                    this.moveDown();
                }
                this.x -= 70
            this.col-=1;
        //    this.moveDown();
          //  image(this.image2,this.x,this.y,50,50)
            
        }
        moveRight(){
            if(game.grid.grid[this.row][this.col+1]===5 || game.grid.grid[this.row][this.col+1]===6) {
                this.moveLeft();
            }
            this.x += 70
             this.col+=1;
           //  this.moveLeft();
          //   image(this.image2,this.x,this.y,50,50)
        }
   

moveGhost(){
                //   this.moveUp();
                //  this.moveRight();
                //    this.moveDown();
                //   this.moveLeft();
 }
}