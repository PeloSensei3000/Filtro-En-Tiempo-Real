noseX=0;
noseY=0;
function preload() {
  nariz=loadImage('https://i.postimg.cc/g2b1C7jt/th-removebg-preview.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotposes);
}
function modelLoaded(){
  console.log('modelocargado');
}
function draw() {
//fill(255, 0, 0);
//stroke(255, 0, 0);
  image(video, 0, 0, 300, 300)
//circle(noseX, noseY, 20);
image(nariz, noseX, noseY, 35, 35);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function gotposes(results){
if(results.length>0){
  console.log(results)
  noseX=results[0].pose.nose.x - 15;
  noseY=results[0].pose.nose.y - 15;
  console.log("nariz x= "+results[0].pose.nose.x);
  console.log("nariz y= "+results[0].pose.nose.y);
}
  
}