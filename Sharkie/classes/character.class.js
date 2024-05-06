class Character extends MovableObject {

    IMAGES_WALKING = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_DEAD = [
        './img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_HURT = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];

    IMAGES_ELECTROCUTED = [
        './img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];

    IMAGES_ATTACK = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];

    IMAGES_IDLE = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_LONG_IDLE = [
        './img/1.Sharkie/2.Long_IDLE/i1.png',
        './img/1.Sharkie/2.Long_IDLE/i2.png',
        './img/1.Sharkie/2.Long_IDLE/i3.png',
        './img/1.Sharkie/2.Long_IDLE/i4.png',
        './img/1.Sharkie/2.Long_IDLE/i5.png',
        './img/1.Sharkie/2.Long_IDLE/i6.png',
        './img/1.Sharkie/2.Long_IDLE/i7.png',
        './img/1.Sharkie/2.Long_IDLE/i8.png',
        './img/1.Sharkie/2.Long_IDLE/i9.png',
        './img/1.Sharkie/2.Long_IDLE/i10.png',
        './img/1.Sharkie/2.Long_IDLE/i11.png',
        './img/1.Sharkie/2.Long_IDLE/i12.png',
        './img/1.Sharkie/2.Long_IDLE/i13.png',
    ];

    IMAGES_SLEEP = [
        './img/1.Sharkie/2.Long_IDLE/i11.png',
        './img/1.Sharkie/2.Long_IDLE/i12.png',
        './img/1.Sharkie/2.Long_IDLE/i13.png',
    ];


    world;

    constructor() {
        super().loadImage('./img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ELECTROCUTED);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.x = 100;
        this.y = 50;
        this.animate();
    };

    animate() {




        setInterval(() => {
            this.move();
        }, 1000 / 60);
        setInterval(() => {
            if (this.setDead()) {
                this.playAnimation2(this.IMAGES_DEAD);
                this.stayInLastFrame();
                this.world.gameOver();
            }
            else if (this.isHurt() && this.energy > 0) {
                this.playAnimation2(this.IMAGES_HURT);
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation2(this.IMAGES_WALKING);
                
                this.world.sounds.stopSnoring();
            }
            else if (this.world.keyboard.D) {
                this.playAnimation2(this.IMAGES_ATTACK);
            }
            else if (this.world.idletime > 0 && this.energy > 0 && this.world.idletime < 20) {
                this.playAnimation2(this.IMAGES_IDLE);
            }
            else if (this.world.idletime == 20) {
                this.playAnimation2(this.IMAGES_LONG_IDLE);
                
            }
            else if (this.world.idletime > 21) {
                this.playAnimation2(this.IMAGES_SLEEP);
                this.world.sounds.playSnoring();
            }

        }, 1000 / 10);
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

    stayInLastFrame() {
        setTimeout(() => {
            this.currentImage = this.IMAGES_DEAD.length - 1;
        }, 1000);
    };

    
};
