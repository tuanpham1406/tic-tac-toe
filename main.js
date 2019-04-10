let b =document.getElementById("carogame");

let board = [];
let data = "";
for (let i = 0; i < 5; i++){
    board[i] = new Array(".", ".", ".", ".", ".");
}
for (let i = 0; i < 5; i++){
    data += "<br/>";
    for (let j = 0; j < 5; j++){
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
b.innerHTML = data;

function changeValue() {
    let player = prompt("Player : ");
    let positionX = parseInt(prompt("X: "));
    let positionY = parseInt(prompt("Y: "));
    data = "";
    if(player == "A"){
        board[positionX][positionY] = "x";
    } else if (player == "B") {
        board[positionX][positionY] = "o";
    } else {
        alert("Moi ban nhap A hoac B!!!");
    }

    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
    b.innerHTML = "<hr/>" + data;
}
