var serial;          // variable to hold an instance of the serialport library
var portName = 'COM5'; // fill in your serial port name here
var indicatecolor = 0;
// VIDEO
var fingers;

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

}

function draw() {

}

function serialEvent() {
	inData = Number(serial.read());
	if(inData == 1) {
		window.location.href = "index.html";
	}
}
 
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}