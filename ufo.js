var up = document.getElementById("ufoup")
var down = document.getElementById("ufodown")
var ufospd = []
down.style.right = (-85)+"px"//+12.5
down.style.top = 100+"px"//-7.5(30-270)
up.style.right = (Number(down.style.right.split("px")[0]) + 12.5) + "px";
up.style.top = (Number(down.style.top.split("px")[0]) - 7.5) + "px";

var ufonum = -1;
var ufocreate = []
var ufoclone = []
var upclone = []
var ufomove = []
//var camount = []
//var create;
//function create() {
  var create;
function ucreate(repeat/*level,amount*/) {
  if (!repeat) repeat=1
  //camount[level] = amount
create/*[level]*/ = setInterval(function(){
  ufocrea()
  var min = -10
  var max = 10
  var cd = 2000+(1000/(level**Math.SQRT2))+(Math.random()*(max-min+1)+min)
setTimeout(function(){},cd/repeat)
  }, 2000/repeat)}
  ucreate()
//}
//create();
var orimove = setInterval(function(){
  originmove();
  //fix();
}, 10)
async function ufocrea() {
  //console.log("created")
  ufonum++
  var ufowhat = this.ufonum
ufoclone[ufowhat] = down.cloneNode(true)
  upclone[ufowhat] = up.cloneNode(true)
document.getElementById("border").appendChild(ufoclone[this.ufonum])
document.getElementById("border").appendChild(upclone[this.ufonum])
  var min = 0.25+(((level**0.1)**(level-1))*0.1)-0.1
  var max = 0.7+(((level**0.1)**(Math.abs(level-Math.E+Math.SQRT2)))*0.1)-0.1
ufospd[this.ufonum] = Math.random()*(max-min+1)+min
  var spdk = Math.floor(ufospd[this.ufonum]*1000)
  //console.log(spdk)
if  ((spdk%531)==0) {ufospd[this.ufonum] = 3}
ufomove[this.ufonum] = setInterval(function(){downmove(ufowhat)}, 10)
}

async function downmove(ufoid) {
  if (Number(ufoclone[ufoid].style.right.split("px")[0]) < 450) {
  ufoclone[ufoid].style.right = /*100 + "px" /*/(Number(ufoclone[ufoid].style.right.split("px")[0]) + ufospd[ufoid]) + "px";
  //fix(id)
  } else {
    //console.log("removed")
    //clearInterval(ufomove[this.ufoid])
    ufoclone[ufoid].style.right = (-85) + "px";
  }
}

function fix() {
up.style.right = (Number(down.style.right.split("px")[0]) + 12.5) + "px";
up.style.top = (Number(down.style.top.split("px")[0]) - 7.5) + "px";
}
  var max = 270;
  var min = 30;
function originmove() {
  var rng = Math.floor(Math.random()*(max-min+1)+min);
down.style.top = rng + "px"
up.style.top = rng - 7.5 + "px"

}

var cloneup = setInterval(function() {
  for(i=0;i<ufonum+1;i++) {
  upclone[i].style.right = (Number(ufoclone[i].style.right.split("px")[0]) + 12.5) + "px";
upclone[i].style.top = (Number(ufoclone[i].style.top.split("px")[0]) - 7.5) + "px";
  }
}, 10)

//var shot = 0;
  var detectshot = setInterval(function(){
//shot = 0;
    var u=0;
    var b=0;
    for(u=0;u<ufonum+1;u++){//ufo
if (!killed.includes(u)) {
 // var br = bulletremoved 
      for(b=0;b<place+1;b++){//bullet
        if (!bulletremoved.includes(b)){
        this.ufox = Number(ufoclone[u].style.right.split("px")[0])
       this.ufoy = Number(ufoclone[u].style.top.split("px")[0])
       this.bulletx = Number(clone[b].style.right.split("px")[0])
       this.bullety = Number(clone[b].style.top.split("px")[0])
       this.rightx = bulletx - 30;
       this.leftx = bulletx + 30;
        this.upy = bullety - 17.5;
        this.downy = bullety + 15;
        if (this.ufox > this.rightx && this.ufox < this.leftx && this.ufoy > this.upy && this.ufoy < this.downy) {
//console.log(`shot: ${u}`)
remove(u,b);
          //shot = 1
        }
      }
      }
    }
  }
    /*if (shot == 1) {
      down.style.backgroundColor = "blue"
    } else {
      down.style.backgroundColor = "darkred"
    }*/
  }, 10)
var lost = 0;

var ufoamount = 0;
var killed=[]
async function remove(u,b) {
  ufoamount++;
  killed.push(u)
  bulletremoved.push(b)
  try {
    this.uf=u;
    this.bu=b;
  clearInterval(ufomove[this.uf]);
clearInterval(move[this.bu]);
  document.getElementById("border").removeChild(ufoclone[this.uf])
  document.getElementById("border").removeChild(upclone[this.uf])
  document.getElementById("border").removeChild(clone[this.bu])
  } catch (err) {
    console.log(err)
  }
}
var target = 8
var spawn

function uspawn() {
spawn = setInterval(function(){
  if(ufoamount >= target) {
    clearInterval(spawn)
    clearInterval(create)
    //console.log("boss")
    bosss();
  }
},10)
}

uspawn()