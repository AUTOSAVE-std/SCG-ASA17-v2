var capture;
var begin, duration, time; 
var fillTimecoundown;
var fonts;
var bg;
var bgprint;
var proPrint;
var issave;
var xpos,ypos;
var fingers;
var d3,d2,d1;
var dlound
function preload() {


}

function setup() {
	  createCanvas(1080, 1920);

	  capture = createCapture(VIDEO);
	  capture.size(900, 1350);

	  fingers = 			createVideo('assets/video/printing.mp4');
	  dlound = loadSound('assets/sound/countphoto.wav');

	  proPrint = 			createGraphics(1200, 1731);
	  xpos =				(-720/2)-200;
	  ypos =				(-550/2)-75;
	  bg =             		loadImage("assets/img/takingpictureBG.png");
	  bgprint =             loadImage("assets/img/bgprint.png");
	  fonts =          		loadFont("assets/font/SCG-Bol.otf");
	  begin = 				millis();
	  issave =				false;
	  d3 =					false;
	  d2 =					false;
	  d1 =					false;
	  fillTimecoundown =    color(43, 105, 107);
	  duration = 			7;
	  time = 				100;
	  textFont(fonts);
	  dlound.pause(); 
}

function draw() {
	if(time > 0) {
		background(bg);
		push();
		translate(width/2, height/2);
		rotate(PI/2);
		fill(188,107,72);
		noStroke();
		rect(xpos-5, ypos-5, 650, 685);
		image(capture, xpos, ypos);

		pop();

	  if(time<=3) {
	  	fill(fillTimecoundown);
	  	textSize(200);
	  	text(time, width/2-50, height/2+550);
	  	textSize(32);
	  	text("sec", width/2+80, height/2+550);
	  }

	  	if(!d3 && time ==3){ 		
	  		dlound.play(); 
	  		d3=!d3;
	  		print("playyyy");
	  	}
	  	// else if(time==2 && !d2){ 	Dlound.play(); d2=!d2;}
	  	// else if(time==1 && !d1){ 	Dlound.play(); d1=!d1;}
		
	}

	  if (time >= 0) {
	  	time = Math.trunc(duration - (millis() - begin)/1000);
	    if (time == 0) background(255);
	  }
	  else {
	  	background(255);
		fingers.play();
	  	if(!issave){
		  	proPrint.push();
		  	proPrint.background(bgprint);
		  	proPrint.translate(width/2, height/2);
			proPrint.rotate(PI/2);
			proPrint.fill(188,107,72);
			proPrint.noStroke();
			proPrint.rect(xpos-60, ypos-85, 751, 765);
		  	proPrint.image(capture, xpos-50, ypos-75, 731, 745);
		  	proPrint.pop();
		  	// writefilename using format 
		  	// 2017-03-31-12-30-40
		  	// yyyy-mm-dd-hh-mm-ss
		  	var m = year()+"-"+month()+"-"+day()+"-"+hour()+"-"+minute()+"-"+second()+".jpg";
		  	save(proPrint, m);
		  	issave = !issave;
		 	capture.remove();
		 	capture.style("display","none");
			createCanvas(0, 0);
	  	}
	  }
}