
// var x;
// var y;
// var z;
// document.getElementById("mybutton").onclick = function () {
//     x = Math.floor(Math.random()*6) + 1;
//     y = Math.floor(Math.random()*6) + 1;
//     z = Math.floor(Math.random()*6) + 1;

//    document.getElementById("xlabel").innerHTML = x
//     document.getElementById("ylabel").innerHTML = y
   
//  document.getElementById("zlabel").innerHTML = z
   
// }
// document.getElementById("reset").onclick = function () {
    
//     x =0
//     y =0
//     z =0

//    document.getElementById("xlabel").innerHTML = x
//     document.getElementById("ylabel").innerHTML = y
   
//  document.getElementById("zlabel").innerHTML = z
// }
var count = 0
document.getElementById("btn1").onclick = function () {
    count+=1
    document.getElementById("countlabel").innerHTML = count
}
document.getElementById("btn2").onclick = function () {
    count=0
    document.getElementById("countlabel").innerHTML = count
}
document.getElementById("btn3").onclick = function () {
    count-=1
    document.getElementById("countlabel").innerHTML = count

}