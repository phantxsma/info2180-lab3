document.addEventListener("DOMContentLoaded", function() {

    var squares = document.querySelectorAll("#board div");
    squares.forEach(function(square) {
        square.classList.add("square");
    });
});