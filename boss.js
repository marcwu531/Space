var boss = document.getElementById("boss")
var level = 1;
//var bmove;
boss.style.display = "none";
boss.style.right = (-100)+"px"
async function bosss() {
  boss.style.display = "block";
  boss.style.filter = "brightness(1)"
  //var bmove = setInterval(function(){
//while (Number(boss.style.right.split("px")[0]) < (-50)/*1 == 2*/) {
  //for (cicreate=1;cicreate<=camount[level];cicreate++) {
    //for(ucr=0;ucr<Math.floor(level**0.8);ucr++) {
  clearInterval(create)//[cicreate])
    //}
  //}
  //this.r=0;
  for(this.r=0;this.r<50;this.r++) {
  boss.style.right = (Number(boss.style.right.split("px")[0]) + 1) + "px";
    await delay(100);
  }
//}
/*if(level==1) {
  bosshp=100
} else {*/
  bosshp=100*Math.floor(level**1.25)
//}
  await fbbullet(Math.min(level,maxtype));
  //clearInterval(bmove)
  await bossdie()    
    boss.style.right = (-100)+"px"
    boss.style.display = "none"
    level++;
    target = Math.floor(level**2*2+Math.E)    
    uspawn()
    //for(uci=0;uci<Math.floor(level**0.8);uci++) {
    ucreate(Math.floor(level**0.8))//level,uci+1)
    /*await delay(Math.floor(Math.random()*501)+1000)
    }*/
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

var bbulletc = document.getElementById("bbulletc")
var bbulletcr = document.getElementById("bbulletr")
//bbulletc.style.display = "none"
bbulletc.style.top = 135 + "px"
bbulletc.style.right = -50 + "px"
bbulletc.style.filter = "brightness(1)"
bbulletcr.style.top = 135 + "px"
bbulletcr.style.right = -50 + "px"
bbulletcr.style.filter = "brightness(1)"

var bbullet = [];
var bmovec = [];
var bup = [];
var bright = [];

var bosshp = 0;
var bcd;

async function fbbullet(lv) {
    while(bosshp>0) {
   var type = Math.floor(Math.random()*(lv)+1)
   atk(type)
      //if(type == 1) {bcd=5000}
      await delay(bcd)
      // <(bosshp/2)
    }
}

var bbullets = []
var bbulletr = []

var bmoved = []

async function bmove(what,mode,which,x,y) {
  if(!bbullets.includes(which)) { 
  bbullets.push(which)
  }
  if(!bmoved[which]) {bmoved[which] = 1}
  if(what == 1) {
  if(/*which<amountshot-15*/mode==1){
  if(bmoved[which] < 500) {
    //if(bmoved[which] = 1) {
  await delay((Math.abs(y)**2)*Math.E)
    //}
  bbullet[which].style.right = (Number(bbullet[which].style.right.split("px")[0])+(1+x*30/bmoved[which]))+"px";
  bbullet[which].style.top = (Number(bbullet[which].style.top.split("px")[0])-((y/20)))+"px";
  bmoved[which]++
  } else {
    //console.log("removed")
    clearInterval(bmovec[which])
document.getElementById("border").removeChild(bbullet[which])
bbulletr.push(which)
  }
  } else {
    if(bmoved[which] < 100) {
    //if(bmoved[which] = 1) {
  await delay((Math.abs(y)**2)*Math.E)
    //}
  bbullet[which].style.right = (Number(bbullet[which].style.right.split("px")[0])+(1+x*30/bmoved[which]))+"px";
  bbullet[which].style.top = (Number(bbullet[which].style.top.split("px")[0])-((y/20)))+"px";
  bmoved[which]++
     /* if (bmoved[which] = 30) {
        bbullet[which].style.backgroundColor = "lightblue"
        /*bbullet[which].style.filter = 
"brightness(" +(Number(bbullet[which].style.filter.split("brightness(")[1].split(")")[0]) + 0.01) + ")"*/
        //console.log(which +":"+ bbullet[which].style.filter)
      //}
  } else {
    //console.log("removed")
    clearInterval(bmovec[which])
    clearInterval(ness[j])
document.getElementById("border").removeChild(bbullet[which])
      bbulletr.push(which)
    }
  }
} else if (what == 2) {
  if(bmoved[which]<500) {
  bbullet[which].style.right = (Number(bbullet[which].style.right.split("px")[0])+x)+"px";
  bmoved[which]++
  } else {
    //console.log("removed")
    clearInterval(bmovec[which])
    document.getElementById("border").removeChild(bbullet[which])
    bbulletr.push(which)
  }
}
}
var amountshot = 0;
var dodge;
var m;
var maxtype = 2;
var bbullettype = [];

async function atk(type) {
  if (type == 1) {
var ymax=15;
var ymin=-15;
dodge = (Math.random()*(ymax-ymin+1)+ymin)
var rng = Math.floor(Math.random()*5)+8
for(i=0;i<30;i++) {
     j = i+amountshot
     bbullet[j] = bbulletc.cloneNode(true);
     bbullettype[j] = 1
document.getElementById("border").appendChild(bbullet[j]);
     //bbullet[j].style.right = -50 + "px"
     //bbullet[j].style.direction = j;
     
  
     bup[j] = (Math.random()*(ymax-ymin+1)+ymin)

  if (dodge+15<bup[j] && dodge-15>bup[j]) return document.getElementById("border").removeChild(bbullet[j])
  /*var xmax=1.25;
     var xmin=0.75;
     bright[j] = (Math.random()*(xmax-xmin+1)+xmin)*/
  bright[j]=1-bup[j]/1000
  m=1
  if (j-amountshot>rng) {
    m=0
  //} else {
    bbullet[j].style.backgroundColor = /*"red"*/ "#ff6969"
    t(j)
  }
  //bbullets.push(j)
     atkm(m,j)
     //await delay(5000)
}
amountshot += 30;

bcd = ((5000+level*Math.PI)/(level**(Math.E/15))-Math.PI)

} else if (type == 2) {
  for(i=0;i<15;i++) {
  cr = i+amountshot
  bbullet[cr] = bbulletcr.cloneNode(true);
  bbullettype[cr] = 2
  document.getElementById("border").appendChild(bbullet[cr]);
  var crmax = 272
  var crmin = 10
  bbullet[cr].style.top = (Math.random()*(crmax-crmin+1)+crmin)+"px"
  //bbullets.push(cr)
  /*for(crd=0;crd<300;crd++) {
    bbullet[cr].style.right = (Number(bbullet[cr].style.right.split("px")[0])+1)+"px"
    await delay(100)
  }
  bbulletr.push(cr)*/
  //bbullets.push(cr)
  atkm("m",cr)
  bcd=((3000+level*Math.PI)/(level**(Math.E/15))-Math.PI)
}
amountshot += 15
}
}
var ness = []
async function atkm(m,j) {
  if (!isNaN(m)) {
  bmovec[j] = setInterval(function(){bmove(1,m,j,bright[j],bup[j])},/*((Math.abs(bup[j])**2)*3+15)*/15)
  } else {
    bmovec[j] = setInterval(function(){bmove(2,"",j,1,"")},15)
  }
}

//var atkloop = setInterval(function(){atk("a")},5000)

/*function rng(min,max) {
  return(Math.random()*(max-min+1)+min)
}*/

async function brigh(j) {
      bbullet[j].style.filter = 
"brightness(" +(Number(bbullet[j].style.filter.split("brightness(")[1].split(")")[0]) + 0.01) + ")"
  if (Number(bbullet[j].style.filter.split("brightness(")[1].split(")")[0]) >= 3) {
    clearInterval(ness[j])
  }
}

async function t(j) {
  //await delay(800)
  ness[j] = setInterval(function() {brigh(j)}, 10)
}

/*try{
	document.getElementById("player").textContent = "Down"
} catch(err) {
  console.log
    (err)
  };
}*/

var showtext = document.getElementById("showtext")
showtext.style.textAlign = "left"
var hploop = setInterval(function(){
  if(bosshp>0){
    showtext.textContent = `Boss health: ${bosshp}`
  }else{
    //var showlevel = " "+level
    showtext.textContent = "Level "+level//showlevel //"Infinity"
  }
  showtext.style.right = -20+"px"//(Number(boss.style.right.split("px")[0])+30)+"px"
  showtext.style.top = boss.style.top
},10)
 
async function bossdie() {
  for(l=0;l<20;l++) {
    boss.style.filter = `brightness(${1+(l/25)})`
    await delay(100)
  }
}

//level=2
