document.addEventListener("DOMContentLoaded", function() {

    var squares = document.querySelectorAll("#board div");
    var count = 1;
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
            }
        });
    });
});
