class MovableObject {
    x = 120;
    y = 400;

    img;
    height = 200;
    width = 200;
    imageCache = [];
    currentImage = 0;
    speed;

    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

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