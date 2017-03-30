
// VIDEO
var fingers;

// Audio input
var mic;

//images
var bg, level, knob, knob_shadow, lound, lounder;

var fonts;
var d,h;
var maxcamdb, maximumDB, passmaxDB, _db, duration, time, _db_max;
var angle, lastAngle, d, h, currentTime, fullCircleTime;
var fontcolorDB, fontcolorSecound, fillTimeLapsed, fillTimecoundown;
function setup() {
  createCanvas(1080, 1920);
  mic = new p5.AudioIn()
  mic.start();
  // bg =             loadImage("assets/img/BG-01.png");
  bg =             loadImage("assets/img/png_dbug_test.png");
  level =          loadImage("assets/img/level.png");
  knob =           loadImage("assets/img/level0.png");
  knob_shadow =    loadImage("assets/img/level2.png");
  lound =          loadImage("assets/img/lounder.png");
  lounder =        loadImage("assets/img/lounderand.png");
  fonts =          loadFont("assets/font/SCG-Bol.otf");



  duration =            20;
  time =                20;
  maximumDB =           0;
  passmaxDB =           2750;
  _db =                 0;
  angle =               0;
  lastAngle =           0;
  currentTime =         0;
  d =                   width*0.418;
  // d =                   makeEvenRoundUp(d);
  maxcamdb =            2800;
  fullCircleTime =      4000;
  fontcolorDB =         color(255, 204, 0);
  fontcolorSecound =    color(255, 204, 0);
  fillTimeLapsed =      color(216, 127, 96); 
  fillTimecoundown =    color(43, 105, 107); 

}

function draw(){

  background(bg);
  micLevel = mic.getLevel();
  image(level,0,0);
  image(knob,0,0);
  image(knob_shadow,0,0);

  textFont(fonts);
  textSize(16);
  textAlign(RIGHT);
  text("ABCD", 50, 30);
  textAlign(CENTER);
  text("EFGH", 50, 50);
  textAlign(LEFT);
  text("IJKL", 50, 70);

  push();
  translate(width/2,height/2-200);
  rotate(PI/1.25);
  noStroke();
  fill(fillTimeLapsed);
  arc(0,0, d,d, 0,angle);
  pop();
  console.log(angle);
  lastAngle = angle;

  
  h = map(micLevel, 0, 0.9, 0, maxcamdb);
  currentTime = h;
  // _db = (int)map( currentTime , 0, maxcamdb, 50, 110 );
  // if (_db > _db_max) _db_max = _db;


  angle = (currentTime/fullCircleTime) * TWO_PI;
  angle %= TWO_PI;
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);


}

  // function makeEvenRoundUp(number) {
  //   if( number%2 != 0 ){ number+=1; }
  //   return number;
  // }