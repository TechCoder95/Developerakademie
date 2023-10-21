//#region [Global Vars]

//Arrays
let pics = [
    'img/img9.jpeg',
    'img/img10.jpeg',
    'img/img11.jpeg',
    'img/img12.jpeg',
    'img/img13.jpeg',
    'img/img14.jpeg',
    'img/img15.jpeg',
    'img/img16.jpeg',
    'img/img17.jpeg',
    'img/img18.jpeg',
    'img/img19.jpeg',
    'img/img20.jpeg',
    'img/img21.jpeg',
    'img/img22.jpeg',
    'img/img23.jpeg',
    'img/img24.jpeg',
    'img/img25.jpeg',
    'img/img26.jpeg',
    'img/img27.jpeg',
    'img/img28.jpeg',
    'img/img29.jpeg',
    'img/img30.jpeg',
    'img/img31.jpeg',
    'img/img32.jpeg',
    'img/img33.jpeg',
    'img/img34.jpeg',
    'img/img35.jpeg',
    'img/img36.jpeg'
];

//#endregion

//#region [Render]

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += /*html*/`

    <div class="topbar"><h1>Willkommen in meiner Galerie!</h1></div>
    
    `;

    for (let i = 0; i < pics.length; i++) {
        content.innerHTML += renderpics(i);
    }

}

//#endregion

//#region [Functions]

function renderpics(id) {
    let path = pics[id];
    let newpics = /*html*/`
    
    <div class="picture"><img onclick="openDialog(${id})" class="bilder" src="${path}"></div>
    `
    return newpics;


}

function openDialog(id) {
    document.getElementById('dialog').classList.remove('d-none')
    getPic(id);
}

function closeDialog() {
    document.getElementById('dialog').classList.add('d-none');
}



function getPic(id) {
    document.getElementById('bigpic').src = pics[id];
}

//#endregion


//#region [Save/Read]

//Array in local Storage speichern
function saveArrayToLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

//Array aus Local Storage lesen
function loadArrayToLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function save(key, array) {
    saveArrayToLocalStorage(key, array);
}

function load(key) {

    if (loadArrayToLocalStorage(key)) {
        notes = loadArrayToLocalStorage(key);

    }
}

//#endregion