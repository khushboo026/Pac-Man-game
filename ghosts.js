class Ghosts{
    constructor(){
        this.x = 650 ;
        this.y  = 500;
        this.image1;
        this.image2;
        this.image3;
        this.row = 7;
        this.col = 10;
    }

    drawGhost(){
        image(this.image1,this.x+60,this.y,50,50)
        // image(this.image2,this.x,this.y,50,50)
        // image(this.image3,this.x+120,this.y,50,50)
    }
    
        moveUp(){
            if(game.grid.grid[this.row-1][this.col]===5 || game.grid.grid[this.row-1][this.col]===6) {
              //  console.log("cant move up")
                this.moveGhost()
            } else {

                this.y -=70
                this.row-=1;
            }
        }
        moveDown(){
            if(game.grid.grid[this.row+1][this.col]===5 ||game.grid.grid[this.row+1][this.col]===6){
              //  console.log("cant move down")
                this.moveGhost()
            } else {
                this.y += 70
             this.row+=1;

            }
            } 
            moveLeft(){
                if(game.grid.grid[this.row][this.col-1]===5 || game.grid.grid[this.row][this.col-1]===6){
                //    console.log("cant move left")
                    this.moveGhost();
                    
                } else {
                    this.x -= 70
                    this.col-=1; 
                  //  console.log("move left")
                }
           
        }
        moveRight(){
            if(game.grid.grid[this.row][this.col+1]===5 || game.grid.grid[this.row][this.col+1]===6) {
              //  console.log("cant move right")
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
            // this.y -=70
            // this.row-=1;
        } else if (random == 2) {
            this.moveDown();
            // this.y +=70
            // this.row+=1;
        } else if(random == 3) {
            this.moveLeft();
        }
        else {
            this.moveRight();
        }
        
}

}