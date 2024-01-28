class MovableObject{
    x =120;
    y =400;

    img;
    height = 200;
    width = 200;
    imageCache = [];
    currentImage = 0;
    speed;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((src) => {
            let img = new Image(); // Declare the img variable properly
            img.src = src;
            this.imageCache[src] = img;
        });
    };

    moveRight(){
        setInterval(() => {
            this.x += this.speed;
        }, 1000 /144);
    };


    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 /144); 
    }

    moveUp(){
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 /144);
    }

    moveDown(){
        setInterval(() => {
            this.y += this.speed;
        }, 1000 /144);
    }

    jump(){
        setInterval(() => {
            this.y -= 100;
        }, 1000 /144);
    }

    
}