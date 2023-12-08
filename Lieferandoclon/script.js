//#region [Variablen]
//Arrays
let essen = [
  {
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  }, {
    'name': 'Chicken Terriyaki Sub',
    'price': 5555,
    'description': 'Ein Cheeseburger halt'
  }, {
    'name': '30cm fick dich! -> Mit Sahne',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  }, {
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  }

];

//Oke bevor ich das jetzt vergesse, ich muss dringend ein Amount einbauen, das heißt ich muss das JSON Array vom Basket auflösen und in verschiedene Arrays ballern.
//Wenn das erledigt ist muss ich schauen das der Splice funktioniert!


let basket = [
  {
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },{
    'name': 'Cheeseburger',
    'price': 5,
    'description': 'Ein Cheeseburger halt'
  },
];

let names = [];
let prices = [];
let description = [];

//#endregion

function render() {

  arrayconvert();
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
                    <div class="name"><b>${meal['name']}</b><img class="plus" onclick="addMeal({name: '${meal['name']}', price: ${meal['price']},description:'${meal['description']}'}), render()" src="img/plus.jpg" alt=""></div>
                    
                    <div class="description">${meal['description']}</div>
                    <div class="price"><b>${meal['price']}</b></div>
            </div>
    `;
  }
}

//erstmal noch irrelevant
function addtoBasket(name, price) {
  essen.push(meal['${}']);
  essen.push(meal['price'])
}

function arrayconvert() {
  for (let i = 0; i < essen.length; i++) {
    names.push(essen[i].name);
  }
  for (let i = 0; i < essen.length; i++) {
    prices.push(essen[i].price);
  }
  for (let i = 0; i < essen.length; i++) {
    description.push(essen[i].description);
  }
}

function totalSum() {
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].price;
  }
  
  document.getElementById('totalsum').innerHTML =  sum+' €';
}


function Basket() {
  //Die Variable "content" deklariert mit dem Inhalt aus der ID content
  let content = document.getElementById('basket')
  content.innerHTML = ''; //Löschtalles aus der "Content" - Div 
  content.innerHTML += /*html*/` `; //+= fügt hinzu was da drin steht

  //Willst du mehrere Sachen aus einem Array anzeigen lassen willst, nimmt man eine For-Schleife
  for (let i = 0; i < basket.length; i++) {
    const basketmeal = basket[i];

    document.getElementById('basket').innerHTML += /*html*/ `
            <div class="basket-meal">
                    <div class="basket-name"><div>1x</div><b>${basketmeal['name']}</b><div class="basket-price"><b>${basketmeal['price']} €</b></div></div>
                    <div class="basket-description">${basketmeal['description']}</div>
                    <div class="picture">
                        <img id="add" onclick="addMeal(/*!!!Hier kommt die neue funktion rein!!!*/), render()" src="img/plus.jpg" alt="">
                        <img id ="slice" onclick="delMeal(basket[${i}]),render()" src="img/minus.png" alt="">
                    </div>
            </div>
    `;
  }

totalSum();
}

function addAmount(){



}



function addMeal(string){

    basket.push(string)

}

function delMeal(i){

    basket.splice(i,1)
}
