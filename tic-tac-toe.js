document.addEventListener("DOMContentLoaded", function() {

    var squares = document.querySelectorAll("#board div");
    var count = 1;
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var won = false;
    var status = document.getElementById("status");

    squares.forEach(function(element, i) {
        element.classList.add("square");

        element.addEventListener("mouseover", function() {
            element.classList.add("hover");
        });

        element.addEventListener("mouseout", function() {
            element.classList.remove("hover");
        });

        element.addEventListener("click", function() {

            if (!element.textContent) {
                if (count % 2 === 1) {
                    element.textContent = "X";
                    element.classList.add("X");
                    array[i] = "X";
                } else {
                    element.textContent = "O";
                    element.classList.add("O");
                    array[i] = "O";
                }
                count++;

                if (confirmWin(array, "X")) {
                    won = true;
                    status.textContent = "Congratulations! X is the Winner!";
                    status.classList.add("you-won");
                    updateStatus("Congratulations! X is the Winner!");
                } else if (confirmWin(array, "O")) {
                    won = true;
                    status.textContent = "Congratulations! O is the Winner!";
                    status.classList.add("you-won");
                }
            }
        });
    });
});

function confirmWin(array, player) {
    
    var winIndices = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winIndices.length; i++) {
        var check = winIndices[i];
        var isWin = true;

        for (var j = 0; j < check.length; j++) {
            var index = check[j];
            if (array[index] !== player) {
                isWin = false;
                break;
            }
        }

        if (isWin) {
            return true;
        }
    }

    return false;
}