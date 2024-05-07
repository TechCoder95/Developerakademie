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


    stopEndboss() {
        this.sounds.Endboss.muted = true;
        this.sounds.Endboss.pause();
    }


    playEndboss() {
        this.sounds.Endboss.muted = false;
        this.sounds.Endboss.play();

    }


    playBlub() {
        this.sounds.Blub.volume = 0.1;
        this.sounds.Blub.play();

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

    stopGift() {
        this.sounds.Gift.muted = true;
        this.sounds.Gift.pause();
    }

    playBoom() {
        this.sounds.Boom.muted = false;
        this.sounds.Boom.volume = 0.1;
        this.sounds.Boom.play();
    }

    stopBoom() {
        this.sounds.Boom.muted = true;
        this.sounds.Boom.pause();
    }


}