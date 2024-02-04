class Level{
    enemies;
    coins;
    poison;
    backgroundObjects;
    level_end_x = 720*4 - 550;

    constructor(enemies, coins, poison, backgroundObjects){
        this.enemies = enemies;
        this.coins = coins;
        this.poison = poison;
        this.backgroundObjects = backgroundObjects;
    }

}