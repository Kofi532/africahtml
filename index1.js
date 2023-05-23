

var width = window.innerWidth;
var height = window.innerHeight;

// var width = 1000;
// var height = 1000;

var stage = new Konva.Stage({
  x: 30,
  y: 10,
  container: 'container',
  width: width,
  height: height/3.5,
});

var layer = new Konva.Layer();


//Aban
var aban = new Konva.Group({
    x: width*0.03,
    y:0,
    rotation:45,
    // visible: false,
    scaleX:0.5,
    scaleY:0.5,
    opacity: 1,
  });

  //vertical shape
  var aban1 = new Konva.Rect({
    x: 50,
    y: 30,
    fill: 'green',
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
    fill: 'red',
    width: 120,
    height: 50,//21
    stroke: 'black',
    strokeWidth: 15,
    //draggable: true,
  });

  //slate
  const aban7 = aban1.clone();
  aban7.strokeWidth(0);
  aban7.fill('green');
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
  x: width*0.06,
  y:-70,
  rotation:0,
  fill: 'green',
  visible: true,
  scaleX:0.5,
  scaleY:0.5,
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
  x: 60,
  y: -50,
  rotation:0,
  visible: true,
  scaleX:0.5,
  scaleY:0.5,
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
    x: 290,
    y: -125,
    rotation:0,
    visible: true,
    scaleX:0.5,
    scaleY:0.5,
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

//adwo
var adwo = new Konva.Group({
  x: 200,
  y: -30,
  rotation:0,
  visible: true,
  scaleX:0.5,
  scaleY:0.5,
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
  x: 250,
  y: -160,
  rotation:0,
  visible: true,
  scaleX:0.5,
  scaleY:0.5,
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

  //agyinduwura
  var agyin = new Konva.Group({
    x: 400,
    y: -30,
    rotation:0,
    visible: true,
    scaleX:0.5,
    scaleY:0.5,
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

//akobenn
var akobenn = new Konva.Group({
  x: 420,
  y: -50,
  rotation:0,
  visible: true,
  scaleX:0.5,
  scaleY:0.5,

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
  x: 550,
  y: -160,
  visible: true,
  scaleX:0.5,
  scaleY:0.5,
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


//asaase ye duru

const asaase = new Konva.Group({
  x: 0,
  y: 0,
  visible: true,

});

const asaase_g = asaase.clone();
asaase_g.draggable(true);
asaase_g.x(1130);
asaase_g.y(20);
asaase_g.scaleX(0.5);
asaase_g.scaleY(0.5);



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
aya.x(1260);
aya.y(5);
aya.scaleX(0.5);
aya.scaleY(0.5);
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



var colors = ["gold","black", "white", "gray", "silver", "red","blue", "green", "yellow", "orange", "purple", "brown", "pink", "turquoise", "gold", "darkgreen", "darkblue", "lightgray", "navy", "maroon", "teal", "olive", "fuchsia", "lime", "aqua", "salmon", "skyblue", "slategray", "lavender", "deeppink", "sienna",'palegreen','gold','blue','red','orange','indianred','ivory','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan', 'lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lime','limegreen','maroon','mediumaquamarine','mediumorchid','mediumpurple'];
    i = -1;
(function f(){
    i = (i + 1) % colors.length;
    // aban.x(width*timing[ i ]);
    aban2.fill(colors[i]);
    aban7.fill(colors[i]);
    abu1.fill(colors[i+1]);
    abu2.fill(colors[i+2]);
    abu3.fill(colors[i+3]);
    abu4.fill(colors[i+4]);
    abu5.fill(colors[i+5]);
    abu6.fill(colors[i+6]);
    abu7.fill(colors[i+7]);
    adi1.fill(colors[i]);
    adi2.fill(colors[i+1]);
    adi3.fill(colors[i+2]);
    adidua1.fill(colors[i]);
    adidua2.fill(colors[i+1]);
    adidua3.fill(colors[i+2]);
    adidua4.fill(colors[i+3]);
    adidua5.fill(colors[i+4]);
    adidua6.fill(colors[i+5]);
    adidua7.fill(colors[i+6]);
    adidua8.fill(colors[i+7]);
    adwo1.fill(colors[i+1]);
    adwo2.fill(colors[i+2]);
    adwo3.fill(colors[i+3]);
    adwo4.fill(colors[i+4]);
    adwo5.fill(colors[i+5]);
    adwo6.fill(colors[i+6]);
    akoben1.stroke(colors[i+1]);
    akoben2.stroke(colors[i+2]);
    akoben3.stroke(colors[i+3]);
    agyin1.fill(colors[i+6]);
    agyin2.fill(colors[i+7]);
    agyin3.fill(colors[i+8]);
    agyin4.fill(colors[i+9]);
    agyin5.fill(colors[i+10]);
    akobenn1.fill(colors[i]);
    akobenn2.fill(colors[i+10]);
    akobenn3.fill(colors[i+11]);
    akobenn4.fill(colors[i+12]);
    akobenn5.fill(colors[i+13]);
    akobenn6.fill(colors[i+4]);
    akofena1.fill(colors[i+13]);
    akofena2.fill(colors[i+14]);
    akofena3.fill(colors[i+15]);
    akofena4.fill(colors[i+16]);
    akofena5.fill(colors[i+1]);
    akofena6.fill(colors[i+2]);
    asaase1.stroke(colors[i+1]);
    asaase3.stroke(colors[i+2]);
    asaaseG1.stroke(colors[i+3]);
    asaaseG3.stroke(colors[i+4]);
    asaaseP1.stroke(colors[i+5]);
    asaaseP3.stroke(colors[i+6]);
    asaaseR1.stroke(colors[i+7]);
    asaaseR3.stroke(colors[i+8]);
    aya1.fill(colors[i+6]);
    aya2.fill(colors[i+7]);
    aya3.fill(colors[i+8]);
    aya4.fill(colors[i+9]);
    aya5.fill(colors[i+10]);
    aya6.fill(colors[i+11]);
    aya7.fill(colors[i+12]);
    aya8.fill(colors[i+13]);
    aya9.fill(colors[i+14]);

    setTimeout(f, 1000);
 })();
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

 asaase_g.add(asaase).add(asaaseG1_2_3).add(asaaseP1_2_3).add(asaaseR1_2_3);
 layer.add(asaase_g);
 

 akofena.add(akofena1).add(akofena2).add(akofena3).add(akofena4).add(akofena5).add(akofena6);
 layer.add(akofena);

 akobenn.add(akobenn1).add(akobenn2).add(akobenn3).add(akobenn4).add(akobenn5).add(akobenn6).add(akobenn7);
 layer.add(akobenn);

 agyin.add(agyin1).add(agyin2).add(agyin3).add(agyin4).add(agyin5);
 layer.add(agyin);

 akoben.add(akoben1).add(akoben2).add(akoben3).add(akoben4);
 layer.add(akoben);

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

// add the layer to the stage
stage.add(layer);
