class Jelly extends MovableObject {
    height = 100;
    width = 80;
    speedY = 0;
    energy = 50;

    IMAGES_WALKING = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    IMAGES_JELLY_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
    ];

    constructor() {
        super().loadImage('./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.x = 300 + Math.random() * (740 * 2.5);
        this.y = 50 + Math.random() * 400;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JELLY_DEAD);
        this.speed = 0.02 + Math.random() * 0.1;
        this.animate();
    }

    animate() {

        this.playAnimation(120);
    }
    jellyFishIsHit() {
        this.energy -= 50;
        if (this.energy < 0) {
            this.energy = 0;
        };
    };
    raiseDead() {
        this.speedY = 0.03;
        setInterval(() => {
            this.x += 2;
            this.y -= this.speedY;
            this.speedY += 0.1;
        }, 25)
    };
    jellyFishIsDead() {
        return this.energy == 0;
    };
    animate() {
        this.moveUp();
        setInterval(() => {
            if (this.jellyFishIsDead()) {
                this.playAnimation2(this.IMAGES_JELLY_DEAD);
                this.raiseDead();
            } else {
                this.playAnimation2(this.IMAGES_WALKING);
            }
        }, 200);
    }






}