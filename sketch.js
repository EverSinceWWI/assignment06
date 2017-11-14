var myData;
var usaFlag;
var itaFlag;
var rusFlag;
var flags;
var astroData;
var slideX=0;
var xSlideArea=20;
var ySlideArea=145;
var wSlideArea=199;
var hSlideArea=40;
var xFEArea=20;
var xCArea=180;
var yTitleSelector=225;
var wFESelector=150;
var wCASelector=100;
var hTitleSelector=30;
var xUSAFlag=20;
var xRUSFlag=80;
var xITAFlag=140;
var yFlags=65;
var wFlags=50;
var hFlags=26;
var a=0;
var tr=0;
var compSize=0;
var FE_Selector=false;
var C_Selector=false;
var USA_Selector=false;
var RUS_Selector=false;
var ITA_Selector=false;

var flagOpacity=80;
var resultTranslator=false;

var lastsection=false;
var found=false;
var dragged=false;
function preload() {

myData=loadJSON('./assets/peopleinspace.json');
usaFlag=loadImage('./assets/flag-usa.jpg');
rusFlag=loadImage('./assets/flag-russia.jpg');
itaFlag=loadImage('./assets/flag-italy.jpg');
myFont=loadFont('./assets/PressStart2P-Regular.ttf');

bresnik=loadImage('./assets/astronauts/randy-bresnik.jpg');
ryazansky=loadImage('./assets/astronauts/sergey-ryazansky.jpg');
nespoli=loadImage('./assets/astronauts/paolo-nespoli.jpg');
vandeHei=loadImage('./assets/astronauts/mark-vande-hei.jpg');
acaba=loadImage('./assets/astronauts/joseph-acaba.jpg');
misurkin=loadImage('./assets/astronauts/alexander-misurkin.jpg');

}
function setup() {
var astroData = myData.people;
createCanvas(innerWidth,innerHeight);
for(var i = 0; i<astroData.length; i++) {
  astroData=myData.people[i];
  var myAstronaut = astroData[i];
  }
}
function draw() {
  push();
  // scaler();
background(15,17,15);
fill(200,200,220);
textFont(myFont);
var astroData = myData.people;
push();
if(resultTranslator==true){
  if(tr>-260) {tr-=10; }
  if(tr==-260) {tr=-260}
  translate(0,tr);
}
textSize(14);
if(frameCount>10) {
text("ISS ASTRONAUTS SEARCH DATABASE", 20,30);
}
textSize(9);
if(frameCount>20) {
text("Select country: ",20,53);
}
if(frameCount>21) {
if(USA_Selector==true){
flag(usaFlag,xUSAFlag,yFlags);
text(astroData[0].country,32,yFlags+40);
}
else{
  push();
  tint(255,flagOpacity);
  flag(usaFlag,xUSAFlag,yFlags);
  pop();
};

if(RUS_Selector==true){
flag(rusFlag,xRUSFlag,yFlags);
text(astroData[1].country,77,yFlags+40);
}
else{
  push();
  tint(255,flagOpacity);
  flag(rusFlag,xRUSFlag,yFlags);
  pop();
};

if(ITA_Selector==true){
flag(itaFlag,xITAFlag,yFlags);
text(astroData[2].country,142,yFlags+40);
}
else{
  push();
  tint(255,flagOpacity);
  flag(itaFlag,xITAFlag,yFlags);
  pop();
};
}


if(USA_Selector==true || RUS_Selector==true || ITA_Selector==true) {
text("Select minimal experience level:",20,140);


push();
fill(180,180,180,80);
noFill();
noStroke();
rect(xSlideArea,ySlideArea,wSlideArea,hSlideArea);
pop();

var sliderCounter=slideX+10;
text(sliderCounter+" career days",240,170);

push();
stroke(200,200,220,180);
strokeWeight(1);
line(20,165,220,165);
pop();
push();
noStroke();
fill(200,200,220);
rect(30+slideX,155,10,20);
pop();
if(dragged==true) {
text("Select role:",20,210);
text(astroData[1].title,28,245);
text(astroData[0].title,190,245);
push();
noFill();
stroke(200,200,220);
strokeWeight(2);
if(FE_Selector==true){
rect(xFEArea,yTitleSelector,wFESelector,hTitleSelector);
lastsection=true;
}
if(C_Selector==true){
rect(xCArea,yTitleSelector,wCASelector,hTitleSelector);
lastsection=true;
}
pop();
if(slideX<-10) {slideX=-10};
if(slideX>=192) {slideX=191};
}
}

//SEARCH RESULTS

if(USA_Selector==true && sliderCounter<=astroData[0].careerdays && C_Selector==true) {
  profile(astroData[0].name,usaFlag,335,astroData[0].title,astroData[0].launchdate,astroData[0].bio,280,bresnik);
  found=true;
}
if(RUS_Selector==true && sliderCounter<=astroData[1].careerdays && FE_Selector==true) {
  profile(astroData[1].name,rusFlag,370,astroData[1].title,astroData[1].launchdate,astroData[1].bio,270,ryazansky);
  found=true;
}
if(ITA_Selector==true && sliderCounter<=astroData[2].careerdays && FE_Selector==true) {
  profile(astroData[2].name,itaFlag,335,astroData[2].title,astroData[2].launchdate,astroData[2].bio,270,nespoli);
  found=true;
}
if(USA_Selector==true && sliderCounter<=astroData[3].careerdays && FE_Selector==true) {
  profile(astroData[3].name,usaFlag,347,astroData[3].title,astroData[3].launchdate,astroData[3].bio,270,vandeHei);
  found=true;
}
push();
if(sliderCounter<=astroData[3].careerdays) {translate(0,185);}
if(USA_Selector==true && sliderCounter<=astroData[4].careerdays && FE_Selector==true) {
  profile(astroData[4].name,usaFlag,325,astroData[4].title,astroData[4].launchdate,astroData[4].bio,275,acaba);
  found=true;
}
pop();
if(sliderCounter<=astroData[1].careerdays) {translate(0,185);}
if(RUS_Selector==true && sliderCounter<=astroData[5].careerdays && FE_Selector==true) {
  profile(astroData[5].name,rusFlag,395,astroData[5].title,astroData[5].launchdate,astroData[5].bio,275,misurkin);
  found=true;
}
pop();
if(found==false && lastsection==true){text("no results found.",20,300)};

pop();
//SCREEN
a=a+1;
if(a%2==1) {
  for(i=0;i<height;i+=3) {
    push();
    strokeWeight(2);
    stroke(150,150,155,10);
    line(0,i,width,i);
    pop();
    }
}
else{
for(i=0;i<height;i+=3) {
  push();
  strokeWeight(2);
  stroke(120,120,125,10);
  line(0,i,width,i);
  pop();
  }
  // console.log(a%2);
}
}

function scaler() {
  scale(compSize/500);
  if(width>height) {compSize=height;}
  else {compSize=width;}
}

function profile(name,flag,flagX,role,launch,biog,leading,profileimg) {

  this.launchDate=launch;
  this.daysInSpace = floor((Date.now() - Date.parse(this.launchDate))/(1000*60*60*24));

  resultTranslator=true;
  textSize(12);
  fill(0,100,200);
  text(name,170,300);
  fill(200,200,220);
  push();
  image(flag,flagX,287,usaFlag.width/2,usaFlag.height/2);
  pop();
  textSize(9);
  text(role,170,320);
  text("Days in space: "+this.daysInSpace+" days",170,350);
  text(biog,170,375,leading,300);
  image(profileimg,20,285,bresnik.width/4.8,bresnik.height/4.8);
}

function flag(nation,pos_x,pos_y) {
  image(nation,pos_x,pos_y);
}

function mouseDragged() {
  dragged=true;
  if(mouseX > xSlideArea && mouseX < xSlideArea+wSlideArea && mouseY > ySlideArea && mouseY < ySlideArea+hSlideArea) {
    if(slideX>=-10 && slideX<192){slideX=mouseX-35}
    else{}
    }
    var sliderCounter=slideX+10;
  // console.log("slideX: "+slideX+" sliderCounter: "+sliderCounter);
}

function mousePressed() {
  if(mouseX > xFEArea && mouseX < xFEArea+wFESelector && mouseY > yTitleSelector && mouseY < yTitleSelector+hTitleSelector) {
    if(FE_Selector==false) {FE_Selector=true; C_Selector=false;} else{}
  }
  if(mouseX > xCArea && mouseX < xCArea+wCASelector && mouseY > yTitleSelector && mouseY < yTitleSelector+hTitleSelector) {
    if(C_Selector==false) {C_Selector=true; FE_Selector=false;} else{}
  }
  if(mouseX > xUSAFlag && mouseX < xUSAFlag+wFlags && mouseY > yFlags && mouseY < yFlags+hFlags) {
    if(USA_Selector==false) {USA_Selector=true; RUS_Selector=false; ITA_Selector=false;} else{}
  }
  if(mouseX > xRUSFlag && mouseX < xRUSFlag+wFlags && mouseY > yFlags && mouseY < yFlags+hFlags) {
    if(RUS_Selector==false) {RUS_Selector=true; USA_Selector=false; ITA_Selector=false;} else{}
  }
  if(mouseX > xITAFlag && mouseX < xITAFlag+wFlags && mouseY > yFlags && mouseY < yFlags+hFlags) {
    if(ITA_Selector==false) {ITA_Selector=true; USA_Selector=false; RUS_Selector=false;} else{}
  }
}
function windowResized() {resizeCanvas(windowWidth,windowHeight);}
