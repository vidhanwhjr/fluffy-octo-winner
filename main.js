function preload() {
	gameoversound = loadSound('gameover.wav');
	coinsound = loadSound('coin.wav');
	jumpsound = loadSound('jump.wav');
	kicksound = loadSound('kick.wav');
	mario_die_sound = loadSound('mariodie.wav');
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('webcam');

	classifier = ml5.poseNet(video, modeLoaded);
	classifier.on('pose', gotPoses);
}

function modeLoaded(){
	console.log('model loaded');
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game();
}






