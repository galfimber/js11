const btn = document.getElementById("btn");
const inputText = document.getElementById("text");
const square = document.getElementById("square");
const circleBtn = document.getElementById("e_btn");
const circle = document.getElementById("circle");
const inputRange = document.getElementById("range");

//1.
btn.addEventListener("click", function () {
  square.style.backgroundColor = inputText.value;
});

//2.
circleBtn.style.display = "none";
inputRange.addEventListener("input", function(e){
    circle.style.width = e.target.value + "%";
    circle.style.height = e.target.value + "%";
})