
// VIDEO
var fingers;

// Audio input
var mic;

//images
var bg, level, knob, knob_shadow, lound, lounder, maxfromMIC;

var soundsmooth = [];
var fonts;
var d,h;
var maxcamdb, passmaxDB, _db, _db_max;
var angle, lastAngle, d, h, currentTime, fullCircleTime;
var fontcolorDB, fontcolorSecound, fillTimeLapsed, fillTimecoundown;
var  LOUNDESTDB_110, LOUNDEST_AIRCON_DB_60, LOUNDEST_suck_DB_70, LOUNDEST_blender_DB_80, LOUNDEST_motobike_DB_90, LOUNDEST_lanmover_DB_100;
// TIME
var begin, currentTime, duration, time; 

// boolean 
var issouldplay1,issouldplay2;
var iseverythingPLAY;
var isnextpage;
function setup() {
  createCanvas(1080, 1920);
  mic = new p5.AudioIn()
  mic.start();
  // bg =             loadImage("assets/img/BG-01.png");
  bg =             loadImage("assets/img/BG-01.png");
  level =          loadImage("assets/img/level.png");
  knob =           loadImage("assets/img/level0.png");
  knob_shadow =    loadImage("assets/img/level2.png");
  lound =          loadImage("assets/img/lounder.png");
  lounder =        loadImage("assets/img/lounderand.png");
  fonts =          loadFont("assets/font/SCG-Bol.otf");
  Slound=          loadSound("assets/sound/lounder1.wav");
  Slounder=        loadSound("assets/sound/lounder2.wav");

  begin = millis();
  issouldplay1 =        false;
  issouldplay2 =        false;
  iseverythingPLAY =    false;
  isnextpage =          false;
  maxfromMIC =          0.7;
  duration =            20;
  time =                666;
  passmaxDB =           2750;
  _db =                 0;
  _db_max =             0;
  angle =               0;
  lastAngle =           0;
  currentTime =         0;
  d =                   width*0.418;
  d =                   makeEvenRoundUp(d);
  h =                   0;
  maxcamdb =            2800;
  fullCircleTime =      4000;
  fontcolorDB =         color(255, 204, 0);
  fontcolorSecound =    color(255, 204, 0);
  fillTimeLapsed =      color(216, 127, 96); 
  fillTimecoundown =    color(43, 105, 107); 



  LOUNDESTDB_110            = 110;
  LOUNDEST_AIRCON_DB_60     = 60;
  LOUNDEST_suck_DB_70       = 70;
  LOUNDEST_blender_DB_80    = 80;
  LOUNDEST_motobike_DB_90   = 90;
  LOUNDEST_lanmover_DB_100  = 100;
  // //////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////
  //  This is smoothness val set the array max here !!!

  for (var i = 0; i < 50; i++) {
    soundsmooth[i] = 0;
  }  
}

function draw(){
  
if(!iseverythingPLAY){

    background(bg);
    micLevel = mic.getLevel();

    push();

    translate(width/2,height/2-200);
    
    // IMAGE THE LAYOUT
    image(level,-234,-242);

    // CIRCLE ARC
    rotate(PI/1.25);
    noStroke();
    fill(fillTimeLapsed);
    arc(0,0, d,d, 0,angle);


    //  SHADOW
    image(knob_shadow,-207,-207);

    //  ROTATE KNOB
    rotate(PI/-1.25);
    rotate(map(currentTime,0,maxcamdb,0,4.5));
    image(knob,-206,-205);
    pop();


    // TELLING DB AT THE CENTER
    textFont(fonts);
    textSize(100);
    fill(fillTimeLapsed);
    // 100+
    if(_db >= 99) text(_db, width/2-75, height/2-170);
    // < 99
    else text(_db, width/2-50,height/2-170);
    textSize(32);
    text("db", width/2-20,height/2-120);


    // //////////////////////////////////////////////////////
    // /////////////////////////////////////////////////////
    //  VALUE SETTING FOR NEXT LOOP
    lastAngle = angle;

    h = map(micLevel, 0, maxfromMIC, 0, maxcamdb);
    _db = Math.trunc(map( currentTime , 0, maxcamdb, 50, 110 ));
    if (_db > _db_max) _db_max = _db;

    currentTime = smoothval(h);


    angle = (currentTime/fullCircleTime) * TWO_PI;
    angle %= TWO_PI;

    // DISPLAY TIME LEFT
    display_timeleft();
}

  iseverythingDONE();



}

function iseverythingDONE(){
  if (time<=0 && !iseverythingPLAY) {
    createCanvas(0, 0);
    playlogic();
    iseverythingPLAY = !iseverythingPLAY;
  } else if(_db_max >= 100 && !iseverythingPLAY){
    createCanvas(0, 0);
    fingers = createVideo('assets/video/110.mp4');
    fingers.play();
    if(!isnextpage) {senttofuckingtime("3camera.html",15000);}
    iseverythingPLAY = !iseverythingPLAY;
  }
}

function playlogic(){
  // LOUNDESTDB_110            = 110;
  // LOUNDEST_AIRCON_DB_60     = 60;  // unuse 
  // LOUNDEST_suck_DB_70       = 70;
  // LOUNDEST_blender_DB_80    = 80;
  // LOUNDEST_motobike_DB_90   = 90;
  // LOUNDEST_lanmover_DB_100  = 100;

  if(_db_max >= LOUNDESTDB_110) {
        fingers = createVideo('assets/video/110.mp4');
        fingers.play();
        if(!isnextpage) {senttofuckingtime("3camera.html",15000);}
        // GO TO TAKING PICTURE
  } else if(_db_max >= LOUNDEST_lanmover_DB_100 ) {
        fingers = createVideo('assets/video/100.mp4');
        fingers.play();
        if(!isnextpage) {senttofuckingtime("4sensor.html",19000);}
        // GO TO LISTEN TO SENSOR HERE
  } else if(_db_max >= LOUNDEST_motobike_DB_90 ) {
        fingers = createVideo('assets/video/90.mp4');
        fingers.play();
        if(!isnextpage) {senttofuckingtime("4sensor.html",19000);}
        // GO TO LISTEN TO SENSOR HERE
  } else if(_db_max >= LOUNDEST_blender_DB_80 ) {
        fingers = createVideo('assets/video/80.mp4');
        fingers.play();
        if(!isnextpage) {senttofuckingtime("4sensor.html",19000);}
        // GO TO LISTEN TO SENSOR HERE
  } else if(_db_max >= LOUNDEST_suck_DB_70 ) {
        fingers = createVideo('assets/video/70.mp4');
        fingers.play();
        if(!isnextpage) {senttofuckingtime("4sensor.html",19000);}
        // GO TO LISTEN TO SENSOR HERE
  } else {
        fingers = createVideo('assets/video/60.mp4');
        fingers.play();
        if(!isnextpage) {senttofuckingtime("4sensor.html",19000);}
        // GO TO LISTEN TO SENSOR HERE
  }
}

function senttofuckingtime(string,number){
        isnextpage = !isnextpage;
        window.setTimeout(function(){
            window.location.href = string;
        }, number);
}

function display_timeleft(){
  if (time > 0)  time = Math.trunc(duration - (millis() - begin)/1000);
  fill(fillTimecoundown);
  textSize(200);
  if (time<10){
    text(time, width/2-50, height/2+450);
    textSize(32);
    text("sec", width/2+80, height/2+450);
  }
  else{
    text(time,  width/2-90,height/2+450);
    textSize(32);
    text("sec",  width/2+110,height/2+450);
  }

// IF SOUND LOWER
  if (time <= 10 && time >= 9 && _db_max <= passmaxDB) {
    image(lound, width/2-200,height/2+100);
    if(!issouldplay1) { Slound.play(); issouldplay1=!issouldplay1; }
  }
  if (time <= 5 && time >= 4 && _db_max <= passmaxDB) {
    image(lounder,width/2-200,height/2+100);
    if(!issouldplay2) { Slounder.play(); issouldplay2=!issouldplay2; }
  }


}

function makeEvenRoundUp(number) {
    if( number%2 != 0 ){ number+=1; }
    return number;
}

function smoothval(s_new) {
    for(var i=0; i<=(soundsmooth.length-2);i++) soundsmooth[i] = soundsmooth[i+1];
    
    soundsmooth[soundsmooth.length-1] = s_new;
    var average = 0;
    for ( var i = 0; i < soundsmooth.length; ++i ) average += soundsmooth[i]; 

    average /= soundsmooth.length; 
    return average;
}



