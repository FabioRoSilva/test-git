(function () {
  const hOne: any = document.querySelector("h1");
  document.body.style.backgroundColor = "DarkTurquoise";
  hOne.style.fontFamily = "Arial";

  const zero = (num: any) => (num < 10 ? `0${num}` : num);

  setInterval(() => {
    const rand: () => number = () => Math.ceil(Math.random() * 60);

    const arrayNumbers: Array<number> = [];

    let i: number = 0;
    while (arrayNumbers.length < 6) {
      let numRand = rand();

      if (arrayNumbers.indexOf(numRand) === -1) {
        arrayNumbers.push(zero(numRand));
        arrayNumbers.sort();
      }

      i++;
    }

    const element: any = document.createElement("li");
    hOne.appendChild(element);
    const alter = arrayNumbers.join(" - ");
    element.innerText = alter;
  }, 3000);

})();
