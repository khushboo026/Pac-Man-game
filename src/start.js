class Start{
    constructor(){
        this.image;
        this.x = 50;
        this.y = 50;
    };
    drawPlayer(){
      //  this.image.imageMode(CENTER)
      push()
      imageMode(CENTER)
        image(this.image,width/2,height/2, 1400, canvasHeight)
        pop()
}
}