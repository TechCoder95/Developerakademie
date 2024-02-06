class World {

    fps = 60;
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusbar_live = new StatusBar_live();
    statusbar_coins = new StatusBar_coins();
    statusbar_poison = new StatusBar_poison();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisons();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisons() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hitEnemy();
                    this.statusbar_live.setPercentage(this.character.energy);
                    console.log(this.character.energy);
                    if (this.character.energy <= 0) {
                        this.character.setDead();
                    }
                }
            });
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.level.coins = this.level.coins.filter((c) => c != coin);
                    this.character.addCoin();
                    this.statusbar_coins.setPercentage(this.character.coins);
                    console.log(this.character.coins);
                }
            });
            this.level.poison.forEach((poison) => {
                if (this.character.isColliding(poison)) {
                    this.level.poison = this.level.poison.filter((c) => c != poison);
                    this.character.hitPoison();
                    this.character.addPoison();
                    this.statusbar_poison.setPercentage(this.character.poison);
                    this.statusbar_live.setPercentage(this.character.energy);
                    
                    console.log(this.character.poison);
                    console.log(this.character.energy);
                    if (this.character.energy <= 0) {
                        this.character.setDead();
                    }
                }
            });
        }, 1000);
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
        this.ctx.translate(-this.camera_x, 0);
        this.addtoMap(this.statusbar_live);
        this.addtoMap(this.statusbar_coins);
        this.addtoMap(this.statusbar_poison);
        this.ctx.translate(this.camera_x, 0);
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


    gameOver() {
        console.log("Game Over");
    }
}