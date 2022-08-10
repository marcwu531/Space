var touch = 0;
//var bbullet = bbullet;
  var detectlose = setInterval(function() {
    touch = 0;
    
    udetect()
    bdetect()
    
    if (touch == 0) {
document.getElementById("player").style.borderLeft = 30+"px solid lightblue";
    } else if (touch == 1) {
        document.getElementById("player").style.borderLeft = 30+"px solid red";
    }
  }, 10)

function lose() {
    if (lost == 0) {
        lost = 1;
        //console.log("touched")
  //document.getElementById("border").style.display = "none";
    //alert("Game over!")
           }
}

async function udetect() {
  for(i=0;i<ufonum+1;i++) {
    if(!killed.includes(i)) {
     this.ufox = Number(ufoclone[i].style.right.split("px")[0])
     this.ufoy = Number(ufoclone[i].style.top.split("px")[0])
    var playerx = Number(player.style.right.split("px")[0])
    var playery = Number(player.style.top.split("px")[0])
    var leftx = playerx + 30
    var rightx = playerx - 40
    var upy = playery - 30
    var downy = playery + 25
    if(this.ufox < leftx && this.ufox > rightx && this.ufoy < downy && this.ufoy > upy) {
      lose();
      touch = 1;
      i = ufonum;
    }
    }
  }
}
var sizew = [];
var sizel = [];
async function bdetect() {
  for(j=0;j<bbullets.length-1;j++){
    if(!bbulletr.includes(j)) {
      var playerx = Number(player.style.right.split("px")[0])
      var playery = Number(player.style.top.split("px")[0])
      this.bbulletx = Number(bbullet[j].style.right.split("px")[0])
      this.bbullety = Number(bbullet[j].style.top.split("px")[0])
      if (bbullettype[j]==1) {
        sizew[j] = 15
        sizel[j] = 15
      }
      if (bbullettype[j]==2) {
        sizew[j] = 21
        sizel[j] = 11
      }
      var leftx = playerx + sizew[j]
      var rightx = playerx - sizew[j]
      var upy = playery - sizel[j]
      var downy = playery + sizel[j] //changes
      if(this.bbulletx < leftx && this.bbulletx > rightx && this.bbullety < downy && this.bbullety > upy) {
        touch = 1
        lose()
        j=bbullets.length
      }
    }
  }
}