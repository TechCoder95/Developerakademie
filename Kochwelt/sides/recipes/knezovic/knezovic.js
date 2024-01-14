var menge = [250, 1, 250, 1, 300, 100, 0.5, 1, 1]
var mengenangabe = ["g", " Bund", "g", " Stück", "g", "g", "EL", "TL", "Msp"]
var zutat = ["Bohnen (getrocknete weiße)", "Suppengemüse", "Zwiebel (n)", "Knoblauchzehe (n)", "Kartoffel (n)", "Tomate (n)", "Ol (neutrales)", "Salz", "Paprikapulver (edelsüß)", "Majoran (Teil)", "Msp (Cayennepfeffer)", "Paprikaschote (n, grün)", "Tomatenmark", "Knoblauchwurst (oder Mettwurst)"]



// Die Funktion createTable() erstellt die Tabelle mit den Zutaten
function createTable() {
  const content = document.getElementById('content_recipe')
  var input = document.getElementById('calc_input').value;

  content.innerHTML = '';
  if (input <= 0) {
    alert(input + ' ist nicht machbar! Gib bitte eine Zahl über 0 ein.')
    side_load(knezovic, 'recipeofday', table_load())
  }
  else {
    for (let i = 0; i < menge.length; i++) {
      const element = menge[i];
      const element2 = zutat[i];
      const element3 = mengenangabe[i];
      var summe = element * input;
      if (i % 2) {
        content.innerHTML += /*html*/`
                <div class="table background-table">
                ${summe}${element3} ${element2}
                </div>
      `;
      } else {
        content.innerHTML += /*html*/`
                <div class="table">
                ${summe}${element3} ${element2}
                </div>
      `;
      }
    }
  }
}
