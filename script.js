// var box = document.querySelector("#elem");
// var icon = document.querySelector("i");
// box.addEventListener("dblclick",function(){
//     // console.log("first")
//     icon.style.transform = "translate(-50%,-50%) scale(1)"
//     icon.style.opacity = 0.8
//     icon.style.color = "red"
//     setTimeout(function(){
//         // icon.style.transform = "translate(-50%,-50%) scale(0)" 
//         icon.style.opacity = 0
//     },1000)
//     setTimeout(function(){
//         icon.style.transform = "translate(-50%,-50%) scale(0)" 
//         // icon.style.opacity = 0
//     },2000)
// })







// or,

var box = document.getElementById("elem");
var ico = document.querySelector("i");

box.addEventListener("dblclick",function(){
    ico.style.opacity = "0.8"
    ico.style.transform = "translate(-50%,-50%) scale(1)"
    ico.style.color = "red"
    setTimeout(() => {
        ico.style.opacity = "0"  
    }, 1000);

    setTimeout(() => {
        ico.style.transform = "translate(-50%,-50%) scale(0)"
    }, 2000);

})