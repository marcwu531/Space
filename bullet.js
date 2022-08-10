var bullet = document.getElementById("bulletBody")
//bullet.style.display = hidden;
var clone = []
var cre = setInterval(create, 300)//300
var place = -1;
var move = []

async function create() {
  place++;
clone[this.place] = bullet.cloneNode(true)
document.getElementById("border").appendChild(clone[this.place]);
  var what = this.place
move[this.place] = setInterval(function () {go(what)}, 5)
}
var bulletremoved = []
async function go(which) {
if(Number(clone[which].style.right.split("px")[0]) > -30) {
clone[which].style.right = (Number(clone[which].style.right.split("px")[0]) - 1.25) + "px";//3
  } else {
  //console.log("removed")
    clearInterval(move[which]);
  bulletremoved.push(which)
  document.getElementById("border").removeChild(clone[which])
  if(bosshp>0) {
    bosshp -= 1
  }
  }
}