//#region [Variablen]
//Arrays
let notes = [{"title":"Meine erste Notiz", "text":"Dies ist die erste Notiz"}, {"title":"Meine zweite Notiz", "text":"Dies ist die zweite Notiz"}];

//#endregion

load();

function render() {
    //Die Variable "content" deklariert mit dem Inhalt aus der ID content
    let content = document.getElementById('content')
    content.innerHTML = ''; //Löscht alles aus der "Content" - Div 
    content.innerHTML += /*html*/`


    <div class="eingabe">
        <h2>Willkommen bei meinen Notizen</h2>
        <input placeholder="Title" id="ititle">
        <textarea placeholder="Schreibe etwas..." id="itext" ></textarea>
        <button onclick="addContact()">Hinzufügen</button>
        
    </div> `; //+= fügt hinzu was da drin steht

    //Willst du mehrere Sachen aus einem Array anzeigen lassen willst, nimmt man eine For-Schleife
    for (let i = notes.length-1; i >= 0; i--) {
        console.log(i);
        const title = notes[i].title; //Wert aus Array in die neue Constante "Titel der Notiz"
        const text = notes[i].text; //Wert aus Array in die neue Constante "Text der in der Notiz steht"

        content.innerHTML += /*html*/`
        <div class="card">
            <b> ${title} </b><br> 
            ${text} <br><br>
            <button onClick="deleteContact(${i})">Löschen</button>
        </div> `;
    }
}

function addContact() {
    // Hier werden die Variablen aus der Input gelesen
    let x = document.getElementById('ititle');
    let y = document.getElementById('itext');


    if(x.value =='' || y.value == ''){
        
        alert("Fülle die Felder aus du plep!")
    
    }
    else{
        let topush = {title :`${x.value}`, text: `${y.value}`}
        notes.push(topush);
    
        save();
        render();
    
    }

}

function deleteContact(i) {
    notes.splice(i, 1);

    save();
    render();
}



//Array in local Storage speichern
function saveArrayToLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

//Array aus Local Storage lesen
function loadArrayToLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function save() {
    saveArrayToLocalStorage('note', notes);
}

function load() {

    if (loadArrayToLocalStorage('note')) {
        notes = loadArrayToLocalStorage('note');

    }
}



//API Coding! - Modul 9

// 4. Möglichkeit
async function init() {
    let [resp, err] = await resolve(fetch('bundesland.json'));
    if (resp) {
        console.log('Fertig');
    } 
    
    if(err){
        console.error('Fehler');
    }
}

async function resolve(p) {
    try {
        let response = await p;
        return [response, null];
    } catch (e) {
        return [null, e];
    }
}