var serial;          // variable to hold an instance of the serialport library
var portName = 'COM5'; // fill in your serial port name here
var indicatecolor = 0;
// COLOR
var themecolor;
var white;
var themecolor2;
var white75;
function setup() {
 createCanvas(400, 300);          // make the canvas
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('data', serialEvent);  // callback for when new data arrives
 serial.on('error', serialError); // callback for errors
 serial.open(portName,9600);           // open a serial port
 themecolor = color(184,52,0);
 white = color(255, 255, 241);
 themecolor2 = lerpColor(color(10,10,10),themecolor,0.5);
 white75 = color(255/2, 255/2, 241/2);

}

function draw() {
 // black background, white text:
 background(0);
 fill(255);
 // display the incoming serial data as a string:

 
 if( frameCount % 2 == 0 && indicatecolor <= 1 && frameCount >= 400) {
 	var temcolor = lerpColor(themecolor,white,indicatecolor);
 	var sentstr = 	Math.trunc(red(temcolor))+
				 	","+Math.trunc(green(temcolor))+
				 	","+Math.trunc(blue(temcolor))+'\n';
 	serial.write(sentstr);
 	print(sentstr);
 	indicatecolor = indicatecolor + 0.01;
 }
}

function serialEvent() {
  print('Something is sent back which is odd ' + data);
}
 
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}