var width = window.innerWidth;
var height = window.innerHeight*0.75;



var stage = new Konva.Stage({ 
    x: 150,
    y: 70,
    container: 'thestage',
    //width: width ,
    //height: height ,
    width: 450 ,
    height: 300 ,
});
var layer = new Konva.Layer();
////



//Aban
var aban = new Konva.Group({
    x: 100,
    y: -30,
    rotation:45,
    // visible: false,
    draggable: true,
    scaleX:0.5,
    scaleY:0.5,
  });
  //vertical shape
  var aban1 = new Konva.Rect({
    x: 50,
    y: 30,
    fill: '',
    width: 50,//21
    height: 120,
    stroke: 'black',
    strokeWidth: 15,
   // draggable: true,
    rotation: 0,
    offset: {
    x: 0,
    y: 0,
    }
  });

  
  //horizontal shape
  var aban2 = new Konva.Rect({
    x: 12,
    y: 67,
    fill: '',
    width: 120,
    height: 50,//21
    stroke: 'black',
    strokeWidth: 15,
    //draggable: true,
  });

  //slate
  const aban7 = aban1.clone();
  aban7.strokeWidth(0);
  aban7.fill('pink');
   aban7.width(40);
   aban7.height(110);
  aban7.x(55.5);
  aban7.y(35);

  
  //vertical top
  var aban3 = new Konva.Rect({
    x: 68,
    y: 14,
    fill: 'black',
    width: 15,
    height: 15,
    stroke: 'black',
    strokeWidth: 5,
   // draggable: true,
    rotation: 0,
    offset: {
    x: 0,
    y: 0,
    }
  });
  //vertical down
  const aban4 = aban3.clone();
  aban4.y(151.5);
  
  //horizontal left
  const aban5 = aban4.clone();
  aban5.x(-3);
  aban5.y(84);
  //horizontal right
  const aban6 = aban5.clone();
  aban5.x(133);

//abusuapa shape
var abusua = new Konva.Group({
    x: -70,
    y: -180,
    rotation:0,
    fill: 'green',
    visible: false,
  });
  
  
  //square
  var abu1 = new Konva.Rect({
    x: 105,
    y: 203,
    width: 100,
    height: 100,
    stroke: 'black',
    strokeWidth: 5,
    rotation: 0,
  });
//lines
  const abu8 = abu1.clone();
  abu8.width(25);
//
const abu9 = abu8.clone();
abu9.x(180);
//
const abu10 = abu1.clone();
abu10.height(25);
//
const abu11 = abu10.clone();
abu11.y(278);

  //line1
  var abu2 = new Konva.Line({
    points: [105,253,205,253],
    stroke: 'black',
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
  });
  //line2
  const abu3 = abu2.clone();
  abu3.points([155,203,155,303]);
  
  //circle top
  var abu4 = new Konva.Circle({
    x: 155,
    y: 203,
    radius: 40,
    stroke: 'black',
    strokeWidth: 5,
  });
  //circle down
  const abu5 = abu4.clone();
  abu5.y(303);
  
  //circle left
  const abu6 = abu5.clone();
  abu6.x(105);
  abu6.y(253);
  
  //circle right
  const abu7 = abu6.clone();
  abu7.x(205);

//adinkrahene shape
var adinkrahene = new Konva.Group({
    x: -370,
    y: -140,
    rotation:0,
    visible: false,
  });
  
  //circle small
  var adi1 = new Konva.Circle({
    x: 455,
    y: 203,
    radius: 20,
    stroke: 'black',
    strokeWidth: 5,
  });
  //next circle big
  const adi2 = adi1.clone();
  adi2.radius(40);
  //next circle big 2
  const adi3 = adi1.clone();
  adi3.radius(60);
  

  //adinkrahene dua shape
  var adinkrahene_dua = new Konva.Group({
    x: -130,
    y: -280,
    rotation:0,
    visible: false,
  });
  //line cross
  var adidua1 = new Konva.Line({
    points: [205,353,225,353],
    stroke: 'black',
    strokeWidth: 5,
    lineCap: 'round',
    lineJoin: 'round',
  });
  //line 2
  const adidua2 = adidua1.clone();
  adidua2.points([215,343,215,363]);
  //wedge left
  var adidua3 = new Konva.Wedge({
    x: 205,
    y:353,
    radius: 15,
    angle: 60,
    stroke: 'black',
    strokeWidth: 5,
    rotation: 150,
  });


    //wedge right
    const adidua4 = adidua3.clone();
    adidua4.x(225);
    adidua4.rotation(330);
    //wedge top
    const adidua5 = adidua3.clone()
    adidua5.x(215);
    adidua5.y(343);
    adidua5.rotation(-120);
    //wedge down
    const adidua6 = adidua5.clone()
    adidua6.y(363);
    adidua6.rotation(60);
    //circle1
    var adidua7 = new Konva.Circle({
      x: 215,
      y: 353,
      radius: 40,
      stroke: 'black',
      strokeWidth: 5,
    });
    //circle2
    const adidua8 = adidua7.clone()
    adidua8.radius(55);

  //agyinduwura
var agyin = new Konva.Group({
    x: -750,
    y: -100,
    rotation:0,
    visible: false,
  });

  //cirle left down
  var agyin1 = new Konva.Circle({
    x: 800,
    y: 203,
    radius: 25,
    stroke: 'black',
    strokeWidth: 15,
  });
  //circle left up
  const agyin2 = agyin1.clone();
  agyin2.y(140);
  //circle right up
  const agyin3 = agyin2.clone();
  agyin3.x(860);
  //circle right down
  const agyin4 = agyin1.clone();
  agyin4.x(860);
  //kite middle
  var agyin5 = new Konva.Rect({
    x: 830,
    y: 170,
    fill: 'blue',
    width: 40,
    height: 40,
    stroke: 'black',
    strokeWidth: 1,
    rotation: 45,
    offset: {
    x: 20,
    y: 20,
    }
  });
  

  
//adwo
var adwo = new Konva.Group({
    x: -580,
    y: -100,
    rotation:0,
    visible: false,
  });
  //oval1
//oval1
var adwo1 = new Konva.Ellipse({
    x: 650,
    y: 150,
    radiusX: 80,
    radiusY: 20,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 5,
  });
  //oval2
  const adwo2 = adwo1.clone()
  adwo2.y(190);
  //kite1
  var adwo3 = new Konva.Rect({
    x: 670,
    y: 163,
    fill: 'white',
    width: 25,
    height: 25,
    stroke: 'black',
    strokeWidth: 5,
   // draggable: true,
    rotation: 45,
    offset: {
    x: 8.5,
    y: 8.5,
    }
  });
  //kite2
  const adwo4 = adwo3.clone()
  adwo4.x(630);
  //oval inside left
  const adwo5 = adwo1.clone()
  adwo5.x(630);
  adwo5.y(169);
  adwo5.radiusX(5);
  adwo5.radiusY(3);
  adwo5.strokeWidth(1);
  //oval inside right
  const adwo6 = adwo5.clone();
  adwo6.x(670);
    
  

  
//akoben
var akoben = new Konva.Group({
    x: -770,
    y: -350,
    rotation:0,
    visible: false,
  });
  //oval down
  var akoben1 = new Konva.Ellipse({
    x: 850,
    y: 440,
    radiusX: 50,
    radiusY: 5,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 20,
  });
  //oval2
  const akoben2 = akoben1.clone();
  akoben2.y(490);
  //oval3
  const akoben3 = akoben1.clone();
  akoben3.y(465);
  //oval last
  
  var akoben4 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(860, 405);
      context.quadraticCurveTo(810, 405, 810, 405);
      context.quadraticCurveTo(780, 415, 810, 425);
      context.lineTo(890, 425);
      context.quadraticCurveTo(940, 400, 830, 330);
      context.quadraticCurveTo(890, 415, 860, 405);
      context.closePath();
  
      // (!) Konva specific method, it is very important
      context.fillStrokeShape(shape);
    },
    fill: 'black',
    stroke: 'black',
    strokeWidth: 5,
  });
  
//akobenn
var akobenn = new Konva.Group({
    x: -965,
    y: -140,
    rotation:0,
    visible: false,

  });
  //rect vertical
  var akobenn1 = new Konva.Rect({
    x: 1030,
    y: 170,
    fill: 'pink',
    width: 15,
    height: 110,
    stroke: 'black',
    strokeWidth: 5,
  });
  //rect down
  const akobenn2 = akobenn1.clone();
  akobenn2.y(265);
  akobenn2.x(995);
  akobenn2.width(85);
  akobenn2.height(15);
  //rect2
  const akobenn3 = akobenn2.clone();
  akobenn3.x(1000);
  akobenn3.width(75);
  akobenn3.y(240);
  //rect3
  const akobenn4 = akobenn3.clone();
  akobenn4.y(215);
  //rect4
  const akobenn5 = akobenn4.clone();
  akobenn5.y(190);
  //oval top
  var akobenn6 = new Konva.Ellipse({
    x: 1037.5,
    y: 145,
    radiusX: 30,
    radiusY: 30,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 5,
  });
  //innerstyle
  const akobenn7 = akobenn6.clone();
  akobenn7.stroke('white');
  akobenn7.radiusY(25);
  akobenn7.radiusX(25);
  akobenn7.y(135);
  akobenn7.fill('white');
  
//akofena
var akofena = new Konva.Group({
    x: -940,
    y: -355,
    visible: false,
  });
  //circle left
  var akofena1 = new Konva.Circle({
    x: 1015,
    y: 500,
    radius: 8,
    stroke: 'black',
    strokeWidth: 3,
  });
  
  //rect left 
  var akofena2 = new Konva.Rect({
    x: 1012.5,
    y: 482,
    fill: 'pink',
    width: 5,
    height: 10,
    stroke: 'black',
    strokeWidth: 1,
  });
  //circle2
  const akofena3 = akofena1.clone();
  akofena3.y(473);
  //circle3
  //line1
  var akofena4 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(1012, 465);
      context.quadraticCurveTo(950, 370, 1020, 350);
      context.quadraticCurveTo(1000, 390, 1018, 465);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: 'black',
    stroke: 'black',
    strokeWidth: 4,
  });
  //circle in rod
  const akofena5 = akofena1.clone();
  akofena5 .y(385);
  akofena5.x(1000);
  akofena5.fill('red');
  akofena5.radius(5);
   //circle in rod 2
  const akofena6 = akofena5.clone();
  akofena6.y(400); 
  
//anibere
  var anibere = new Konva.Group({
    x: 0,
    y: 0,
    visible: false,
  });
  var anibere1 = new Konva.Rect({
    x: 85,
    y: -10,
    fill: 'pink',
    width: 50,
    height: 50,
    stroke: 'black',
    strokeWidth: 5,
    rotation: 45,
  });

  const anibere2 = anibere1.clone();
  anibere2.y(70);

const anibere3 = anibere2.clone();
anibere3.x(130);
anibere3.y(30);

const anibere4 = anibere3.clone();
anibere4.x(40);

const anibere5 = anibere4.clone();
anibere5.y(-50);

const anibere6 = anibere4.clone();
anibere6.y(110);

const anibere7 = anibere3.clone();
anibere7.y(-50);

const anibere8 = anibere3.clone();
anibere8.y(110);

const anibere9 = anibere1.clone();
anibere9.x(-5);

const anibere10 = anibere1.clone();
anibere10.x(175);

const anibere11 = anibere2.clone();
anibere11.x(-5);

const anibere12 = anibere2.clone();
anibere12.x(175);

var anibere13 = new Konva.Rect({
    x: -55,
    y: -65,
    fill: 'white',
    width: 280,
    height: 50,
    stroke: 'white',
    strokeWidth: 1,
  });

const anibere14 = anibere13.clone();
anibere14.y(145);

var anibere15 = new Konva.Rect({
    x: -55,
    y: -50,
    fill: 'white',
    width: 50,
    height: 200,
    stroke: 'white',
    strokeWidth: 1,
  });
const anibere16 = anibere15.clone();
anibere16.x(175);

//asaase ye duru
const asaase = anibere.clone();

var asaase1 = new Konva.Ellipse({
    x: 50,
    y: 70,
    radiusX: 10,
    radiusY: 8,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 5,
  });

const asaase2 = asaase1.clone();
asaase2.fill('white');
asaase2.stroke('white');
asaase2.y(71);
asaase2.radiusY(6);
asaase2.x(47);



var asaase3 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(49, 78);
      context.quadraticCurveTo(-15, 85, 65, 10);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 5,
  });

//flip to side
const asaaseG1 = asaase1.clone();
const asaaseG2 = asaase2.clone();
const asaaseG3 = asaase3.clone();

//flip to down
const asaaseP1 = asaaseG1.clone();
const asaaseP2 = asaaseG2.clone();
const asaaseP3 = asaaseG3.clone();
const asaaseR1 = asaase1.clone();
const asaaseR2 = asaase2.clone();
const asaaseR3 = asaase3.clone();


  const asaaseG1_2_3 = asaase.clone();
  asaaseG1_2_3.x(130);
  asaaseG1_2_3.scaleX(-asaase.scaleX());

const asaaseP1_2_3 = asaaseG1_2_3.clone();
asaaseP1_2_3.scaleY(-asaaseG1_2_3.scaleY());
asaaseP1_2_3.y(158);

const asaaseR1_2_3 = asaase.clone();
asaaseR1_2_3.scaleY(-asaaseR1_2_3.scaleY());
asaaseR1_2_3.y(158);

//Aya
const aya = asaase.clone();
aya.x(30);
aya.y(-30);
//aya.visible(true);

//stick
var aya1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 150);
      context.quadraticCurveTo(50, 55, 50, 55);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 8,
  });
//round left down
  var aya2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 150);
      context.quadraticCurveTo(0, 100, -30, 150);
      context.quadraticCurveTo(0, 200, 50, 150);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 8,
  });
  var aya3 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 150);
      context.quadraticCurveTo(90, 100, 130, 150);
      context.quadraticCurveTo(90, 200, 50, 150);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 8,
  });  

  var aya4 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 120);
      context.quadraticCurveTo(105, 60, 120, 110);
      context.quadraticCurveTo(102, 90, 50, 120);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 6,
  }); 


  var aya5 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 90);
      context.quadraticCurveTo(103, 40, 110, 80);
      context.quadraticCurveTo(101, 55, 50, 90);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 4,
  }); 
  var aya6 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 60);
      context.quadraticCurveTo(80,25, 90, 50);
      context.quadraticCurveTo(93, 28, 50, 60);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 3,
  }); 

  //left
  var aya7 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 60);
      context.quadraticCurveTo(20,25, 10, 50);
      context.quadraticCurveTo(3, 28, 50, 60);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 3,
  }); 

  var aya8 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 90);
      context.quadraticCurveTo(-3, 40, -10, 80);
      context.quadraticCurveTo(-1, 55, 50, 90);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 4,
  }); 

  var aya9 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 120);
      context.quadraticCurveTo(-5, 60, -20, 110);
      context.quadraticCurveTo(-2, 90, 50, 120);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 6,
  }); 

//bese saka
const bese = asaase.clone();

var bese1 = new Konva.Rect({
    x: 90,
    y: 20,
    fill: 'white',
    width: 80,
    height: 80,
    stroke: 'black',
    strokeWidth: 18,
    rotation: 45,
  });

  var bese2 = new Konva.Ellipse({
    x: 45,
    y: 30,
    radiusX: 50,
    radiusY: 30,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 5,
    rotation: 45,
  });

  const bese3 = bese2.clone();
  bese3.rotation(-45);
  bese3.y(120);

const bese4 = bese3.clone();
bese4.rotation(45);
bese4.x(135);

const bese5 = bese2.clone();
bese5.rotation(-45);
bese5.x(135);

const bese6 = bese2.clone();
bese6.radiusX(17);
bese6.radiusY(17);
bese6.x(90);
bese6.y(75);
bese6.fill('red');

var bese7 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 100);
      //context.quadraticCurveTo(-5, 60, -40, 130);
      context.quadraticCurveTo(50, 120, 30, 135);
      //context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    //fill: 'black',
    stroke: 'black',
    strokeWidth: 6,
  }); 

const bese8 = bese7.clone();
bese8.rotation(135);
bese8.x(160);
bese8.y(80);

const bese9 = bese8.clone();
bese9.rotation(105);
bese9.x(260);
bese9.y(110);

const bese10 = bese9.clone();
bese10.rotation(10);
bese10.x(115);
bese10.y(-95);

//biribi wo soro
const biribi = asaase.clone();

var biribi1 = new Konva.Rect({
  x: 79,
  y: 40,
  //fill: 'black',
  width: 50,
  height: 50,
  stroke: 'black',
  strokeWidth: 15,
  rotation:45,
});
var biribi2 = new Konva.Ellipse({
  x: 35,
  y: 70,
  radiusX: 40,
  radiusY: 80,
  //fill: 'white',
  stroke: 'black',
  strokeWidth: 25,
});

const biribi3 = biribi2.clone();
biribi3.x(123);

//boa me na me mmoa wo
const boa = asaase.clone();

var boa1 = new Konva.Ellipse({
  x: 80,
  y: 80,
  radiusX: 60,
  radiusY: 80,
  //fill: 'white',
  stroke: 'black',
  strokeWidth: 15,
});

var boa2 = new Konva.Wedge({
  x: 80,
  y: 80,
  radius: 90,
  angle: 60,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 5,
  rotation: -120,
});

const boa3 = boa2.clone();
boa3.rotation(60);

var boa4 = new Konva.Circle({
  x: 80,
  y: -20,
  radius: 10,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});

var boa5 = new Konva.Rect({
  x: 70,
  y: 170,
  //fill: 'black',
  width: 20,
  height: 20,
  stroke: 'black',
  strokeWidth: 5,
});

const boa6 = boa4.clone();
boa6.radius(12);
boa6.y(140);

const boa7 = boa5.clone();
boa7.y(5);

//Dame dame
const dame = asaase.clone();

var dame1 = new Konva.Circle({
  x: 80,
  y: 90,
  radius: 105,
  //fill: 'red',
  stroke: 'black',
  strokeWidth: 7,
});

var dame2 = new Konva.Rect({
  x: 25,
  y: 35,
  //fill: 'black',
  width: 110,
  height: 110,
  stroke: 'black',
  strokeWidth: 7,
});

const dame3 = dame2.clone();
dame3.width(30);
dame3.height(30);
dame3.x(65);
dame3.y(5);

const dame4 = dame3.clone();
dame4.y(146);

const dame5 = dame4.clone();
dame5.y(73);
dame5.x(-5);

const dame6 = dame5.clone();
dame6.x(135);

const dame7 =dame6.clone();
dame7.width(16);
dame7.height(10);
dame7.y(83);
dame7.x(-22);

const dame8 = dame7.clone();
dame8.x(165);

const dame9 = dame4.clone();
dame9.width(10);
dame9.height(16);
dame9.x(75);
dame9.y(-12);

const dame10 = dame9.clone();
dame10.y(177);

//dono
const dono = asaase.clone();

var dono1 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(10, -20);
    context.quadraticCurveTo(20, 20, 40, 60);
    context.quadraticCurveTo(40, 60, 80, 60);
    context.quadraticCurveTo(100, 20, 110, -20);
    context.quadraticCurveTo(60, -40, 10, -20);

    //context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'black',
  strokeWidth: 6,
}); 
//
const dono2 = dono1.clone();
dono2.rotation(180);
dono2.y(120);
dono2.x(120);

//akoko nan
var akoko = new Konva.Group({
  x: -1190,
  y: 0,
  visible: false,
});
//horizontal line
var akoko1 = new Konva.Rect({
  x: 1200,
  y: 80,
  fill: 'pink',
  width: 120,
  height: 10,
  stroke: 'black',
  strokeWidth: 4,
});
//wing up
var akoko2 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(1318, 78);
    context.quadraticCurveTo(1350, 45, 1288, 10);
    context.quadraticCurveTo(1325, 45, 1278, 78);
    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'pink',
  stroke: 'black',
  strokeWidth: 4,
});
//wing down
var akoko3 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(1318, 92);
    context.quadraticCurveTo(1350, 125, 1288, 160);
    context.quadraticCurveTo(1325, 125, 1278, 92);
    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'pink',
  stroke: 'black',
  strokeWidth: 4,
});
//small wing down
var akoko4 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(1255, 92);
    context.quadraticCurveTo(1230, 115, 1275, 140);
    context.quadraticCurveTo(1220, 115, 1218, 92);
    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: '',
  stroke: 'black',
  strokeWidth: 4,
});
//small wing up
var akoko5 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(1255, 78);
    context.quadraticCurveTo(1230, 57, 1275, 32);
    context.quadraticCurveTo(1220, 57, 1218, 78);
    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: '',
  stroke: 'black',
  strokeWidth: 4,
});

//funtun
const funtun = asaase.clone();

//
var funtun1 = new Konva.Rect({
  x: 70,
  y: 50,
  //fill: 'black',
  width: 50,
  height: 50,
  stroke: 'black',
  strokeWidth: 5,
  rotation: 45,
});
//
var funtun2 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(70, 80);
    context.quadraticCurveTo(150, 95, 170, 85);
    context.quadraticCurveTo(150, 105, 70, 90);
    context.quadraticCurveTo(-30, 100, -30, 85);
    context.quadraticCurveTo(-30, 65, 70, 80);

    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: '',
  stroke: 'black',
  strokeWidth: 4,
});
//
const funtun3 = funtun2.clone();
funtun3.rotation(90);
funtun3.x(160);
funtun3.y(10);
//
var funtun4 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(70, 50);
    context.quadraticCurveTo(100, 60, 110, 40);
    context.quadraticCurveTo(100, 60, 70, 50);
    context.quadraticCurveTo(40, 60, 30, 40);

   // context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: '',
  stroke: 'black',
  strokeWidth: 5,
});
funtun4.y(-8);
//
const funtun5 = funtun4.clone();
funtun5.rotation(90);
funtun5.x(160);
funtun5.y(15);

//
const funtun6 = funtun4.clone();
funtun6.scaleY(-funtun6.scaleY());
funtun6.y(175);
//
const funtun7 = funtun5.clone();
funtun7.scaleY(-funtun7.scaleY());
funtun7.x(-20);

//duafe
const duafe = asaase.clone();
// duafe.visible(true);

//
var duafe1 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(10, 100);
    context.quadraticCurveTo(02, 60, 02, 60);
    context.quadraticCurveTo(80, 80, 150, 60);
    context.quadraticCurveTo(142, 100, 142, 100);
    // context.quadraticCurveTo(60, -40, 10, -20);

    // context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'black',
  strokeWidth: 8,
}); 

var duafe2 = new Konva.Wedge({
  x: 25,
  y: 140,
  radius: 20,
  angle: 30,
  height: 100,
  // fill: 'red',
  stroke: 'black',
  strokeWidth: 8,
  rotation: -105,
});

const duafe3 = duafe2.clone();
duafe3.x(50);

const duafe4 = duafe3.clone();
duafe4.x(75);

const duafe5 = duafe4.clone();
duafe5.x(100);

const duafe6 = duafe5.clone();
duafe6.x(126);

var duafe7 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(55, 80);
    context.quadraticCurveTo(70, 50, 55, 40);
    context.quadraticCurveTo(100, 40, 100, 40);
    context.quadraticCurveTo(85, 50, 96, 80);
    // context.quadraticCurveTo(60, -40, 10, -20);

    // context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'black',
  strokeWidth: 8,
}); 

var duafe8 = new Konva.Ellipse({
  x: 78,
  y: 20,
  radiusX: 50,
  radiusY: 25,
  // fill: 'yellow',
  stroke: 'black',
  strokeWidth: 8,
});

const duafe9 = duafe8.clone();
duafe9.fill('black');
duafe9.y(5);
duafe9.radiusX(10);
duafe9.radiusY(10);

//gyawu atico
 const gyawu = asaase.clone();
//  gyawu.visible(true);
gyawu.x(30);
//
var gyawu1 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(-85, 120);
    context.quadraticCurveTo(-37.5, 200, 50, 120);
    context.quadraticCurveTo(50, 10, 50, 10);
    context.quadraticCurveTo(20, 30, -85, 10);
    context.lineTo(-85, 30);
    context.quadraticCurveTo(0, 25, 20, 35);
    context.quadraticCurveTo(40, 65, 20, 120);
    context.quadraticCurveTo(-20.5, 190, -85, 120);



    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'black',
  strokeWidth: 1,
  stroke: 'white',
}); 

const gyawu2 = gyawu1.clone();
gyawu2.scaleX(-gyawu2.scaleX());
gyawu2.scaleY(-gyawu2.scaleY());
gyawu2.x(100);
gyawu2.y(130);



function abanImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Aban</b><br><p>Aban is the Akan word for “fortress” or “castle.” It is a symbol of strength, seat of power, authority, and magnificence.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
    dame.hide();
    boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    aban.show();
};

function abusuapaImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Abusuapa</b><br><p>Abusua pa means good family in Akan and the symbol represents the strong bond shared by family members.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
    dame.hide();
    boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide()
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    abusua.show();
};

function adinkraheneImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Adinkrahene</b><br><p>Chief of the adinkra symbols. Symbol of greatness, charisma and leadership. This symbol is said to have played an inspiring role in the designing of other symbols. It signifies the importance of playing a leadership role.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
    dame.hide();
    boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    adinkrahene.show();
};

function adinkrahene_duaImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Adinkrahene Dua</b><br><p>Adinkrahene Dua is the Adinkra symbol of greatness and royalty.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
    dame.hide();
    boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    adinkrahene_dua.show();
};
function adwoImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Adwo</b><br><p>The meaning of the symbol is calmness. It is a symbol of “peace, tranquility and quiet.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
    dame.hide();
    boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    adwo.show();
};
function agyinduwuraImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Agyinduwura</b><br><p>A symbol of faithfulness, alertness, and dutifulness. Designed to commemorate the faithfulness of one Agyin who was a dutiful servant and gong-beater to the Asantehene.</p>";
  gyawu.hide();
  duafe.hide();

  funtun.hide();
  akoko.hide();
  dono.hide();
    dame.hide();
    boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    agyin.show();
};

function akobenImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Akoben</b><br><p>The word 'Akoben' literally describes a horn that was blown by Ashantis to summon warriors, alert people, and prepare for battle. Symbolizes: vigilance, wariness.</p>";
  gyawu.hide();
  duafe.hide();

  funtun.hide();
  akoko.hide();
  dame.hide()
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    akoben.show();
};

function akobennImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Akoben</b><br><p>The word 'Akoben' literally describes a horn that was blown by Ashantis to summon warriors, alert people, and prepare for battle. Symbolizes: vigilance, wariness.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    akobenn.show();
};

function akofenaImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b>Akofena</b><br><p>Akofena means “sword of war.” It also represents the state ceremonial swords.</p>";
  gyawu.hide();
  duafe.hide();

  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    akofena.show();
};

function anibereImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Ani Bere</b><br><p>Ani Bere A Enso Gya is an Akan proverb which means “No matter how red-eyed one becomes (i.e. how serious one becomes), his eyes do not spark flames.”</p>";
  gyawu.hide();
  duafe.hide();

  funtun.hide();
  dono.hide();
  akoko.hide();
  dame.hide();
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    anibere.show();
};

function asaaseImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Asaase Ye Duru</b><br><p>Asase Ye Duru means “the earth has weight.” It is a symbol of providence and the divinity of Mother Earth.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    asaase.show();
    asaaseG1_2_3.show();
    asaaseP1_2_3.show();
    asaaseR1_2_3.show();
};

function ayaImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Aya</b><br><p>This symbol represents a fern and is a symbol of “endurance, independence, defiance against difficulties, hardiness, perseverance, and resourcefulness.”</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    aya.show();
};

function beseImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Bese Saka</b><br><p>Bese Saka, meaning sack of cola nuts, is a symbol of affluence, power, abundance, trade, togetherness and unity.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
    bese.show();
};

function biribiImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Biribi Wo Soro</b><br><p>Nyame Biribi Wo Soro is a Ghanaian adinkra symbol that stems from the Akan, a tribe predominantly located in the southern regions of the country, that translates directly to 'God is in the heavens'.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  biribi.show();
};

function boaImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Boa Me Na Me Mmoa Wo</b><br><p>It is an adinkra symbol that directly translates to “Help me and let me help you.”</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  boa.show();
};

function dameImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Dame Dame</b><br><p>This symbol means 'checkered' and represents 'intelligence, strategy and ingenuity.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  dame.show();
};

function donoImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Dono</b><br><p>Dono is a type of tension talking drum with strings connecting both ends which are covered with animal skins. It is usually held under the armpit and produces a different sound based on how tightly it is gripped under the arm. It is a symbol of appelation, praise, goodwill and rhythm.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  dono.show();
};

function akokoImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Akoko Nan</b><br><p>The Akoko Nan is a representation of the leg of a chicken, also known as a hen. The expression “The leg of a hen steps on the child chick but it does not kill the chick” is where the name of the symbol comes from; it is an African proverb.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  akoko.show();
};

function funtunImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Funtunfunefu Denkyemfunefu</b><br><p>Funtunfunefu Denkyemfunefu is a Ghanaian symbol. The literal translation of Funtunfunefu Denkyemfunefu is Siamese crocodiles. The symbol shows two conjoined crocodiles, which symbolizes democracy and cooperation.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  funtun.show();
};

function duafeImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Duafe</b><br><p>Duafe directly translates to “wooden comb”. It states the design is, “...a symbol of feminine consideration or good feminine qualities such as patience, prudence, fondness, love, and care.”</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  duafe.show();
};
function gyawuImage(image){
  document.getElementById("meanings").innerHTML = "<br><b>Gyawu Atiko</b><br><p>“Gyawu” is the name of a warrior and “Atiko” is the back of its head. It is used to describe a warrior's hairdo. Symbolizes: Bravery, valour, courage, fearlessness. Origin: This symbol describes a war hero who was chief of Bantama, a suburb of Kumasi</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
  biribi.hide();
  bese.hide();
  aya.hide();
  asaase.hide();
  asaaseG1_2_3.hide();
  asaaseP1_2_3.hide();
  asaaseR1_2_3.hide();
  anibere.hide();
  akofena.hide();
  akobenn.hide();
  akoben.hide();
  agyin.hide();
  adwo.hide();
  adinkrahene_dua.hide();
  adinkrahene.hide();
  abusua.hide();
  aban.hide();
  gyawu.show();
};


//donwload funnction
function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

function downloadImage(image) {
    var dataURL = stage.toDataURL({ pixelRatio: 7 });
    downloadURI(dataURL, 'stage.png');
};

//clear stage
function clearImage(image) {
  document.getElementById("meanings").innerHTML = "<br><b></b><br><p>Click on shape below.</p>";
  gyawu.hide();
  duafe.hide();
  funtun.hide();
  akoko.hide();
  dono.hide();
  dame.hide();
  boa.hide();
    biribi.hide();
    bese.hide();
    aya.hide();
    asaase.hide();
    asaaseG1_2_3.hide();
    asaaseP1_2_3.hide();
    asaaseR1_2_3.hide();
    anibere.hide();
    akofena.hide();
    akobenn.hide();
    akoben.hide();
    agyin.hide();
    adwo.hide();
    adinkrahene_dua.hide();
    adinkrahene.hide();
    abusua.hide();
    aban.hide();
};
  



//const list = ['	palegreen','gold','blue','red','orange','indianred','ivory','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan', 'lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lime','limegreen','maroon','mediumaquamarine','mediumorchid','mediumpurple'];
const list = ["black", "white", "gray", "silver", "red","blue", "green", "yellow", "orange", "purple", "brown", "pink", "turquoise", "gold", "darkgreen", "darkblue", "lightgray", "navy", "maroon", "teal", "olive", "fuchsia", "lime", "aqua", "salmon", "skyblue", "slategray", "lavender", "deeppink", "sienna",'palegreen','gold','blue','red','orange','indianred','ivory','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan', 'lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lime','limegreen','maroon','mediumaquamarine','mediumorchid','mediumpurple'];

function* tabGen(tab) {
  let i = 0
    , max = tab.length
    ;
  while (true) {
    yield tab[i++]
    i %= max
  }
}

const onTab = tabGen(list);
function changeColor(image) {
    aban1.fill(onTab.next().value);
    aban2.fill(onTab.next().value);
    aban7.fill(onTab.next().value);
    abu1.fill(onTab.next().value);
    abu2.fill(onTab.next().value);
    abu3.fill(onTab.next().value);
    abu4.fill(onTab.next().value);
    abu5.fill(onTab.next().value);
    abu6.fill(onTab.next().value);
    abu7.fill(onTab.next().value);
    adi1.fill(onTab.next().value);
    adi2.fill(onTab.next().value);
    adi3.fill(onTab.next().value);
    adidua1.fill(onTab.next().value);
    adidua2.fill(onTab.next().value);
    adidua3.fill(onTab.next().value);
    adidua4.fill(onTab.next().value);
    adidua5.fill(onTab.next().value);
    adidua6.fill(onTab.next().value);
    adidua7.fill(onTab.next().value);
    adidua8.fill(onTab.next().value);
    adwo1.fill(onTab.next().value);
    adwo2.fill(onTab.next().value);
    adwo3.fill(onTab.next().value);
    adwo4.fill(onTab.next().value);
    adwo5.fill(onTab.next().value);
    adwo6.fill(onTab.next().value);
    agyin1.fill(onTab.next().value);
    agyin2.fill(onTab.next().value);
    agyin3.fill(onTab.next().value);
    agyin4.fill(onTab.next().value);
    agyin5.fill(onTab.next().value);
    akoben1.stroke(onTab.next().value);
    akoben2.stroke(onTab.next().value);
    akoben3.stroke(onTab.next().value);
    akobenn1.fill(onTab.next().value);
    akobenn2.fill(onTab.next().value);
    akobenn3.fill(onTab.next().value);
    akobenn4.fill(onTab.next().value);
    akobenn5.fill(onTab.next().value);
    akobenn6.fill(onTab.next().value);
    akofena1.fill(onTab.next().value);
    akofena2.fill(onTab.next().value);
    akofena3.fill(onTab.next().value);
    akofena4.fill(onTab.next().value);
    akofena5.fill(onTab.next().value);
    akofena6.fill(onTab.next().value);
    anibere1.fill(onTab.next().value);
    anibere2.fill(onTab.next().value);
    anibere3.fill(onTab.next().value);
    anibere4.fill(onTab.next().value);
    anibere5.fill(onTab.next().value);
    anibere6.fill(onTab.next().value);
    anibere7.fill(onTab.next().value);
    anibere8.fill(onTab.next().value);
    anibere9.fill(onTab.next().value);
    anibere10.fill(onTab.next().value);
    anibere11.fill(onTab.next().value);
    anibere12.fill(onTab.next().value);
    asaase1.stroke(onTab.next().value);
    asaase3.stroke(onTab.next().value);
    asaaseG1.stroke(onTab.next().value);
    asaaseG3.stroke(onTab.next().value);
    asaaseP1.stroke(onTab.next().value);
    asaaseP3.stroke(onTab.next().value);
    asaaseR1.stroke(onTab.next().value);
    asaaseR3.stroke(onTab.next().value);
    aya1.fill(onTab.next().value);
    aya2.fill(onTab.next().value);
    aya3.fill(onTab.next().value);
    aya4.fill(onTab.next().value);
    aya5.fill(onTab.next().value);
    aya6.fill(onTab.next().value);
    aya7.fill(onTab.next().value);
    aya8.fill(onTab.next().value);
    aya9.fill(onTab.next().value);
    bese1.fill(onTab.next().value);
    bese2.fill(onTab.next().value);
    bese3.fill(onTab.next().value);
    bese4.fill(onTab.next().value);
    bese5.fill(onTab.next().value);
    bese6.fill(onTab.next().value);
    biribi1.fill(onTab.next().value);
    biribi2.fill(onTab.next().value);
    biribi3.fill(onTab.next().value);
    boa1.fill(onTab.next().value);
    boa2.fill(onTab.next().value);
    boa3.fill(onTab.next().value);
    boa4.fill(onTab.next().value);
    boa5.fill(onTab.next().value);
    boa6.fill(onTab.next().value);
    boa7.fill(onTab.next().value);
    dame1.fill(onTab.next().value);
    dame2.fill(onTab.next().value);
    dame3.fill(onTab.next().value);
    dame4.fill(onTab.next().value);
    dame5.fill(onTab.next().value);
    dame6.fill(onTab.next().value);
    dame7.fill(onTab.next().value);
    dame8.fill(onTab.next().value);
    dame9.fill(onTab.next().value);
    dame10.fill(onTab.next().value);
    dono1.fill(onTab.next().value);
    dono2.fill(onTab.next().value);
    akoko1.fill(onTab.next().value);
    akoko2.fill(onTab.next().value);
    akoko3.fill(onTab.next().value);
    akoko4.fill(onTab.next().value);
    akoko4.fill(onTab.next().value);
    akoko5.fill(onTab.next().value);
    funtun2.fill(onTab.next().value);
    funtun3.fill(onTab.next().value);
    funtun4.stroke(onTab.next().value);
    funtun5.stroke(onTab.next().value);
    funtun6.stroke(onTab.next().value);
    funtun7.stroke(onTab.next().value);
    funtun1.fill(onTab.next().value);
    duafe2.fill(onTab.next().value);
    duafe3.fill(onTab.next().value);
    duafe4.fill(onTab.next().value);
    duafe5.fill(onTab.next().value);
    duafe6.fill(onTab.next().value);
    gyawu1.fill(onTab.next().value);
    gyawu2.fill(onTab.next().value);
};
gyawu.add(gyawu1).add(gyawu2);
layer.add(gyawu);

duafe.add(duafe1).add(duafe2).add(duafe3).add(duafe4).add(duafe5).add(duafe6).add(duafe7).add(duafe8).add(duafe9);
layer.add(duafe);

funtun.add(funtun1).add(funtun4).add(funtun5).add(funtun6).add(funtun7).add(funtun2).add(funtun3);
layer.add(funtun);

akoko.add(akoko1).add(akoko2).add(akoko3).add(akoko4).add(akoko5);
layer.add(akoko);

dono.add(dono1).add(dono2);
layer.add(dono);

dame.add(dame1).add(dame2).add(dame3).add(dame4).add(dame5).add(dame6).add(dame7).add(dame8).add(dame9).add(dame10);
layer.add(dame);

boa.add(boa1).add(boa2).add(boa3).add(boa4).add(boa5).add(boa6).add(boa7);
layer.add(boa);

biribi.add(biribi2).add(biribi3).add(biribi1);
layer.add(biribi);

bese.add(bese2).add(bese3).add(bese4).add(bese5).add(bese7).add(bese8).add(bese9).add(bese10).add(bese1).add(bese6);
layer.add(bese);

aya.add(aya1).add(aya2).add(aya3).add(aya4).add(aya5).add(aya6).add(aya7).add(aya8).add(aya9);
layer.add(aya);

asaase.add(asaase1).add(asaase2).add(asaase3);
layer.add(asaase);

asaaseG1_2_3.add(asaaseG1).add(asaaseG2).add(asaaseG3);
layer.add(asaaseG1_2_3);

asaaseP1_2_3.add(asaaseP1).add(asaaseP2).add(asaaseP3);
layer.add(asaaseP1_2_3);

asaaseR1_2_3.add(asaaseR1).add(asaaseR2).add(asaaseR3);
layer.add(asaaseR1_2_3);

anibere.add(anibere1).add(anibere2).add(anibere3).add(anibere4).add(anibere5).add(anibere6).add(anibere7).add(anibere8).add(anibere9).add(anibere10).add(anibere11).add(anibere12).add(anibere13).add(anibere14).add(anibere15).add(anibere16);
layer.add(anibere);

akofena.add(akofena1).add(akofena2).add(akofena3).add(akofena4).add(akofena5).add(akofena6);
layer.add(akofena);

akobenn.add(akobenn1).add(akobenn2).add(akobenn3).add(akobenn4).add(akobenn5).add(akobenn6).add(akobenn7);
layer.add(akobenn);

akoben.add(akoben1).add(akoben2).add(akoben3).add(akoben4);
layer.add(akoben);

agyin.add(agyin1).add(agyin2).add(agyin3).add(agyin4).add(agyin5);
layer.add(agyin);

adwo.add(adwo1).add(adwo2).add(adwo3).add(adwo4).add(adwo5).add(adwo6);
layer.add(adwo);

adinkrahene_dua.add(adidua8).add(adidua7).add(adidua1).add(adidua2).add(adidua3).add(adidua4).add(adidua5).add(adidua6);
layer.add(adinkrahene_dua);

adinkrahene.add(adi3).add(adi2).add(adi1);
layer.add(adinkrahene);

abusua.add(abu4).add(abu5).add(abu6).add(abu7).add(abu1).add(abu2).add(abu3).add(abu8).add(abu9).add(abu10).add(abu11);
layer.add(abusua);

aban.add(aban1).add(aban2).add(aban3).add(aban4).add(aban5).add(aban6).add(aban7);
layer.add(aban);
//layer.add(mystage);
stage.add(layer);
