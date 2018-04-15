function init() {

    canvas=document.getElementById("mycanvas");
    pen=canvas.getContext('2d');
    W=canvas.width;
    H=canvas.height;

    box={
        x:10,
        y:10,
        w:20,
        h:20,
        speed:5
    }
}
function draw() {
    pen.clearRect(0,0,W,H);
    console.log('draw');
    pen.fillStyle='green'
    pen.fillRect(box.x,box.y,box.w,box.h);
}


function update() {
    console.log('update');
    box.x+=box.speed;
    box.y+=box.speed;
    if(box.x>=W || box.y>=H){
        box.speed*=-1;
        }
}



function gameLoop() {
    draw();
    update();
}

init();
setInterval(gameLoop,100)