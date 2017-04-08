// LIGHT ELEMENT
var serial;             // variable to hold an instance of the serialport library
var portName = 'COM5';  // fill in your serial port name here
var indicatecolor = 0;
var themecolor;
var white;
var themecolor2;
var white75;
var blackcolor;


// VIDEO
var fingers;

// Audio input
var mic;

function setup() {
  createCanvas(0, 0);
  
  mic = new p5.AudioIn()
  mic.start();

  fingers = createVideo('assets/video/intro.mp4');
  fingers.play();

  blackcolor =          color(0,0,0);
  themecolor =          color(184,52,0);
  white =               color(255, 255, 241);
  themecolor2 =         lerpColor(color(10,10,10),themecolor,0.5);
  whiteNEW =             color(255/3, 255/3, 241/3);

    var sentstr =   Math.trunc(red(white))+
                    ","+Math.trunc(green(white))+
                    ","+Math.trunc(blue(white))+'\n';
    serial.write(sentstr);

	serial = new p5.SerialPort();    // make a new instance of the serialport library
	serial.open(portName,9600);           // open a serial port


    serial.write(sentstr);

}

function draw(){
    // FUCKING LIGHT
    // 40 framerate
    if(frameCount>=(5*40) && indicatecolor <= 1 ){
    	indicatecolor = indicatecolor + 0.01;
	    var temcolor =  lerpColor(white, whiteNEW, indicatecolor);
	    var sentstr =   Math.trunc(red(temcolor))+
	                    ","+Math.trunc(green(temcolor))+
	                    ","+Math.trunc(blue(temcolor))+'\n';

	    serial.write(sentstr);
	    // print(sentstr);
    } 
    // else if(frameCount % 2 == 0){
	   //  var sentstr =   Math.trunc(red(white))+
	   //                  ","+Math.trunc(green(white))+
	   //                  ","+Math.trunc(blue(white))+'\n';
    // 	serial.write(sentstr);
    // }
    

}