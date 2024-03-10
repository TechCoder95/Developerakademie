class DrawableObject {

    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 400;
    height = 200;
    width = 200;

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

    drawImage(ctx, img, x, y, width, height) {
        ctx.drawImage(img, x, y, width, height);
    };
}