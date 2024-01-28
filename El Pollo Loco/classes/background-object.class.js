class BackgroundObject extends MovableObject {
    
    width = 720;
    height = 480;

    constructor(imagePath, x, width, height) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.width = width;
        this.height = height;
    }
    
}