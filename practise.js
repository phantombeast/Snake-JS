myDiv=document.getElementById("mydiv");
console.log(myDiv);

function mousepressed(someInfo) {
    console.log("You pressed");
    console.log(someInfo.clientX +" ," + someInfo.clientY);
}
myDiv.addEventListener('mousedown',mousepressed)