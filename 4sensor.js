var serial;          // variable to hold an instance of the serialport library
var portName = 'COM5'; // fill in your serial port name here
// VIDEO
var fingers;

var indicatecolor = 0;
var themecolor;
var white;
var themecolor2;
var white75;
var blackcolor;



var inData;
function setup() {
 createCanvas(0, 0);          // make the canvas
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('data', serialEvent);  // callback for when new data arrives
 serial.on('error', serialError); // callback for errors
 serial.open(portName,9600);           // open a serial port
 fingers = createVideo('assets/video/LOOP.mp4');
 fingers.play();
 fingers.loop();
 inData = 0;

 blackcolor =          color(0,0,0);
 themecolor =          color(184,52,0);
 white =               color(255, 255, 241);
 themecolor2 =         lerpColor(color(10,10,10),themecolor,0.5);
 whiteNEW =            color(255/3, 255/3, 241/3);

}

function draw() {



    var sentstr =   Math.trunc(red(white))+
                    ","+Math.trunc(green(white))+
                    ","+Math.trunc(blue(white))+'\n';

 	serial.write(sentstr);


}

function serialEvent() {
	inData = Number(serial.read());
	print("ddd");
	if(inData == 1) {
		window.location.href = "index.html";
	}
}
 
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}