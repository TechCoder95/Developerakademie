let canvas;
let world;
let keyboard = new Keyboard();


function startgame() {
    document.getElementById('overlay').innerHTML = /*html*/`
            <div id="startscreen">
                <div id="controlls">
                    <img class="instructions" src="img/6.Botones/Instructions 1.png">
                    <img class="fullscreenbutton" src="img/6.Botones/Full Screen/Mesa de trabajo 9.png" onclick="enablefullscreen()">
                </div>
                <div id="startgame">
                    <img class="startgamebutton" src="img/6.Botones/Start/1.png" onclick="init()">
                </div>
            </div>   
    `;
}


function init() {
    let removeblurfilter = document.getElementById('canvas');
    removeblurfilter.classList.remove('blurfilter')
    document.getElementById('overlay').innerHTML = ` `
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard)
    playAudio();

}


window.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowLeft') {
        keyboard.LEFT = true;
        world.idletime = 0;
    }
    if (event.key === 'ArrowRight') {
        keyboard.RIGHT = true;
        world.idletime = 0;
    }
    if (event.key === 'ArrowUp') {
        keyboard.UP = true;
        world.idletime = 0;
    }
    if (event.key === 'ArrowDown') {
        keyboard.DOWN = true;
        world.idletime = 0;
    }
    if (event.key === ' ') {
        keyboard.SPACE = true;
        world.idletime = 0;
    }
    if (event.key === 'd') {
        keyboard.D = true;
        world.idletime = 0;
            world.sounds.playBlub();
    }
});


window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') {
        keyboard.LEFT = false;
        world.idletime = 0;
    }
    if (event.key === 'ArrowRight') {
        keyboard.RIGHT = false;
        world.idletime = 0;
    }
    if (event.key === 'ArrowUp') {
        keyboard.UP = false;
        world.idletime = 0;
    }
    if (event.key === 'ArrowDown') {
        keyboard.DOWN = false;
        world.idletime = 0;
    }
    if (event.key === ' ') {
        keyboard.SPACE = false;
        world.idletime = 0;
    }
    if (event.key === 'd') {
        keyboard.D = false;
        world.idletime = 0;
    }
});


function stopAudio() {
    // document.getElementById('stopAudio').src = "./img/7. Mobile/SoundOf.png";
    if (world.sounds.muted) {
        world.sounds.muted = false; 
        world.sounds.sounds.Snoring.muted = false;
        world.sounds.sounds.Blub.muted = false;
        world.sounds.sounds.Coin.muted = false;
        world.sounds.sounds.Background.muted = false;
        world.sounds.sounds.Endboss.muted = false;
        world.sounds.sounds.Gift.muted = false;
        world.sounds.sounds.Boom.muted = false;

           playAudio();
    } else {
        world.sounds.muted = true;
        world.sounds.sounds.Snoring.muted = true;
        world.sounds.sounds.Blub.muted = true;
        world.sounds.sounds.Coin.muted = true;
        world.sounds.sounds.Background.muted = true;
        world.sounds.sounds.Endboss.muted = true;
        world.sounds.sounds.Gift.muted = true;
        world.sounds.sounds.Boom.muted = true;
        
    }

}
;


function playAudio() {


        if (world.character.x > 800 * 2) {
            world.sounds.stopBackground();
            world.sounds.playEndboss();
        }
        else
            world.sounds.playBackground();
    
}


function enablefullscreen() {
    if (document.fullscreenElement == "" || document.fullscreenElement == null) {
        document.getElementById('canvas').style.width = "1200px"
        document.getElementById('canvas').style.height = "800px"
        document.getElementById('fixedButtons').style.right = "420px"
        document.documentElement.requestFullscreen().catch((e) => {
        });
    } else {
        document.exitFullscreen();
        document.getElementById('canvas').style.width = "720px"
        document.getElementById('canvas').style.height = "480px"
        document.getElementById('fixedButtons').style.right = "310px"
    };
};

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === null) {
        document.getElementById('canvas').style.width = "720px";
        document.getElementById('canvas').style.height = "480px";
        document.getElementById('fixedButtons').style.right = "420px"
    } else {
        document.getElementById('canvas').style.width = "1200px";
        document.getElementById('canvas').style.height = "800px";
        document.getElementById('fixedButtons').style.right = "310px"
    };

});

function realod() {
    location.reload();
};