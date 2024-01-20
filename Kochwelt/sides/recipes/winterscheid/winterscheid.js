/* Its build to easy scale the data, so i use a JSON Array and set the item
to 0 for now. That will allways render the first recipe in array, enouth fpr the usecase here. 
If it will be scaled in future, its easier to do. */

/* Data */
let mwRecipes = [
    {
        'name': 'Bohnensalat mit Ei, Tomate und Petersilie',
        'recipeImg': 'sides/recipes/winterscheid/recipes/bone-salad.jpg',
        'recipePrepTime': 15,
        'recipeTimeFull': 15,
        'level': 'einfach',
        'user': 'Marius Winterscheid',
        'userImg': 'sides/recipes/winterscheid/profiles/marius-winterscheid-profile.jpg',
        'date': '13.01.2024',
        'ingredients': [
            {
                'name': 'grüne Bohnen (gekocht und abgekühlt)',
                'unit': 'Tassen',
                'amount': 2
            },
            {
                'name': 'Eier (gekocht und gewürfelt)',
                'unit': 'Stück',
                'amount': 4
            },
            {
                'name' : 'Kirschtomaten (halbiert)',
                'unit': 'Tassen',
                'amount': 1
            },
            {
                'name': 'frische Petersilie (gehackt)',
                'unit': 'Tassen',
                'amount': 0.5
            },
            {
                'name': 'Olivenöl',
                'unit': 'Esslöffel',
                'amount': 2
            },
            {
                'name': 'Weißweinessig',
                'unit': 'Esslöffel',
                'amount': 1
            }
        ],
        'preparation': `Die grünen Bohnen in kochendem Wasser etwa 3-4 Minuten kochen, bis sie bissfest sind. Dann abgießen und
                        abkühlen lassen.
                        Die gekochten Bohnen, gewürfelten Eier, halbierten Kirschtomaten und gehackte Petersilie in einer großen
                        Schüssel vermengen.
                        Olivenöl und Weißweinessig hinzufügen. Gut umrühren, um die Zutaten zu vermengen.
                        Mit Salz und Pfeffer abschmecken.
                        Den Bohnensalat für mindestens 30 Minuten im Kühlschrank ziehen lassen, damit sich die Aromen gut
                        entfalten
                        können.
                        Vor dem Servieren nochmals umrühren und nach Bedarf nachwürzen.
                        Dieser Bohnensalat eignet sich hervorragend als Beilage oder auch als leichtes Hauptgericht. Guten
                        Appetit!`
    }
];

/* loads the recipe for a start meal portion of 1 */
function mwRecipeLoad(){
    let mwItem = 0;

    document.getElementById('mwRecipeHeader').innerHTML = mwReturnRecipeHeadHtml(mwItem);
    document.getElementById('mwRecipePrepMain').innerHTML = mwReturnPrepHtml(mwItem);
    document.getElementById('mwRecipeUser').innerHTML = mwReturnUserHtml(mwItem);

    mwRenderIngerdients(mwItem, 1);
}

/* render the amount of each ingredient by using a given multiplier */
function mwRenderIngerdients(i, mwMultiplier){
    let mwIngredients = mwRecipes[i].ingredients;
    document.getElementById('mwIngredientsList').innerHTML = '';

    for(i=0;i<mwIngredients.length;i++){
        let mwNewAmount = mwIngredients[i].amount * mwMultiplier;

        document.getElementById('mwIngredientsList').innerHTML += `
        <div class="mw-ingredients-list-item">${mwNewAmount} ${mwIngredients[i].unit} ${mwIngredients[i].name}</div>
        `;
    }
}

/* pick the multiplier out of input and call the render function */
function mwCalcIngredients(i){
    var mwInputMultiplier = document.getElementById('mwInputMultiplier');
    var mwMultiplier = parseInt(mwInputMultiplier.value);

    if(mwMultiplier){
        mwRenderIngerdients(i, mwMultiplier);
    }  
}

/* HTML RETURNS */
function mwReturnRecipeHeadHtml(i){
    let mwRecipe = mwRecipes[i];
    return `
        <h1>${mwRecipe.name}</h1>
        <img class="mw-recipe-main-img" src="${mwRecipe.recipeImg}"
            alt="picture of the recipe">
        <div class="mw-short-info-main">
            <div class="mw-short-info-card"><img class="mw-icon-size" src="/assets/img/icons/clock-regular.svg"
                    alt="clock">ca. ${mwRecipe.recipeTimeFull} Minuten</div>
            <div class="mw-short-info-card"><img class="mw-icon-size" src="/assets/img/icons/brain-solid.svg"
                    alt="brain">${mwRecipe.level}</div>
            <div class="mw-short-info-card"><img class="mw-icon-size"
                    src="/assets/img/icons/calendar-alt-regular.svg" alt="calender">${mwRecipe.date}</div>
        </div>
    `;
}

function mwReturnPrepHtml(i){
    let mwRecipe = mwRecipes[i];
    return `
        <h1>Zubereitung</h1>
        <div class="mw-short-info-main">
            <div class="mw-short-info-card">
                <img class="mw-icon-size" src="/assets/img/icons/clock-regular.svg" alt="clock"><span>ca. ${mwRecipe.recipePrepTime} Minuten</span>
            </div>
            <div class="mw-short-info-card">
                <img class="mw-icon-size" src="/assets/img/icons/clock-regular.svg" alt="brain"><span>Gesamtzeit ca. ${mwRecipe.recipeTimeFull} Minuten</span>
            </div>
        </div>
        <span>${mwRecipe.preparation}</span>
    `;
}

function mwReturnUserHtml(i){
    let mwRecipe = mwRecipes[i];
    return `
        <img class="mw-profile-pic-style" src="${mwRecipe.userImg}" alt="profile picture">
        <span>${mwRecipe.user}</span>
    `;
}