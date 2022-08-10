function loop() {
    player.style.right = (Number(player.style.right.split("px")[0]) - dx) + "px";
    player.style.top = (Number(player.style.top.split("px")[0]) - dy) + "px";
    dx *= 0.99;
    dy *= 0.99;
    if (player.style.right.split("px")[0] > 345) {
      player.style.right = 345 + "px";
    }
    if (player.style.right.split("px")[0] < 0) {
      player.style.right = 0 + "px";
    }
    if (player.style.top.split("px")[0] < 0) {
      player.style.top = 0 + "px";
    }
    if (player.style.top.split("px")[0] > 282) {
      player.style.top = 282 + "px";
    }
    
    bullet.style.right = ( + Number(player.style.right.split("px")[0]) + 10) + "px";
    bullet.style.top = (Number(player.style.top.split("px")[0]) + 6.5) + "px";
  playerup.style.right = player.style.right
  playerup.style.top = player.style.top
  
  /*console.log(`dx:${dx}`)
  console.log(`dy:${dy}`);*/
  //console.log(player.style.top)
    /*if(dx < 0.0001) {
      dx = 0;
    }
    if(dy < 0.0001) {
      dy = 0;
    }*/
  }
  dx = 0;
  dy = 0;
  var playerup = document.getElementById("playerup")
  var loop = setInterval(loop,10)
  player.style.top = 135 + "px";
  player.style.right = 330 + "px";
  var bullet = document.getElementById("bulletBody")