var filePath;

//Die Variablen für die Navigation
var homepage = 'sides/homepage.html';
var contact = 'sides/contact.html';
var impressum = 'sides/impressum.html';

var knezovic = 'sides/recipes/knezovic.html';
var pathperson2 = 'sides/recipes/...';
var pathperson3 = 'sides/recipes/...';


function navigation() {
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML += /*html*/`
    
    <head>
<link rel="stylesheet" href="css/navigation.css">
</head>
    <div class="header">
        <a href="index.html"><img src="assets/img/logo.png" alt="Kochwelt"></a>
        <nav class="navigation">
            <ul class="flex-around">
                <a onclick="side_load(homepage),witch_side('start')" href="#" id="start" style="">Start</a>
                <a onclick="side_load(knezovic),witch_side('recipeofday')" href="#" id="recipeofday" style="">Rezept des Tages</a>
                <a onclick="side_load(contact),witch_side('contact')" href="#" id="contact" style="">Kontakt</a>
                <a onclick="side_load(impressum),witch_side('impressum')" href="#" id="impressum" style="">Impressum</a>
            </ul>
        </nav>
    </div>
    `;
}

function witch_side(id){
  document.getElementById(id).style = 'color: green; border-bottom: 5px solid green';
}



function side_load(path) {
    navigation();
    switchsides(path);
};


function switchsides(path){
    filePath = path;
    // Fetch-API verwenden, um den Inhalt der Datei abzurufen
    fetch(filePath)
      .then(response => {
        // Überprüfen, ob die Anfrage erfolgreich war (Statuscode 200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Den Text der Antwort extrahieren
        return response.text();
      })
      .then(data => {
        // Den Text in das HTML-Element einfügen
        document.getElementById("content").innerHTML += data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}