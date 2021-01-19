window.addEventListener("load", function () {
    console.log("test")
})

window.addEventListener("load", function () {
    var today = new Date();
    var date = (today.getMonth()+1) + "/" + today.getDate();
    console.log(date);
    var current = document.querySelector("#current");
    current.innerHTML = date;
})

