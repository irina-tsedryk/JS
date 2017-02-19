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
	
	var showingTooltip;
	    document.onmouseover = function(e) {
      
	  var target = e.target;

      var tooltip = target.getAttribute('data-tooltip');
      if (!tooltip) return;

      var tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltip;
      document.body.appendChild(tooltipElem);

      var coords = target.getBoundingClientRect();

      var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; 

      var top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';

      showingTooltip = tooltipElem;
    };

    document.onmouseout = function(e) {

      if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
      }
    }

    /* add code to this function*/

    li = document.createElement("li");
    a = document.createElement("a");
    a.href = data.link;
    a.innerText = data.title;
	a.style.color = data.color;
	a.style.color = data.color;
	
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