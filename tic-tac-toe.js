document.addEventListener("DOMContentLoaded", function() {

    var squares = document.querySelectorAll("#board div");
    var count = 1;
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var won = false;
    var status = document.getElementById("status");
    var newGameBtn = document.querySelector(".btn");

    //Add css styles to the div classes 
    squares.forEach(function(element, i) {
        element.classList.add("square");

        //mouseover and mouseout handle the hovering 
        element.addEventListener("mouseover", function() {
            element.classList.add("hover");
        });

        element.addEventListener("mouseout", function() {
            element.classList.remove("hover");
        });

        //Allows players to input x or o 
        element.addEventListener("click", function() {

            if (!element.textContent) { //this prevents cheating by only allowing the square to change if the text content is empty (exercise 6).
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

    
    newGameBtn.addEventListener("click", function() {
        squares.forEach(function(square) {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        count = 1;
        array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        won = false;
        status.textContent = "Move your mouse over a square and click to play an X or an O."
        status.classList.remove("you-won");

        //a function to update the status would be useful  
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

    //checks that checks if all the squares in check have the same symbol as the player
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