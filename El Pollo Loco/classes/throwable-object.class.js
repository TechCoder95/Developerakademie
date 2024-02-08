class ThrowableObject extends MovableObject{    
    constructor(x,y){
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.width = 40;
        this.height = 40;
        this.speed = 10;
        this.throw(x,y);
    }

    throw(x,y){
        this.x = x;
        this.y = y;
        this.speedX = -5;
        setInterval(() => {
            this.x -= this.speedX;
        }, 25);
    }
}