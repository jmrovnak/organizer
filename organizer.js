window.addEventListener("load", function () {
    console.log("test")
})

window.addEventListener("load", function () {
    var today = new Date();
    var date = (today.getMonth()+1) + "/" + today.getDate();
    console.log(date);
    
    var currentdate = document.querySelector("#currentDate");
    currentdate.innerHTML = date;

    var time = today.getHours() + ":" + today.getMinutes();
    var currenttime = document.querySelector("#currentTime");
    currenttime.innerHTML = time;




})

