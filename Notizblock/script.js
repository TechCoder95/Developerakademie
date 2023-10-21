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
        <button onclick="addNote()">Hinzufügen</button>
        
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
            <button onClick="deleteNote(${i})">Löschen</button>
        </div> `;
    }
}

function addNote() {
    let titles = document.getElementById('ititle');
    let texts = document.getElementById('itext');


    if(titles.value =='' || texts.value == ''){
        
        alert("Fülle die Felder aus du plep!")
    
    }
    else{
        let topush = {title :`${titles.value}`, text: `${texts.value}`}
        notes.push(topush);
    
        console.log(notes);
    
        save();
        render();
    
    }

}

function deleteNote(i) {
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