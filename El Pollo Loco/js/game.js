let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    keyboard.listenForEvents();
    keyboard.subscribe(world.character);
    
}

