//#region [Variablen]
//Arrays
let notes = [{"title":"awda", "text":"wadad"}, {"title":"awda", "text":"wadad"}];

//#endregion

load();

function render() {
    //Die Variable "content" deklariert mit dem Inhalt aus der ID content
    let content = document.getElementById('content')
    content.innerHTML = ''; //Löscht alles aus der "Content" - Div 
    content.innerHTML += /*html*/`

    <div class="navigation">
        <ul>
            <a href="index.html" >Notizen</a>
            <a href="trash.html" >Trash</a>
        </ul>

    </div>


    <div class="eingabe">
        <h2>Willkommen bei meinen Notizen</h2>
        <input placeholder="Title" id="ititle">
        <textarea placeholder="Schreibe etwas..." id="itext" ></textarea>
        <button onclick="addContact()">Hinzufügen</button>
        
    </div> `; //+= fügt hinzu was da drin steht

    //Willst du mehrere Sachen aus einem Array anzeigen lassen willst, nimmt man eine For-Schleife
    for (let i = notes.length-1; i >= 0; i--) {
        console.log(i);
        const title = notes[i].title; //Wert aus Array in die neue Constante "name"
        const text = notes[i].text; //Wert aus Array in die neue Constante "phonenumber"

        content.innerHTML += /*html*/`
        <div class="card">
            <b> ${title} </b><br> 
            ${text} <br><br>
            <button onClick="deleteContact(${i})">Löschen</button>
        </div> `;
    }
}

function addContact() {
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

function deleteContact(i) {
    notes.splice(i, 1);

    save();
    render();
}



function content2(){
    let content2 = document.getElementById('content2')
    content2.innerHTML = ''; //Löscht alles aus der "Content" - Div 
    content2.innerHTML += /*html*/`
    <div class="navigation2">
        <ul>
            <a href="" onclick="render()">Notizen</a>
            <a href="" onclick="render2()">Trash</a>
        </ul>

    </div>`;




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