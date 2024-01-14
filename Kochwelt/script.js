var filePath;

//Die Variablen für die Navigation
var homepage = 'sides/homepage.html';
var contact = 'sides/contact.html';
var impressum = 'sides/impressum.html';

//Die Variablen für die Rezepte
var knezovic = 'sides/recipes/knezovic/knezovic.html';
var knezovic2 = 'sides/recipes/knezovic2/knezovic2.html';
var winterscheid = 'sides/recipes/winterscheid/winterscheid.html';
var tobias = 'sides/recipes/tobias/tobias.html';


//Die Funktion navigation() lädt die Navigation in das HTML-Element mit der ID "content"
async function navigation() {
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').innerHTML += /*html*/`
  
  <!-- Stylesheet für die Navigation -->
  <head>
    <link rel="stylesheet" href="css/navigation.css">
  </head>
  <!-- Einbau der Navigation -->
  <!-- Macht die Navigation Static damit er auf jeder Seite zugänglich ist -->
  <!-- <div class="header"> -->

       <nav class="navbar navbar-expand-lg ms-auto">
        
  <a  onclick="side_load(homepage,'start')" style="cursor: pointer"><img class="logo" src="assets/img/logo.png" alt="Kochwelt"></a>
        <div class="container-fluid">
            <button class="navbar-toggler text ms-auto burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-auto" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" onclick="side_load(homepage, 'start')" id="start">Start</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Rezepte </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onclick="side_load(knezovic, 'recipeofday')" id="recipeofday">Serbischer Bohneneintopf</a></li>
                            <li><a class="dropdown-item" href="#" onclick="side_load(winterscheid, 'recipe2')" id="recipe2">Bohnensalat mit Ei und Tomate</a></li>
                            <li><a class="dropdown-item" href="#" onclick="side_load(knezovic2, 'recipe3')" id="recipe3">Plov - Russiches Reisgericht</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href="#" onclick="side_load(contact, 'contact')" id="contact">Kontakt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="side_load(impressum, 'impressum')" id="impressum">Impressum</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</div>
  `;
}

//Das ist die Hauptfunktion!
//Die Funktion side_load() lädt den Inhalt der Datei, die als Parameter übergeben wird, in das HTML-Element mit der ID "content"
async function side_load(path, id) {

  await side_async(path, id);

  if (id == "recipe2")
    mwRecipeLoad();

  if (id == "recipeofday")
    createTable();

  if (id == "recipe3")
    createTable2();
};

async function side_async(path, id) {
  await navigation();
  await switch_sides(path);
  await witch_side(id);
}


//Die Funktion witch_side() ändert die Farbe des Links, der gerade ausgewählt ist
async function witch_side(id) {
  document.getElementById(id).classList.add("active");
}

// Die Funktion switch_sides() lädt den Inhalt der Datei, die als Parameter übergeben wird, in das HTML-Element mit der ID "content"
async function switch_sides(path) {
  filePath = path;
  // Fetch-API verwenden, um den Inhalt der Datei abzurufen
  await fetch(filePath)
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


//Macht den Footer Static damit er auf jeder Seite zugänglich ist
function footer() {
  document.getElementById('content').innerHTML += /*html*/`
    
    <head>
      <link rel="stylesheet" href="css/footer.css">
    </head>
    <div class="footer">
      © 2024 Dominik Knezovic & Marius Winterscheid
    </div>
  `;
}

//Sendet die Mail an die Mail Adresse
function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/mzbnzpgv", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    window.location.href = "./send_mail.html";
  }).catch((error) => {
    console.log(error);
  });
}