class Puffer extends MovableObject{
    width = 80;
    height = 80;

    IMAGES_WALKING = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    constructor(){
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.x = 300 + Math.random() * 500;
        this.y = 50 + Math.random() * 200;
        this.loadImages(this.IMAGES_WALKING);
        
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }
    
    animate(){
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }

}