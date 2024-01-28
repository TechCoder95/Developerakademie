class World {

    fps = 60;
    character = new Character();
    enemies = [
        new Puffer(),
        new Puffer(),
        new Puffer(),
        new Jelly(),
        new Jelly(),
        new Jelly(),
    ];
    coins = [
        new Coin(),
        new Coin(),
        new Coin(),
    ];
    poison =[
        new Poison(),
        new Poison(),
        new Poison(),
    ];
    backgroundObjects = [
        new BackgroundObject('./img/3.Background/Layers/5.Water/D1.png', 0, 720, 500),
        new BackgroundObject('./img/3.Background/Layers/3.Fondo1/D1.png', 0, 720, 500),	
        new BackgroundObject('./img/3.Background/Layers/4.Fondo2/D1.png', 0, 720, 500),
        new BackgroundObject('./img/3.Background/Layers/2.Floor/D1.png', 0, 720, 500),
        new BackgroundObject('./img/3.Background/Layers/1.Light/1.png', 0, 720, 500),
    ];
    canvas;
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        setTimeout(() => {
            requestAnimationFrame(() => {
                this.draw();
            }, 1000 / this.fps);	
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectstoMap(this.backgroundObjects);
        this.addtoMap(this.character);
        this.addObjectstoMap(this.enemies);
        this.addObjectstoMap(this.coins);
        this.addObjectstoMap(this.poison);
    }


    addObjectstoMap(objects) {
        objects.forEach((object) => {
            this.addtoMap(object);
        });
    
    }

    addtoMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}