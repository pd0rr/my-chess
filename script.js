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

function make_piece(piece, color, cell) {
    let p = document.createElement("img");
    p.src = "./img/pieces/Chess_"+ piece + color + "t45.svg";
    p.className = "piece";
    document.getElementById(cell).append(p);
}

function make_black_pawn(cell) {
    let p = document.createElement("img");
    p.src = "./img/pieces/Chess_pdt45.svg";
    p.className = "piece";
    document.getElementById(cell).append(p);
}

function make_white_pawn(cell) {
    let p = document.createElement("img");
    p.src = "./img/pieces/Chess_plt45.svg";
    p.className = "piece";
    document.getElementById(cell).append(p);
}

// add black pawns
for (let i = 0; i < 8; i++) {
    make_black_pawn(8+i);
}

// add white pawns
for (let i = 0; i < 8; i++) {
    make_white_pawn(48+i);
}

make_piece("r", "d", 0);
make_piece("n", "d", 1);
make_piece("b", "d", 2);
make_piece("q", "d", 3);
make_piece("k", "d", 4);
make_piece("b", "d", 5);
make_piece("n", "d", 6);
make_piece("r", "d", 7);

make_piece("r", "l", 56);
make_piece("n", "l", 57);
make_piece("b", "l", 58);
make_piece("q", "l", 59);
make_piece("k", "l", 60);
make_piece("b", "l", 61);
make_piece("n", "l", 62);
make_piece("r", "l", 63);