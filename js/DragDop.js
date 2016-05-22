function start() {
    var canvas = getCanvas();
    canvas.onmousedown = myDown;
    canvas.onmouseup = myUp;
    canvas.myContexts = new Array();
    canvas.lastZIndex = 0
}

function draw() {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "black";
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
        ctx.zindex = canvas.lastZIndex++;
        canvas.myContexts[canvas.myContexts.length] = ctx;


        var ctx2 = canvas.getContext('2d');

        ctx2.beginPath();
        ctx2.moveTo(50, 50);
        ctx2.lineTo(250, 175);
        ctx2.lineTo(200, 125);
        ctx2.closePath();
        ctx2.fillStyle = "red";
        ctx2.fill();
        ctx2.stroke();
        canvas.myContexts[canvas.myContexts.length] = ctx2;


    }
}
/*
function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 10);
}

function draw() {
    clear();
    ctx.fillStyle = "#FAF7F8";
    rect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#444444";
    rect(x - 15, y - 15, 30, 30);
}

function myMove(e) {
    if (dragok) {
        x = e.pageX - canvas.offsetLeft;
        y = e.pageY - canvas.offsetTop;
    }
}
*/
function myDown(e) {
    var x = 0;
    e.x;
    e.y;

    var canvas = getCanvas();
    canvas.startMove = new Array();
    canvas.startMove[0] = e.x;
    canvas.startMove[1] = e.y;

    var context = getSelectedContexts(e.x, e.y);

}

function myUp(e) {
    var canvas = getCanvas();
    canvas.startMove;
    e.x;
    e.y;
    dragok = false;
    canvas.onmousemove = null;

    context.translate();
}

function getSelectedContexts(x, y) {
    //var selectedContexts = new Array();
    var canvas = getCanvas();
    for (var i = 0; i < canvas.myContexts; i++) {
        var context = canvas.myContexts[i];
        if (coninciden) {
            return  context
        }
    }
    
}

function getCanvas(){
    return document.getElementById('canvas');
}
