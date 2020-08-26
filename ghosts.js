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
        // image(this.image2,this.x,this.y,50,50)
        // image(this.image3,this.x+120,this.y,50,50)
    }
    
        moveUp(){
            if(game.grid.grid[this.row-1][this.col]===5 || game.grid.grid[this.row-1][this.col]===6) {
               this.moveGhost()
            } else {

                this.y -=70
                this.row-=1;
             //   this.moveGhost();

            }
        //     while(this.y>0) {this.moveUp();}
             
         //    image(this.image2,this.x,this.y,50,50)
    
        }
        moveDown(){
            if(game.grid.grid[this.row+1][this.col]===5 ||game.grid.grid[this.row+1][this.col]===6){
                this.moveGhost()
            } else {
                this.y += 70
             this.row+=1;
            // this.moveGhost()
            }
        //      while(this.y<height)
        //    { this.moveDown();}
        //     image(this.image2,this.x,this.y,50,50)
    
            } 
            moveLeft(){
                if(game.grid.grid[this.row][this.col-1]===5 || game.grid.grid[this.row][this.col-1]===6){
                    this.moveGhost();
                    
                } else {
                    this.x -= 70
                    this.col-=1; 
                    console.log("move left")
                  //  console.log("left now down")
                }
            // while(this.x>0)
            // {this.moveLeft();}
          //  image(this.image2,this.x,this.y,50,50)
                
        }
        moveRight(){
            if(game.grid.grid[this.row][this.col+1]===5 || game.grid.grid[this.row][this.col+1]===6) {
                this.moveGhost();
                
            } else {
                this.x += 70
             this.col+=1;
            }  
        //      while(this.x<width)
        //      {this.moveRight();}
        //   //   image(this.image2,this.x,this.y,50,50)
        }
   

moveGhost(){
    let counterUp = 0;
    let counterDown = 0;
    let counterLeft = 0;
    let counterRight = 0;

   // if((!(game.grid.grid[this.row-1][this.col]===5) && !(game.grid.grid[this.row-1][this.col]===6))|| (!(game.grid.grid[this.row+1][this.col]===5) && !(game.grid.grid[this.row+1][this.col]===6))){
          
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
        //  console.log("this is a random number", Math.floor(Math.random() * 2) + 1 )}
      //  this.row-=1;
      //  if(counterUp>5){

       // }
    // } else if(!(game.grid.grid[this.row+1][this.col]===5) && !(game.grid.grid[this.row+1][this.col]===6)) {
    //  this.y += 70
    //  console.log("2")
    //  this.row+=1;
    // } else 
    // if((!(game.grid.grid[this.row][this.col-1]===5) && !(game.grid.grid[this.row][this.col-1]===6))||!(game.grid.grid[this.row][this.col+1]===5) && !(game.grid.grid[this.row][this.col+1]===6)){
    //     let random = Math.floor(Math.random() * 2) + 1 

    //     if (random == 1) {
    //         this.x -= 70
    //         this.col-=1
    //     } else if (random == 2) {
    //         this.x += 70
    //         this.col+=1
    //     }
    // }
//     console.log("3")
// this.col-=1; 
//  } else if(!(game.grid.grid[this.row][this.col+1]===5) && !(game.grid.grid[this.row][this.col+1]===6)) {

//  this.x += 70
//  console.log("4")
//   this.col+=1;
//  }  
}

}