const cell = document.createElement("p");
cell.className = "cell";
cell.id = "1";
cell.textContent = "test";
const chessboard = document.getElementById("chessboard");
chessboard.append(cell);