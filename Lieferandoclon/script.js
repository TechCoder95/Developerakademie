//#region [Variablen]
//Arrays
let essen = [
  {
    'name': '30cm irgendeinen Sub',
    'price': 5.55,
    'description': '30cm Sub'
  }, {
    'name': 'Chicken Terriyaki Sub 15cm',
    'price': 11.62,
    'description': 'Chicken Terriyaki Sub 15cm lang'
  }, {
    'name': 'Chicken Terriyaki Sub',
    'price': 25.00,
    'description': 'Chicken Terriyaki Sub 30cm lang'
  }
];

let basketnames = [];
let basketprices = [];
let basketdescription = [];
let basketamount = [];


//#endregion

function render() {

  Basket();
  //Die Variable "content" deklariert mit dem Inhalt aus der ID content
  let content = document.getElementById('content')
  content.innerHTML = ''; //Löschtalles aus der "Content" - Div 
  content.innerHTML += /*html*/` `; //+= fügt hinzu was da drin steht

  //Willst du mehrere Sachen aus einem Array anzeigen lassen willst, nimmt man eine For-Schleife
  for (let i = 0; i < essen.length; i++) {
    const meal = essen[i];

    document.getElementById('content').innerHTML += /*html*/ `
            <div class="meal">
                    <div class="name"><b>${meal['name']}</b><img class="plus" onclick="addMeal('${meal['name']}',${meal['price']},'${meal['description']}', ${i}) , render()" src="img/plus.jpg" alt=""></div>
                    <div class="description">${meal['description']}</div>
                    <div class="price"><b>${meal['price'].toFixed(2)} €</b></div>
            </div>    
    `; }

    if(basketnames[0] == null)

    document.getElementById('basket').innerHTML += /*html*/ `
      <div>
        Dein Warenkorb ist leer!
      </div>
      `;

    else{
      document.getElementById('basket').innerHTML += ``;
    }

}

function Basket() {
  //Die Variable "content" deklariert mit dem Inhalt aus der ID content
  let content = document.getElementById('basket')
  content.innerHTML = ''; //Löschtalles aus der "Content" - Div 
  content.innerHTML += /*html*/` `; //+= fügt hinzu was da drin steht

  //Willst du mehrere Sachen aus einem Array anzeigen lassen willst, nimmt man eine For-Schleife

  for (let i = 0; i < basketnames.length; i++) {
    const name = basketnames[i];
    const descriptions = basketdescription[i];
    const amounts = basketamount[i];

    let sum = basketprices[i] * basketamount[i];
    document.getElementById('basket').innerHTML += /*html*/ `
            <div class="basket-meal">
                    <div class="basket-name"><div>${amounts}x</div><b>${name}</b><div class="basket-price"><b>${sum.toFixed(2)} €</b></div></div>
                    <div class="basket-description">${descriptions}</div>
                    <div class="picture">
                        <img id="add" onclick="increaseAmount(${i}), render()" src="img/plus.jpg" alt="">
                        <img id ="slice" onclick="decreaseAmount(${i}),render()" src="img/minus.png" alt="">
                        <img onclick="delItem(${i}), render()" src="img/trash.png" alt="">
                    </div>
            </div>
    `;
  }

  totalSum();
}


function addMeal(name, price, descript, i) {

  let amount = basketnames.indexOf(essen[i].name);

  if (amount == -1) {
    basketnames.push(name);
    basketprices.push(price);
    basketdescription.push(descript);
    basketamount.push(1);
  }
  else {
    basketamount[amount]++;
    basketprices[amount] = essen[i].price;
  }
  totalSum();
}


function increaseAmount(i) {
  if (basketamount[i] >= 1) {
    basketamount[i]++;
    basketprices[i] = essen[i].price
  }

}

function decreaseAmount(i) {
  if (basketamount[i] > 1) {
    basketamount[i]--;
    basketprices[i] = essen[i].price
  } else /* wenn Artikel die Menge 0 aufweist*/ {
    basketnames.splice(i, 1);
    basketprices.splice(i, 1);
    basketamount.splice(i, 1);
    basketdescription.splice(i, 1);
  }

}


function delItem(i){
  basketnames.splice(i, 1);
  basketprices.splice(i, 1);
  basketamount.splice(i, 1);
  basketdescription.splice(i, 1);
}


function totalSum() {
  let sum = 0;
  for (let i = 0; i < basketprices.length; i++) {
    sum += basketprices[i] * basketamount[i];
  }
  document.getElementById('totalsum').innerHTML = sum.toFixed(2) + ' €';
}


