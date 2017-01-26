function loadJSON(filename) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', filename);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.error(xhr.status + ': ' + xhr.statusText);
        } else {
            runApp(xhr.responseText);
        }

    }
}

function drawMenuElement(selector, data) {

}

function drawMenu(selector, data) {

}

function runApp(json) {
    var DYNAMIC_MENU_SELECTOR = 'dynamic-menu';
    var menuData = JSON.parse(json);

    drawMenu(DYNAMIC_MENU_SELECTOR, menuData);
}

document.addEventListener('DOMContentLoaded', function () {
    loadJSON('js/data/menu.json');
});