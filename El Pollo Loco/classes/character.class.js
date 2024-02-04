class Character extends MovableObject {

    IMAGES_WALKING = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png'
    ];
    world;

    constructor() {
        super().loadImage('./img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 100;
        this.y = 50;

        this.animate();
    };

    animate() {

        setInterval(() => {
            this.move();
        }, 1000 / 60);
        setInterval(() => {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }}, 100);
    };

    move() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x - 100) {
            this.x += 5;
            this.otherDirection = false;
            this.world.camera_x -= 5;
        }
        if (this.world.keyboard.LEFT && this.x > 100) {
            this.x -= 5;
            this.otherDirection = true;
            this.world.camera_x += 5;
        }
        if (this.world.keyboard.UP && this.y > -90) {
            this.y -= 5;
        }
        if (this.world.keyboard.DOWN && this.y < 320) {
            this.y += 5;
        }
    };
};

