let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    let removeblurfilter = document.getElementById('canvas');
    removeblurfilter.classList.remove('blurfilter')
    document.getElementById('overlay').innerHTML = ` `
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard)

}



window.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.key === 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (event.key === 'ArrowUp') {
        keyboard.UP = true;
    }
    if (event.key === 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (event.key === ' ') {
        keyboard.SPACE = true;
    }
    if (event.key === 'd') {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.key === 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (event.key === 'ArrowUp') {
        keyboard.UP = false;
    }
    if (event.key === 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (event.key === ' ') {
        keyboard.SPACE = false;
    }
    if (event.key === 'd') {
        keyboard.D = false;
    }
});


function stopAudio() {
    let imgsrc = document.getElementById('stopAudio').src
    if (imgsrc.includes("On")) {
        document.getElementById('stopAudio').src = "./img/7. Mobile/SoundOf.png";
        world.character.isMuted = true;
        world.isMuted = true;
        world.endboss.isMuted = true;
    } else if (imgsrc.includes("Of")) {
        document.getElementById('stopAudio').src = "./img/7. Mobile/SoundOn.png"
        world.character.isMuted = false;
        world.isMuted = false;
        world.endboss.isMuted = false;
    }

};
/**
 * function to set canvas to fullscreen and normal screen 
 */
function enablefullscreen() {
    if (document.fullscreenElement == "" || document.fullscreenElement == null) {
        document.getElementById('canvas').style.width = "936px"
        document.getElementById('canvas').style.height = "624px"
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
/** 
 * function is needed that the fullscreen is not only can used by button, also by esc button on keyboard
 */
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === null) {
        document.getElementById('canvas').style.width = "720px";
        document.getElementById('canvas').style.height = "480px";
        document.getElementById('fixedButtons').style.right = "420px"
    } else {
        document.getElementById('canvas').style.width = "936px";
        document.getElementById('canvas').style.height = "624px";
        document.getElementById('fixedButtons').style.right = "310px"
    };

});

function realod(){
    location.reload();
};


