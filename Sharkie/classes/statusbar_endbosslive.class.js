class StatusBar_EndbossLive extends DrawableObject{

    IMAGES_LIVE = [
        './img/4.Marcadores/Purple/0_ .png',
        './img/4.Marcadores/Purple/20__1.png',
        './img/4.Marcadores/Purple/40_ .png',
        './img/4.Marcadores/Purple/60_ .png',
        './img/4.Marcadores/Purple/80_ .png',
        './img/4.Marcadores/Purple/100_ .png',
    ];

    bosspercentage = 100;

    /**
     * Represents a status bar for live updates.
     * @constructor
     */
    constructor(){
        super().loadImage('./img/4.Marcadores/Purple/100_ .png');
        this.loadImages(this.IMAGES_LIVE)
        this.x = 500;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setbosspercentage(100);
    }

    
    /**
     * Sets the bosspercentage value for the status bar.
     * @param {number} bosspercentage - The bosspercentage value to set.
     */
    setbosspercentage(bosspercentage){
        this.bosspercentage = bosspercentage;
        this.img = this.resolveImage(); 
    }


    /**
     * Resolves and returns the appropriate image based on the bosspercentage value.
     * @returns {string} The URL of the image.
     */
    resolveImage(){
        if(this.bosspercentage == 100){
            return this.imageCache[this.IMAGES_LIVE[5]];
        }
        if(this.bosspercentage == 80){
            return this.imageCache[this.IMAGES_LIVE[4]];
        }
        if(this.bosspercentage == 60){
            return this.imageCache[this.IMAGES_LIVE[3]];
        }
        if(this.bosspercentage == 40){
            return this.imageCache[this.IMAGES_LIVE[2]];
        }
        if(this.bosspercentage == 20){
            return this.imageCache[this.IMAGES_LIVE[1]];
        }
        if(this.bosspercentage == 0){
            return this.imageCache[this.IMAGES_LIVE[0]];
        }
    }
}