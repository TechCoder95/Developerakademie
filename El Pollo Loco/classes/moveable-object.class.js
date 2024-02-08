class MovableObject extends DrawableObject {

    speed;
    speedY = 0;
    acceleration = 1;
    offsetY = 0;
    energy = 100;
    lastHit = 0;
    isDead = false;
    coins = 0;
    poison = 0;

    xOffset = 10;
    yOffset = 80;


    otherDirection = false;

    applyGravity() {
        setInterval(() => {
            if (this.y < 300) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 25);
    };


    flipImage(ctx, img, x, y, width, height) {
        ctx.save();
        ctx.translate(x + width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, y, width, height);
        ctx.restore();

        // ctx.beginPath();
        // ctx.lineWidth = "2";
        // ctx.strokeStyle = "red";
        // ctx.rect(x, y, width, height);
        // ctx.stroke();
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height ;
    };

    
    isCollidingcharacter(mo) {
        

        return this.x + this.width - this.xOffset > mo.x &&
            this.y + this.height - this.yOffset > mo.y &&
            this.x + this.xOffset < mo.x + mo.width &&
            this.y + this.yOffset < mo.y + mo.height ;
    };


    hitEnemy() {
        this.energy -= 10;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    addPoison() {
        this.poison += 20;
    }

    addCoin() {
        this.coins += 20;
    };

    hitPoison() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    setDead() {
        return this.energy == 0;
    };

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isPoisend() {
        let timePassed = new Date().getTime() - this.lastHit;
        return timePassed < 1000;
    }


    playAnimation2(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 144);
    };


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 144);
    }

    moveUp() {
        setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 144);
    }

    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 144);
    }

    playAnimation(fps) {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, fps);
    }

}