class Cherry{
    constructor(){
        this.image;
        this.x;
        this.y;
    }

    drawCherry(){
        image(this.image,100,100,50,50)
        image(this.image,1330,100,50,50)
        image(this.image,100,920, 50, 50)
        image(this.image,1330,920,50,50)
    }
}