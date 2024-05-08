class Sounds {

    muted = false;


    constructor() {
        this.sounds = {
            Blub: new Audio('./audio/Blub.wav'),
            Coin: new Audio('./audio/Coin.wav'),
            Snoring: new Audio('./audio/Snoring.mp3'),
            Background: new Audio('./audio/Background.mp3'),
            Endboss: new Audio('./audio/Endboss.wav'),
            Gift: new Audio('./audio/Gift.wav'),
            Boom: new Audio('./audio/Boom.flac'),
            Hurt: new Audio('./audio/Hurt.mp3'),
            Win: new Audio('./audio/Win.mp3'),
            YouWin: new Audio('./audio/YouWin.mp3'),
            YouLose: new Audio('./audio/YouLose.mp3'),
        };
    }


    play(sound) {
        this.sounds[sound].play();
    }


    stop(sound) {
        this.sounds[sound].pause();
    }


    playBackground() {
        this.sounds.Background.muted = false;
        this.sounds.Background.play();

    }


    stopBackground() {
        this.sounds.Background.muted = true;
        this.sounds.Background.pause();

    }


    playEndboss() {
        this.sounds.Endboss.muted = false;
        this.sounds.Endboss.play();

    }


    playBlub() {
        this.sounds.Blub.volume = 0.1;
        this.sounds.Blub.play();

    }

    stopEndboss() {
        this.sounds.Endboss.muted = true;
        this.sounds.Endboss.pause();
    }

    playCoin() {
        this.sounds.Coin.volume = 0.1;
        this.sounds.Coin.play();
    }

    playSnoring() {
        this.sounds.Snoring.play();
    }

    stopSnoring() {
        this.sounds.Snoring.muted = true;
        this.sounds.Snoring.pause();
    }

    playGift() {
        this.sounds.Gift.muted = false;
        this.sounds.Gift.volume = 0.1;
        this.sounds.Gift.play();
    }

    playBoom() {
        this.sounds.Boom.muted = false;
        this.sounds.Boom.volume = 0.1;
        this.sounds.Boom.play();
    }

    playHurt() {
        this.sounds.Hurt.muted = false;
        this.sounds.Hurt.volume = 0.1;
        this.sounds.Hurt.play();
    }


    playWin() {
        this.sounds.Win.muted = false;
        this.sounds.Win.volume = 0.1;
        this.sounds.Win.play();
    }

    
    playYouWin() {
        this.sounds.YouWin.muted = false;
        this.sounds.YouWin.volume = 0.1;
        this.sounds.YouWin.play();
    }


    playYouLose() {
        this.sounds.YouLose.muted = false;
        this.sounds.YouLose.volume = 0.1;
        this.sounds.YouLose.play();
    }


}