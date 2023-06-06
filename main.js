var canvas, video, poseNet, nariz;

let narizURL = './nariz/nariz4.png';
const narizLado = 120;

var noseX = 100;
var noseY = 100;

setButtons();

function preload() {
    nariz = loadImage(narizURL);
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center()
    // camera
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

    imageMode(CENTER);
    // poseNet
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses);
}

function draw() {
    
}

function takeSnapshot() {
   
}

function modelLoaded() {
   
}

function gotPoses(results) {
    if (results.length > 0) {
        // console.log(results);
        // console.log(results[0].pose.nose.x);
        // console.log(results[0].pose.nose.y);
        // console.log(results[0].pose.nose.y);
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function setButtons() {
    
}

function changeNose(nariz) {
   
}