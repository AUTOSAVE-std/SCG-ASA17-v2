/*
  SCG-ASA-17
  Interactive Installation at SCG ASA EXPO for Trend APP booth, Muang thong thani,
  Bangkok, Thailand

  Client : SCG -  Siam Cement Public Co.,Ltd. 
  Direction : Nuttapong Tonhirunmas
  Graphic : Pongpat Srisumran
  System : Chawanan Inkumnoi
  under AUTOSAVE Co.,Ltd. 
  

  Extra Hardware : WEBCAM with MIC attached (Logitech-C615) 
  TV monitor - Display and sound
  Arduino with DMX shield - controlling light
  Node.js
  XAMPP
  printer(not required)
  

  Modified 25 MARCH 2017 - 04 April 2017
  For SCG ASA EXPO - TREND Interactive INSALLATION
  by Chawanan Inkumnoi 
  
   ¦¦¦¦¦+ ¦¦+   ¦¦+¦¦¦¦¦¦¦¦+ ¦¦¦¦¦¦+ ¦¦¦¦¦¦¦+ ¦¦¦¦¦+ ¦¦+   ¦¦+¦¦¦¦¦¦¦+
  ¦¦+--¦¦+¦¦¦   ¦¦¦+--¦¦+--+¦¦+---¦¦+¦¦+----+¦¦+--¦¦+¦¦¦   ¦¦¦¦¦+----+
  ¦¦¦¦¦¦¦¦¦¦¦   ¦¦¦   ¦¦¦   ¦¦¦   ¦¦¦¦¦¦¦¦¦¦+¦¦¦¦¦¦¦¦¦¦¦   ¦¦¦¦¦¦¦¦+  
  ¦¦+--¦¦¦¦¦¦   ¦¦¦   ¦¦¦   ¦¦¦   ¦¦¦+----¦¦¦¦¦+--¦¦¦+¦¦+ ¦¦++¦¦+--+  
  ¦¦¦  ¦¦¦+¦¦¦¦¦¦++   ¦¦¦   +¦¦¦¦¦¦++¦¦¦¦¦¦¦¦¦¦¦  ¦¦¦ +¦¦¦¦++ ¦¦¦¦¦¦¦+
  +-+  +-+ +-----+    +-+    +-----+ +------++-+  +-+  +---+  +------+
  studio.

*/

// You are running theme:
//AUTHENTIC = AUT   - [CHECKED]
//BioSMART = Bio    - [ ]
//ECOFICIENT = ECO  - [ ]
//INFLUENCE = INF   - [ ]

Before running
1. Please install chrome extention inorder to block download bar appearing;
2. Please run Node.js using command "node startserver.js" on folder p5serial
3. Please run XAMPP server on folder SCG-ASA17-v2
4. In case of mic slow issue, please uninstall and diable any unuse device
5. Set the Download folder of your broswer to the desired destination.
6. Set Task schedule on windows task manager import from SCG-ASA17-v2\assets\taskRUN - XML file, the auto.bat is for node and autochrome.bat is for running Chrome. 

Thing to adjust
1. Sound sec, each video have different time during before going to next page.
2. Light, sound db limit blah blah, you know where to change