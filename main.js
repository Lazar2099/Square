function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(5560,150);

    poseNET = ml5.poseNet(video,modeloaded);
    poseNET.on("pose", gotPoses);
}

noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].nose.x;
        noseY = results[0].nose.y;
        console.log("noseX = "+noseX+" noseY = "+noseY);

        leftWristX = results[0].leftWrist.x; 
        rightWristX = results[0].rightWrist.x;   
        difference = floor(leftWristX-rightWrist);
        console.log("leftWristX = "+leftWristX+" rightWristX = "+rightWristX+" difference = "+difference);
    }
}

function modeloaded(){
    console.log("PoseNET in Initialized");
}

function draw(){
    background("#969A97");
    document.getElementById("square_side").innerHTML = "Width and Height of square will be "+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY,difference);
}


