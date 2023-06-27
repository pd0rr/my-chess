const chessboard = document.getElementById("chessboard");

for (let i = 0; i < 64; i++) {
    let cell = document.createElement("div");
    cell.className = "cell"
    cell.id = i;
    chessboard.append(cell);
}

