//2a//
var precolor = document.getElementById("preview")
var colord = document.getElementById("color")

colord.addEventListener("change",function(){
    precolor.style.backgroundColor = colord.value
})
//2b//
var numb = document.getElementById("number")
var inputtype1 = document.getElementById("input1")
var inputtype2 = document.getElementById("input2")
var inputtype3 = document.getElementById("input3")
var inputtype4 = document.getElementById("input4")
var rangeb = document.getElementById("range")
function changeType(type){
    inputtype1.type = type;
    inputtype2.type = type;
    inputtype3.type = type;
    inputtype4.type = type;
}
numb.addEventListener("click", function(){
   changeType("number");
})

rangeb.addEventListener("click", function(){
    changeType("range");
})

/*
numb.addEventListener("click",function(){
    inputtype1.type = "text"
    inputtype2.type = "text"
    inputtype3.type = "text"
    inputtype4.type = "text"
})
rangeb.addEventListener("click",function(){
    inputtype1.type = "range"
    inputtype2.type = "range"
    inputtype3.type = "range"
    inputtype4.type = "range"
})
*/
//2c//
var haird = document.getElementById("hair")
var eyesd = document.getElementById("eyes")
var nosed = document.getElementById("nose")
var mouthd = document.getElementById("mouth")

inputtype1.addEventListener("change",function(){
    haird.style.width = inputtype1.value + "%"
})
inputtype2.addEventListener("change",function(){
    eyesd.style.width = inputtype2.value + "%"
})
inputtype3.addEventListener("change",function(){
    nosed.style.width = inputtype3.value + "%"
})
inputtype4.addEventListener("change",function(){
    mouthd.style.width = inputtype4.value + "%"
})

//3//
var hairi = ['img/hair1.png','img/hair2.png', 'img/hair3.png'];
var num = 0

haird.addEventListener("click",function(){
    var len = hairi.length;
    haird.src = hairi[num++];
    if (num == len) {
        num = 0;
    }
});
var eyesi = ['img/eyes1.png','img/eyes2.png', 'img/eyes3.png']

eyesd.addEventListener("click",function(){
    var len = eyesi.length;
    eyesd.src = eyesi[num++];
    if (num == len) {
        num = 0;
    }
});
var nosei = ['img/nose1.png','img/nose2.png', 'img/nose3.png']
nosed.addEventListener("click",function(){
    var len = nosei.length;
    nosed.src = nosei[num++];
    if (num == len) {
        num = 0;
    }
});

var mouthi = ['img/mouth1.png','img/mouth2.png', 'img/mouth3.png']
mouthd.addEventListener("click",function(){
    var len = mouthi.length;
    mouthd.src = mouthi[num++];
    if (num == len) {
        num = 0;
    }
});

//4a//

var dispd = document.getElementById("display")
var preview = document.getElementById("preview")
function createFace(){
    var newdiv = document.createElement("div")
    dispd.appendChild(newdiv);
    newdiv.className = "itemsn";
    newdiv.innerHTML = preview.innerHTML;
    newdiv.style.backgroundColor = preview.style.backgroundColor;

}
var plus = document.getElementById("create")
plus.addEventListener("click", function(){
    createFace();
})

//4b//
function randomFace(){
var rando = Math.round(Math.random()*2)+1
var randohairsize = Math.round(Math.random()*70);
var randoeyesize = Math.round(Math.random()*40);
var randonosesize = Math.round(Math.random()*30);
var randomouthsize = Math.round(Math.random()*35);
var r = Math.round(Math.random()*255);
var g = Math.round(Math.random()*255);
var b = Math.round(Math.random()*255);
haird.src = "img/hair"+rando+".png";
eyesd.src = "img/eyes"+rando+".png";
nosed.src = "img/nose"+rando+".png";
mouthd.src = "img/mouth"+rando+".png";
    
preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";

haird.style.width = randohairsize+"%";
inputtype1.value = randohairsize;

eyesd.style.width = randoeyesize+"%";
inputtype2.value = randoeyesize;

nosed.style.width = randonosesize+"%";
inputtype3.value = randonosesize;

mouthd.style.width = randomouthsize+"%";
inputtype4.value = randomouthsize; 
}

var ranb = document.getElementById("random")
ranb.addEventListener("click", function(){
  randomFace();
})

var timer = null;
var autocreate = document.getElementById("autoR")
var stopcreate = document.getElementById("Stop")
autocreate.addEventListener("click", function(){
   timer =  setInterval(function(){
		    randomFace();
        createFace();
    },500);
});

stopcreate.addEventListener("click", function(){
   clearInterval(timer);
});