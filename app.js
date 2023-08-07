const colors = ["green", "red", "rgb(166, 45, 136)", "#f15025", "#55c2a1", "rgb(156, 58, 92)", "#b3af42", "rgb(104, 150, 111)", "#4287f5"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}