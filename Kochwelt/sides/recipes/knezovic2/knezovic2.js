const menge2 = [400,300,250,150,1,1,1,1,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5];
const zutat2 = ["Hammelfleisch","Reis","Karotten","Zwiebeln","Kreuzkümmel","Paprikapulver","Kurkuma","Salz","Pfeffer","Koriander","Kümmel","Chili","Zimt","Muskatnuss","Kardamom","Fenchel","Anis","Ingwer","Senfkörner","Lorbeerblätter","Nelken"];
const mengenangabe2 = ["g","g","g","g","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL","TL"];


// Die Funktion createTable() erstellt die Tabelle mit den Zutaten
function createTable2() {
    const content = document.getElementById('content_recipe')
    var input = document.getElementById('calc_input').value;
  
    content.innerHTML = '';
    if (input == "") {
      alert('Bitte gib eine Zahl ein!');
      document.getElementById('calc_input').value = 2;
      side_load(knezovic2, 'recipe3', createTable())
      
    } else if (input <= 0) {
      alert(input + ' ist nicht machbar! Gib bitte eine Zahl über 0 ein.')
      document.getElementById('calc_input').value = 2;
      side_load(knezovic2, 'recipe3', createTable())
    }
    else {
      for (let i = 0; i < menge2.length; i++) {
        const element = menge2[i];
        const element2 = zutat2[i];
        const element3 = mengenangabe2[i];
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