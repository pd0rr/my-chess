const chessboard = document.getElementById("chessboard");

for (let i = 0; i < 64; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = i;

    if ((i + Math.floor(i / 8)) % 2 == 0) {
        cell.classList.add("white");
    } else {
        cell.classList.add("black");
    }

    chessboard.append(cell);
}

// piece creation functions
function make_black_pawn(cell) {
    let p = document.createElement("img");
    p.src = "./img/pieces/Chess_pdt45.svg";
    p.className = "piece";
    document.getElementById(cell).append(p);
}

// add black pawns
for (let i = 0; i < 8; i++) {
    make_black_pawn(8+i);
}

const king = document.createElement("img");
king.src = "./img/pieces/Chess_kdt45.svg";
king.className = "piece";

document.getElementById("4").append(king);