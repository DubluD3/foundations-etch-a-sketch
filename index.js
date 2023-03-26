// STANDARD NUMBERS OF BLOCKS
var standardBlocks = 12;
var arrayDiv = new Array();
var grid = document.getElementById("container");

for (var i = 0; i < standardBlocks; i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].id = 'block' + i;
    arrayDiv[i].className = 'grid-item';
    grid.appendChild(arrayDiv[i]);
}

// CHANGE THE NUMBERS OF BLOCKS BY INPUT
let button = document.querySelector('#button');


button.addEventListener('click', () => {
    // REMOVE ALL BLOCKS
    if (container.childNodes.length >= 0) {
        const list = document.getElementById("container");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
          }
    }
    
    let numberOfBlocks = parseInt(prompt("Please enter the amount of squres: "));
    var arrayDiv = new Array();
    // AND ADD THE SPECIFIED NUMBER OF BLOCKS
    for (var i = 0; i < numberOfBlocks*2; i++) {
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].id = 'block' + i;
        arrayDiv[i].className = 'grid-item';
        grid.appendChild(arrayDiv[i]);        
    }
});