var player = document.getElementById("player")
var move;
var dx = 0;
var dy = 0;
var holdup = [];
var time = 0;
var change = 0;
var num = -1;
//var change;
//var myWorker = new Worker("loop.js");
async function hold(direc) {
num++;  
  holdup[num] = setInterval(function() {
    this.change = this.time*0.003
    this.time++;
    if(this.change > 0.015) {
      this.change = 0.015;
    }
    if(direc == "up") {
      dy += this.change
    }
    if(direc == "down") {
      dy -= this.change
    }
    if(direc == "left") {
      dx -= this.change
    }
    if(direc == "right") {
      dx += this.change
    }
  }, 10);
  this.time = 0;
}
var no = -1
async function stop() {
  no++;
  clearInterval(holdup[no])
  //time = 0;
}

document.onkeydown = checkKeyd;
document.onkeyup = checkKeyu;

var keyup = 0
var keydown = 0
var keyleft = 0
var keyright = 0

function checkKeyd(e) {
    e = e || window.event;

    if (e.keyCode ===  38) {
        if(keyup==0){
            hold("up")
            keyup = 1
        }
    }
    else if (e.keyCode === 40) {
        if(keydown==0){
            hold("down")
            keydown = 1
        }
    }
    else if (e.keyCode === 37) {
        if(keyleft==0){
            hold("left")
            keyleft = 1
        }
    }
    else if (e.keyCode === 39) {
        if(keyright==0){
            hold("right")
            keyright = 1
        }
    }
}

function checkKeyu(f) {
    f = f || window.event;

    if (f.keyCode ===  38) {
        stop("up")
        keyup = 0
    }
    else if (f.keyCode === 40) {
        stop("down")
        keydown = 0
    }
    else if (f.keyCode === 37) {
       stop("left")
       keyleft = 0
    }
    else if (f.keyCode === 39) {
       stop("right")
       keyright = 0
    }
}