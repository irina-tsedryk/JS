function loadJSON(filename, selector) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', filename);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.error(xhr.status + ': ' + xhr.statusText);
        } else {
            runApp(xhr.responseText, selector);
        }

    }
}

function createMenuElement(data) {
    var li, a;

    /* add code to this function*/

    li = document.createElement("li");
    a = document.createElement("a");
    a.href = data.link;
    a.innerText = data.title;
    li.appendChild(a);

    return li;
}

function drawMenu(selector, data) {
    console.log('drawMenu', selector, data);
    var container = document.querySelector('#' + selector);

    container.innerHTML = '';

    for (var i = 0; i < data.length; i += 1) {
        var menuElement = createMenuElement(data[i]);

        container.appendChild(menuElement);
    }
}

function runApp(json, selector) {
    var menuData = JSON.parse(json);

    drawMenu(selector, menuData);
}

document.addEventListener('DOMContentLoaded', function () {
    loadJSON('js/data/menu.json', 'dynamic-menu');
    loadJSON('js/data/menu-main.json', 'nav-menu');
});

document.addEventListener('click', function (event) {
   console.log(event.target);
});