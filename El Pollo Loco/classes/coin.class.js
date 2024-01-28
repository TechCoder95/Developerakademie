class Coin extends MovableObject {

    height = 50;
    width = 50;


    IMAGES_WALKING = [
    './img/4.Marcadores/1.Coins/1.png',
    './img/4.Marcadores/1.Coins/2.png',
    './img/4.Marcadores/1.Coins/3.png',
    './img/4.Marcadores/1.Coins/4.png',
    ];

    constructor(){
        super().loadImage('./img/4.Marcadores/1.Coins/1.png');
        this.x = 300 + Math.random() * 500;
        this.y = 50 + Math.random() * 200;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }
   

    animate(){
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 150);
    }
}