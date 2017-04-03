var capture;
var begin, duration, time; 
var fillTimecoundown;
var fonts;
var bg;
var proPrint;
var issave;
var xpos,ypos;
var fingers;
function setup() {
	  createCanvas(1080, 1920);
	  capture = createCapture(VIDEO);
	  capture.size(900, 1350);

	  fingers = 			createVideo('assets/video/printing.mp4');
	  proPrint = 			createGraphics(1080, 1920);
	  xpos =				(-720/2)-200;
	  ypos =				(-550/2)-75;
	  bg =             		loadImage("assets/img/takingpictureBG.png");
	  fonts =          		loadFont("assets/font/SCG-Bol.otf");
	  begin = 				millis();
	  issave =				false;
	  fillTimecoundown =    color(43, 105, 107);
	  duration = 			7;
	  time = 				3;
	  textFont(fonts);

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
		  	proPrint.background(bg);
		  	proPrint.translate(width/2, height/2);
			proPrint.rotate(PI/2);
		  	proPrint.image(capture, xpos, ypos);
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