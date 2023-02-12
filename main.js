
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO); 
	video.size(800,400);
    video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
 console.log('Model Loaded!');                                                
 }
GameStatus="";
function startGame(){
 GameStatus="start";
 document.getElementById("status").innerHTML = "Game is Loading";
}

 function gotPoses(results) { 
	if(results.length > 0) { 
		rightWristX = results[0].pose.nose.x; 
		leftWristY = results[0].pose.nose.y;
		 console.log("noseX = " + noseX +", noseY = " + noseY);
		 } 
		}



