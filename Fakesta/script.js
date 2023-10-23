//#region [Global Vars]

//Array

const posts = [
    {
        'profilimg':'img/pb.jpeg',
        'author': 'Dominik Knezovic',
        'image': 'img/img9.jpeg',
        'description': 'Ich seh verdammt gut aus!',
        'location': 'Stuttgart',
        'commentar': ["Kommentar 1","Kommentar 2"]
    },
    {
        'profilimg':'img/pb.jpeg',
        'author': 'Jana Knezovic',
        'image': 'img/img10.jpeg',
        'description': 'Ich seh verdammt gut aus!',
        'location': 'Stuttgart',
        'commentar': ['Lul',' Haha']
    }, {
        'profilimg':'img/pb.jpeg',
        'author': 'Dominik Knezovic',
        'image': 'img/img11.jpeg',
        'description': 'Ich seh verdammt gut aus!',
        'location': 'Stuttgart',
        'commentar': ['Lul',' Haha']
    }, {
        'profilimg':'img/pb.jpeg',
        'author': 'Dominik Knezovic',
        'image': 'img/img12.jpeg',
        'description': 'Ich seh verdammt gut aus!',
        'location': 'Stuttgart',
        'commentar': ['Lul',' Haha']
    }

];

//#endregion

//#region [Render]

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += /*html*/`

    <div class="topbar"><h1>Fakesta</h1></div>
    
    `;

    getPost()

}

//#endregion

//#region [Functions]



function getPost() {

    document.getElementById('content').innerHTML='';

    document.getElementById('content').innerHTML+= /*html*/`

    <div class="navigation">

    <div class="logo"> 
        <img src="img/instagram.png" alt="">
        <h1>Fakesta</h1>
    </div>
    
    <div class="search">
    <input placeholder="Search...">

    </div>
    
    
    <div class="rightnav">
    <img src="img/heim.png" alt="Profilbild" class="icon">
    <img src="img/senden.png" alt="Profilbild" class="icon">
    <img src="img/herz.png" alt="Profilbild" class="icon">
    <img src="img/pb.jpeg" alt="Profilbild" class="icon radius">

    </div>
        
    
    </div>

    <div>
    </div>
    `;
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('content').innerHTML += /*html*/ `
                <div class="post">
                    <div class="topper">
                        <img src="${post['profilimg']}" alt="Profilbild" class="profilpicture">
                        <div class ="topper2">
                        <div class="author"><b>${post['author']}</b></div>
                        <div class="location">${post['location']}</div>
                        </div>
                    </div>
                    <img src="${post['image']}" alt="" id="postimg" class="postimg">
                    <div class="bottem">
                    <div class="descripton"><b>${post['author']}:</b> ${post['description']}</div>
                    <div class="commentar">${post['commentar']}</div>
                    </div>
                </div>
        `;
    }


    


}

//#endregion




//#region [Save/Read]

//Array in local Storage speichern
function saveArrayToLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

//Array aus Local Storage lesen
function loadArrayToLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function save(key, array) {
    saveArrayToLocalStorage(key, array);
}

function load(key) {

    if (loadArrayToLocalStorage(key)) {
        notes = loadArrayToLocalStorage(key);

    }
}

//#endregion