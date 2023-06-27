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

const king = document.createElement("img");
king.src = "./img/pieces/Chess_kdt45.svg";
king.className = "white piece";

document.getElementById("1").append(king);