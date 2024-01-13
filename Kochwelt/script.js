var filePath;

//Die Variablen für die Navigation
var homepage = 'sides/homepage.html';
var contact = 'sides/contact.html';
var impressum = 'sides/impressum.html';

var knezovic = 'sides/recipes/knezovic/knezovic.html';
var pathperson2 = 'sides/recipes/.../...';
var pathperson3 = 'sides/recipes/.../...';


function navigation() {
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML += /*html*/`
    
    <!-- Stylesheet für die Navigation -->
    <head>
      <link rel="stylesheet" href="css/navigation.css">
    </head>
    <!-- Einbau der Navigation -->
    <div class="header">
        <a href="index.html"><img src="assets/img/logo.png" alt="Kochwelt"></a>
        <nav class="navigation">
            <ul class="flex-around">
                <a onclick="side_load(homepage,'start')" href="#" id="start" style="">Start</a>
                <a onclick="side_load(knezovic,'recipeofday'), table_load()" href="#" id="recipeofday" style="">Rezept des Tages</a>
                <a onclick="side_load(contact, 'contact')" href="#" id="contact" style="">Kontakt</a>
                <a onclick="side_load(impressum, 'impressum')" href="#" id="impressum" style="">Impressum</a>
            </ul>
        </nav>
    </div>
    `;
}


//Das ist die Hauptfunktion!
function side_load(path,id) {
    navigation();
    switch_sides(path);
    witch_side(id);
};

function witch_side(id){
  document.getElementById(id).style = 'color: green; border-bottom: 5px solid green';
}

function switch_sides(path){
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
        footer();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

// 

function footer(){
  document.getElementById('content').innerHTML += /*html*/`
    
    <head>
      <link rel="stylesheet" href="css/footer.css">
    </head>
    <div class="footer">
      
    </div>
  `;

}