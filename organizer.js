var today = moment().format("MMMM Do YYYY");
console.log(today);

var date = document.querySelector("#current");
window.addEventListener("load", function () {
    current.innerHTML = today;
});


var time = moment().format("HH:MM");
console.log(time);

var blockOne = document.querySelector("#blockOne");

var store = document.querySelector(".saveBtn");
store.addEventListener("click", function () {
    localStorage.setItem("9:00", (blockOne.value));
})



