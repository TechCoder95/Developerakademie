class MovableObject {
    x = 120;
    y = 400;

    img;
    height = 200;
    width = 200;
    imageCache = [];
    currentImage = 0;
    speed;
    speedY = 0;
    acceleration = 1;

    otherDirection = false;

    applyGravity() {
        setInterval(() => {
            if (this.y < 300) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
            
        }, 1000 / 25);
    };

    drawImage(ctx ,img, x, y, width, height) {
        ctx.drawImage(img, x, y, width, height);
        if (this instanceof Character || this instanceof Coin || this instanceof Poison || this instanceof Puffer || this instanceof Jelly || this instanceof Endboss) {
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "red";
        ctx.rect(x, y, width, height);
        ctx.stroke();
        }
    };

    flipImage( ctx, img, x, y, width, height) {
            ctx.save();
            ctx.translate(x + width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(img, 0, y, width, height);
            ctx.restore();

            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect(x, y, width, height);
            ctx.stroke();
    }



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    loadImages(arr) {
        arr.forEach((src) => {
            let img = new Image(); // Declare the img variable properly
            img.src = src;
            this.imageCache[src] = img;
        });
    };

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