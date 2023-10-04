//Array in local Storage speichern
function saveArrayToLocalStorage(key, array){
    localStorage.setItem(key, JSON.stringify(array));
}

//Array aus Local Storage lesen
function loadArrayToLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}