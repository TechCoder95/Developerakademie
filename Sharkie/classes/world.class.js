class World {

    fps = 60;
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    idletime = 0;
    statusbar_live = new StatusBar_live();
    statusbar_coins = new StatusBar_coins();
    statusbar_poison = new StatusBar_poison();
    throwableObjects = [];
    hasExecuted = false;
    enemy = new Jelly();
    endboss = new Endboss();
    sounds = new Sounds();


    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.run();
    }


    setWorld() {
        this.character.world = this;

    }


    run() {
        this.draw();
        this.setWorld();
        this.checkCollisons();
        this.checkIdleTime();
    }


    checkIdleTime() {
        setInterval(() => {
            if (this.keyboard.RIGHT || this.keyboard.LEFT || this.keyboard.UP || this.keyboard.DOWN || this.keyboard.SPACE || this.keyboard.D)
                this.idletime = 0;
            else
                this.idletime++;
        }, 500);
    }


    checkThrowableObjects() {
        if (this.hasExecuted == false && this.keyboard.D) {
            this.hasExecuted = true;
            setTimeout(() => {
                let bubble = new ThrowableObject(this.character.x + this.character.width - 30, this.character.y + this.character.height / 2);
                this.throwableObjects.push(bubble);
            }, 600);
            setTimeout(() => {
                this.hasExecuted = false;
            }, 800);
        }
    }


    checkCollisons() {
        setInterval(() => {
            this.checkenemyCollisions();
            this.checkendbossCollisions();
        }, 1000);
        setInterval(() => {
            this.checkcoinCollisions();
            this.checkpoisonCollisions();
            this.checkThrowableObjects();
            this.checkbubbleCollisions();
        }, 1000 / 60);
    }


    checkenemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isCollidingcharacter(enemy)) {
                this.character.hitEnemy();
                this.statusbar_live.setPercentage(this.character.energy);
                if (this.character.energy <= 0) {
                    this.character.setDead();
                }
                if (this.sounds.muted == false && this.character.energy > 0)
                    this.sounds.playHurt();

            }
        });
    }


    checkcoinCollisions() {
        this.level.coins.forEach((coin) => {
            if (this.character.isCollidingcharacter(coin)) {
                this.level.coins = this.level.coins.filter((c) => c != coin);
                this.character.addCoin();
                this.statusbar_coins.setPercentage(this.character.coins);
                    ;
            }
        });
    }


    checkpoisonCollisions() {
        this.level.poison.forEach((poison) => {
            if (this.character.isCollidingcharacter(poison)) {
                this.level.poison = this.level.poison.filter((c) => c != poison);
                this.character.hitPoison();
                this.character.addPoison();
                this.statusbar_poison.setPercentage(this.character.poison);
                this.statusbar_live.setPercentage(this.character.energy);
                if (this.sounds.muted == false)
                this.sounds.playGift();
                if (this.character.energy <= 0) {
                    this.character.setDead();
                }
            }
        });
    }


    checkbubbleCollisions() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bubble) => {

                if (enemy.isColliding(bubble)) {
                    this.throwableObjects = this.throwableObjects.filter((b) => b != bubble);
                    enemy.jellyFishIsHit();
                    if (world.sounds.muted == false)
                    world.sounds.playBoom();
                }
            });
        });

    }


    checkendbossCollisions() {
        this.throwableObjects.forEach((bubble) => {
            if (this.endboss.isColliding(bubble)) {
                this.throwableObjects = this.throwableObjects.filter((b) => b != bubble);
                this.endboss.endbossIsHit();
            }
        });

        if (this.character.isCollidingcharacter(this.endboss)) {
            this.character.hitEnemy();
            this.statusbar_live.setPercentage(this.character.energy);
            if (this.character.energy <= 0) {
                this.character.setDead();
            }
        };
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
        this.addObjectstoMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addtoMap(this.statusbar_live);
        this.addtoMap(this.statusbar_coins);
        this.addtoMap(this.statusbar_poison);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectstoMap(this.level.enemies);
        this.addtoMap(this.endboss);
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
        if (!mo.otherDirection) {
            mo.drawImage(this.ctx, mo.img, mo.x, mo.y, mo.width, mo.height);
        }
        else {
            mo.flipImage(this.ctx, mo.img, mo.x, mo.y, mo.width, mo.height);
        }
    }


    gameOver() {
        document.getElementById('overlay').innerHTML =
            `<img class="gameover" src="img/6.Botones/Tittles/Game Over/Recurso 10.png">
            <img class="tryagainbutton" src="img/6.Botones/Try again/Recurso 16.png" onclick="realod()">`;
        let addBlurToElement = document.getElementById('canvas');
        addBlurToElement.classList.add('blurfilter');

        //Gameover Sound
        if (this.sounds.muted == false && this.character.energy <= 0) {
            this.sounds.stopEndboss();
            this.sounds.stopBackground();
            this.sounds.playWin();
            this.sounds.playYouLose();
        }

    }


    startgame() {
        document.getElementById('overlay').innerHTML =
            `<img class="gameover" src="img/6.Botones/Tittles/Game Over/Recurso 10.png">
            <img class="tryagainbutton" src="img/6.Botones/Try again/Recurso 16.png" onclick="realod()">`;
        let addBlurToElement = document.getElementById('canvas');
        addBlurToElement.classList.add('blurfilter');
    }


}