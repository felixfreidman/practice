"use strict"

let imgLabel = '<img class="image" src=../image/img$n.png />'

let board1 = document.querySelector(".board1");
let board2 = document.querySelector(".board2");

setSquares(board1, '1.');
setSquares(board2, '2.');

setLabels();

setDraggable();
setDroppable();


document.ondblclick = (event) => {
    if (event.path[1].id.includes('1.')) {
        let position = +event.path[1].id.substring(2);

        let newPos = 8 * (Math.trunc(position / 8) + 1) - 1 - position % 8;

        document.getElementById(`1.${position}`).innerHTML = "";
        document.getElementById(`2.${newPos}`).innerHTML = "";
    }
}

function setDraggable() {
    $('.image').draggable({ revert: true });
}

function setDroppable() {
    $(".square").droppable({
        drop: (event, ui) => {
            let from = ui.draggable.context.id;
            let to = event.target.id;

            if (!to.includes('2.')) moveLabel(from, to, from);
        }
    });
}

function setSquares(parent, board) {
    for (let coord = 0; coord < 80; coord++) {
        let div = document.createElement("div");
        div.className = "square";
        div.id = board + coord;

        parent.append(div);
    }
}

function setLabels() {
    let bar = document.querySelector(".bar");

    for (let n = 1; n <= 12; n++) {
        let div = document.createElement("div");
        div.id = "label" + n;
        div.className = "label";
        div.style.backgroundImage = `url(image/img${n}.png`;

        div.innerHTML = `<img class="image" id=img${n} src=../image/img${n}.png data-key=../svg/img${n}.svg />`;

        bar.append(div);
    }
}

function moveLabel(fromCoord, toCoord, label) {
    let figure = `<img class="image" src=../image/${label}.png data-key=../svg/${label}.svg />`;

    showLabelAt(fromCoord, "");
    showLabelAt(toCoord, figure);

    let svg = `<img class="image" src=../svg/${label}.svg />`;

    mirror(toCoord, svg);
}


function showLabelAt(coord, label) {
    document.getElementById(coord).innerHTML = label;
}


function mirror(toCoord, file) {
    let position = +(toCoord.substring(2));
    position = 8 * (Math.trunc(position / 8) + 1) - 1 - position % 8;

    document.getElementById(`2.${position}`).innerHTML = file;
}