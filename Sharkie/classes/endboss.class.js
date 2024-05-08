class Endboss extends MovableObject {
    height = 520;
    width = 464;
    y = -30;
    energy = 300;
    isHit = false;
    isDead = false;
    isAttacking = false;
    winningScreenIsRenderd = false;
    speed = 55;


    IMAGES_INTRO = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_WALKING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    IMAGES_WIN = [
        'img/6.Botones/Tittles/You win/Recurso 19.png',
        'img/6.Botones/Tittles/You win/Recurso 20.png',
        'img/6.Botones/Tittles/You win/Recurso 21.png',
        'img/6.Botones/Tittles/You win/Recurso 22.png'
    ];

    offset = {
        top: 240,
        left: 30,
        right: 30,
        bottom: 40
    };

    constructor() {
        super().loadImage('./img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.x = 740 * 3 + 150;
        this.y = -100;
        this.speed = 0.1 + Math.random() * 0.2;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_INTRO)
        this.x = 10000;
        this.animate();
        this.attack();

    }

    endbossIsHit() {
        this.energy -= 50;
        if (this.energy > 0) {
            this.isHit = true;
        } else if (this.energy == 0) {
            this.isDead = true;
        }
    };

    endbossIsDead() {
        return this.isDead = true;
    };

    letEndBossDie() {
        this.speedY = 0.03;
        setInterval(() => {
            this.y -= this.speedY;
            this.speedY -= 0.05;
        }, 25)
        setTimeout(() => {
            if (this.winningScreenIsRenderd) {
                setTimeout(() => {
                    location.reload();
                }, 5000)
            } else {
                this.renderWinningScreen()
                this.winningScreenIsRenderd = true;
            }
        }, 500)
    };

    renderWinningScreen() {
        this.winningScreenIsRendered = true;
        let overlay = document.getElementById('overlay');
        overlay.innerHTML = `<img class="youwin" src="./img/6.Botones/Tittles/You win/Recurso 19.png">`;
        let addblurfilter = document.getElementById('canvas');
        addblurfilter.classList.add('blurfilter')
        if (world.sounds.muted == false){
            world.sounds.stopEndboss();
            world.sounds.playWin();
            world.sounds.playYouWin();
        }

    }

    attack() {
        setInterval(() => {
            this.isAttacking = true;
            this.x -= this.speed;
        }, 2000)
        setInterval(() => {
            this.x += this.speed;
        }, 2250)
    };

    hadFirstConcact = false;

    animate() {
        let i = 0
        setInterval(() => {
            if (i < 10) {
                this.playAnimation2(this.IMAGES_INTRO);
                if (this.hadFirstConcact == true) {
                    setTimeout(() => {
                        this.x = 740 * 3 + 150;
                    }, 401);
                }
            }
            else if (this.isHit) {
                this.playAnimation2(this.IMAGES_HURT);
                setTimeout(() => {
                    this.isHit = false;
                }, 4000);
            } else if (this.isDead) {
                this.playAnimation2(this.IMAGES_DEAD);
                this.letEndBossDie();
            } else if (this.isAttacking) {
                this.playAnimation2(this.IMAGES_ATTACK);
                this.isAttacking = false;
            } else {
                this.playAnimation2(this.IMAGES_WALKING);
            }

            i++;

            if (!this.hadFirstConcact) {
                i = 0;
                this.hadFirstConcact = true;
            }
        }, 200);
    }
}