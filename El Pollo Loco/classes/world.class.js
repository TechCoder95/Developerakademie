class World {

    fps = 60;
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        setTimeout(() => {
            requestAnimationFrame(() => {
                this.draw();
            }, 1000 / this.fps);	
        });
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectstoMap(this.level.backgroundObjects);
        this.addtoMap(this.character);
        this.addObjectstoMap(this.level.enemies);
        this.addObjectstoMap(this.level.coins);
        this.addObjectstoMap(this.level.poison);
        this.ctx.translate(-this.camera_x, 0);
    }


    addObjectstoMap(objects) {
        objects.forEach((object) => {
            this.addtoMap(object);
        });
    
    }

    addtoMap(mo) {
        if (mo.otherDirection) {
            mo.flipImage(this.ctx, mo.img, mo.x, mo.y, mo.width, mo.height);
            // Wenn du das hier liest, hattest du absolut kein Bock mehr auf Sharkie und hast einfach aufgehört!
        }
        else {
            mo.drawImage(this.ctx, mo.img, mo.x, mo.y, mo.width, mo.height);
        }

    }
}