(function () {
    var hOne = document.querySelector("h1");
    hOne.innerText = "sorteio";
    document.body.style.backgroundColor = "DarkTurquoise";
    hOne.style.fontFamily = "Arial";
    var zero = function (num) { return (num < 10 ? "0".concat(num) : num); };
    setInterval(function () {
        var rand = function () { return Math.ceil(Math.random() * 60); };
        var arrayNumbers = [];
        var i = 0;
        while (arrayNumbers.length < 6) {
            var numRand = rand();
            if (arrayNumbers.indexOf(numRand) === -1) {
                arrayNumbers.push(zero(numRand));
                arrayNumbers.sort();
            }
            i++;
        }
        var element = document.createElement("li");
        hOne.appendChild(element);
        var alter = arrayNumbers.join(" - ");
        element.innerText = alter;
    }, 3000);
    // 11 31 6
})();
