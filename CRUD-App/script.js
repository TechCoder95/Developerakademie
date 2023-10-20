//#region [Variablen]
//Arrays
let names = ['Dominik Knezovic', 'Jana Knezovic']; //Die Namen im Kontaktbuch als Array
let phonenumbers = ['0123456789', '9876543210']; // Die Telefonnummern im Kontaktbuch als Array
//#endregion

load();

function render() {
    //Die Variable "content" deklariert mit dem Inhalt aus der ID content
    let content = document.getElementById('content')
    content.innerHTML = ''; //Löschtalles aus der "Content" - Div 
    content.innerHTML += /*html*/`
    
    <h1>My Contacts</h1>
    <div>
        <input placeholder="Name" id="iname">
        <input placeholder="Telefonnummer" id="iphone">
        <button onclick="addContact()">Hinzufügen</button>
        
    </div> `; //+= fügt hinzu was da drin steht

    //Willst du mehrere Sachen aus einem Array anzeigen lassen willst, nimmt man eine For-Schleife
    for (let i = 0; i < names.length; i++) {
        const name = names[i]; //Wert aus Array in die neue Constante "name"
        const phonenumber = phonenumbers[i]; //Wert aus Array in die neue Constante "phonenumber"

        content.innerHTML += /*html*/`
        <div class="card">
            <b>Name:</b> ${name} <br> 
            <b>Telefon: </b> ${phonenumber} <br>
            <button onClick="deleteContact(${i})">Löschen</button>
        </div> `;
    }
}

function addContact() {
    let name = document.getElementById('iname');
    let phone = document.getElementById('iphone');
    names.push(iname.value);
    phonenumbers.push(iphone.value);

    save();
    render();
}

function deleteContact(i) {
    names.splice(i, 1);
    phonenumbers.splice(i, 1);

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
    saveArrayToLocalStorage('kname', names);
    saveArrayToLocalStorage('knumber', phonenumbers);
}

function load() {

    if (loadArrayToLocalStorage('kname') && loadArrayToLocalStorage('knumber')) {
        names = loadArrayToLocalStorage('kname');
        phonenumbers = loadArrayToLocalStorage('knumber');

    }
}