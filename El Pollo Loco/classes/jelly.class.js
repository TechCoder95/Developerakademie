class Jelly extends MovableObject{
    width = 80;
    height = 80;

    IMAGES_WALKING = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    constructor(){
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.x = 300 + Math.random() * (740*2.5);
        this.y = 50 + Math.random() * 400;
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.02 + Math.random() * 0.1;
        this.animate();
    }
    
    animate(){
        this.moveUp();
        this.playAnimation(120);
    }
}