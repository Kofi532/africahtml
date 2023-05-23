
var width = window.innerWidth;
var height = window.innerHeight;

// var width = 1000;
// var height = 1000;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height*2,
});

var layer = new Konva.Layer();

var backg = new Konva.Rect({
    fill: 'black',
    width: width,
    height: height,
    stroke: 'black',
    strokeWidth: 5,
  });

//   first shape starts
var line1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(100, 30);
      context.lineTo(0, 60);
      context.lineTo(100, 90);
      context.lineTo(0, 120);
      context.lineTo(100, 150);
      context.lineTo(0, 180);
      context.lineTo(100, 210);
      context.lineTo(0, 240);
      context.lineTo(100, 270);
      context.lineTo(0, 300);
      context.lineTo(100, 330);
      context.lineTo(0, 360);
      context.lineTo(100, 390);
      context.lineTo(0, 420);
      context.lineTo(100, 450);
      context.lineTo(0, 480);
      context.lineTo(100, 510);
      context.lineTo(0, 540);
      context.lineTo(100, 570);
      context.lineTo(0, 600);
      context.lineTo(100, 630);
      context.lineTo(0, 660);
      context.lineTo(100, 690);
      context.lineTo(0, 720);
      context.lineTo(100, 750);
      context.lineTo(0, 780);
      context.lineTo(100, 810);
      context.lineTo(0, 840);
      context.lineTo(100, 870);
      context.lineTo(0, 900);
      context.lineTo(100, 930);
      context.lineTo(0, 960);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'black',
    strokeWidth: 3,
    stroke: 'black',
  });

  var line2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(0, 0+20);
      context.lineTo(100, 30+20);
      context.lineTo(0, 60+20);
      context.lineTo(100, 90+20);
      context.lineTo(0, 120+20);
      context.lineTo(100, 150+20);
      context.lineTo(0, 180+20);
      context.lineTo(100, 210+20);
      context.lineTo(0, 240+20);
      context.lineTo(100, 270+20);
      context.lineTo(0, 300+20);
      context.lineTo(100, 330+20);
      context.lineTo(0, 360+20);
      context.lineTo(100, 390+20);
      context.lineTo(0, 420+20);
      context.lineTo(100, 450+20);
      context.lineTo(0, 480+20);
      context.lineTo(100, 510+20);
      context.lineTo(0, 540+20);
      context.lineTo(100, 570+20);
      context.lineTo(0, 600+20);
      context.lineTo(100, 630+20);
      context.lineTo(0, 660+20);
      context.lineTo(100, 690+20);
      context.lineTo(0, 720+20);
      context.lineTo(100, 750+20);
      context.lineTo(0, 780+20);
      context.lineTo(100, 810+20);
      context.lineTo(0, 840+20);
      context.lineTo(100, 870+20);
      context.lineTo(0, 900+20);
      context.lineTo(100, 930+20);
      context.lineTo(0, 960+20);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'black',
    strokeWidth: 6,
    stroke: 'black',
  });

  var vert1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(10, 0);
      context.quadraticCurveTo(30, 180, 10, 300);
      context.quadraticCurveTo(-5, 250, 10, 600);
      context.quadraticCurveTo(10, 900, 10, 900);
      context.lineTo(80, 900);
      context.lineTo(80, 700);
      context.quadraticCurveTo(110, 450, 80, 300);
      context.quadraticCurveTo(100, 50, 80, 0);
      context.lineTo(10, 0);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 3,
  });
// first shape ends

// second shape starts
var liness = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(140, 0);
      context.quadraticCurveTo(120, 80, 140, 200);
      context.quadraticCurveTo(150, 350, 140, 400);
      context.quadraticCurveTo(110, 420, 140, 600);
      context.moveTo(180, 0);
      context.quadraticCurveTo(150, 100, 180, 200);
      context.quadraticCurveTo(200, 300, 180, 400);
      context.quadraticCurveTo(150, 500, 180, 600);
      context.moveTo(220, 0);
      context.quadraticCurveTo(150, 190, 220, 200);
      context.quadraticCurveTo(200, 350, 220, 400);
      context.quadraticCurveTo(150, 400, 220, 600);
     context.fillStrokeShape(shape);
    },
    // fill: 'yellow',
    stroke: 'black',
    strokeWidth: 3,
  });

  var vert2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(110, 0);
      context.quadraticCurveTo(120, 100, 110, 200);
      context.quadraticCurveTo(150, 450, 110, 500);
      context.quadraticCurveTo(130, 700, 110, 900);
      context.lineTo(220, 900);
    //   context.lineTo(220, 500);
      context.quadraticCurveTo(230, 800, 220, 500);
      context.quadraticCurveTo(200, 350, 220, 200);
      context.lineTo(205, 0);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: 'violet',
    stroke: 'black',
    strokeWidth: 3,
  });

// second shape ends

//third shape
var rectange_1 = new Konva.Group({
    x: 200,
    y: -100,
    visible: true,
  });

  var rectange1_1 = new Konva.Rect({
    x: 100,
    y: 100,
    fill: 'brown',
    width: 25,
    height: 25,
    stroke: 'black',
    strokeWidth: 5,
   // draggable: true,
    rotation: 45,
  });

const rectange2_1 = rectange1_1.clone();
rectange2_1.strokeWidth(2);
rectange2_1.width(40);
rectange2_1.height(40);

const rectange_2 = rectange_1.clone();
rectange_2.y(-40);
const rectange1_2 = rectange1_1.clone();
const rectange2_2 = rectange2_1.clone();

const rectange_3 = rectange_2.clone();
rectange_3.y(20);
const rectange1_3 = rectange1_2.clone();
const rectange2_3 = rectange2_2.clone();

const rectange_4 = rectange_3.clone();
rectange_4.y(80);
const rectange1_4 = rectange1_3.clone();
const rectange2_4 = rectange2_3.clone();

const rectange_5 = rectange_4.clone();
rectange_5.y(140);
const rectange1_5 = rectange1_4.clone();
const rectange2_5 = rectange2_4.clone();

const rectange_6 = rectange_5.clone();
rectange_6.y(200);
const rectange1_6 = rectange1_5.clone();
const rectange2_6 = rectange2_5.clone();

const rectange_7 = rectange_6.clone();
rectange_6.y(260);
const rectange1_7 = rectange1_6.clone();
const rectange2_7 = rectange2_6.clone();

const rectange_8 = rectange_7.clone();
rectange_7.y(320);
const rectange1_8 = rectange1_7.clone();
const rectange2_8 = rectange2_7.clone();

const rectange_9 = rectange_8.clone();
rectange_9.y(380);
const rectange1_9 = rectange1_8.clone();
const rectange2_9 = rectange2_8.clone();

const rectange_10 = rectange_9.clone();
rectange_10.y(440);
const rectange1_10 = rectange1_9.clone();
const rectange2_10 = rectange2_9.clone();

const rectange_11 = rectange_10.clone();
rectange_11.y(500);
const rectange1_11 = rectange1_10.clone();
const rectange2_11 = rectange2_10.clone();

  var vert3 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(250, 0);
      context.quadraticCurveTo(230, 240, 250, 300);
      context.quadraticCurveTo(270, 300, 250, 600);
      context.quadraticCurveTo(230, 800, 250, 900);
      context.lineTo(220, 900);
    //   context.lineTo(220, 500);
      context.quadraticCurveTo(390, 800, 380, 500);
      context.quadraticCurveTo(350, 350, 380, 0);
      context.lineTo(250, 0);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: 'grey',
    stroke: 'black',
    strokeWidth: 3,
  });

//   third shape ends

//forth shape starts
var forth = new Konva.Group({
    x: 400,
    y: 0,
  });

  const forth1 = line1.clone();
  const forth2 = line2.clone();
  const forth3 = vert1.clone(); //container
  forth3.fill('pink');
// forth shape ends

// fifth shape starts
var fifth = new Konva.Group({
    x: 400,
    y: 0,
  });
const fifth1 = liness.clone();
const fifth2 =  vert2.clone();
fifth2.fill('red');
//fifth shape ends

// sixth shape starts
const sixth = forth.clone();
sixth.x(650);
const sixth1 = forth1.clone();
const sixth2 = forth2.clone();
const sixth3 = forth3.clone();
sixth3.fill('#56595A');
// sixth shape ends

// seventh shape starts

var seventh1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(140, 0);
      context.quadraticCurveTo(120, 80, 140, 200);
      context.quadraticCurveTo(150, 350, 140, 400);
      context.quadraticCurveTo(110, 420, 140, 600);
      context.moveTo(180, 0);
      context.quadraticCurveTo(150, 100, 180, 200);
      context.quadraticCurveTo(200, 300, 180, 400);
      context.quadraticCurveTo(150, 500, 180, 600);
      context.moveTo(220, 0);
      context.quadraticCurveTo(150, 190, 220, 200);
      context.quadraticCurveTo(200, 350, 220, 400);
      context.quadraticCurveTo(150, 400, 220, 600);
     context.fillStrokeShape(shape);
    },
    // fill: 'yellow',
    stroke: 'black',
    strokeWidth: 3,
  });

  var vert2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(110, 0);
      context.quadraticCurveTo(120, 100, 110, 200);
      context.quadraticCurveTo(150, 450, 110, 500);
      context.quadraticCurveTo(130, 700, 110, 900);
      context.lineTo(220, 900);
    //   context.lineTo(220, 500);
      context.quadraticCurveTo(230, 800, 220, 500);
      context.quadraticCurveTo(200, 350, 220, 200);
      context.lineTo(205, 0);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: 'violet',
    stroke: 'black',
    strokeWidth: 3,
  });





//   layer.add(backg);
  layer.add(vert1);
  layer.add(vert2);
  layer.add(vert3);
  layer.add(line1);
  layer.add(line2);
  layer.add(liness);

  rectange_1.add(rectange2_1).add(rectange1_1);
  layer.add(rectange_1);

  rectange_2.add(rectange2_2).add(rectange1_2);
  layer.add(rectange_2);

  rectange_3.add(rectange2_3).add(rectange1_3);
  layer.add(rectange_3);

  rectange_4.add(rectange2_4).add(rectange1_4);
  layer.add(rectange_4);

  rectange_5.add(rectange2_5).add(rectange1_5);
  layer.add(rectange_5);

  rectange_6.add(rectange2_6).add(rectange1_6);
  layer.add(rectange_6);

  rectange_7.add(rectange2_7).add(rectange1_7);
  layer.add(rectange_7);

  rectange_8.add(rectange2_8).add(rectange1_8);
  layer.add(rectange_8);

  rectange_9.add(rectange2_9).add(rectange1_9);
  layer.add(rectange_9);

  rectange_10.add(rectange2_10).add(rectange1_10);
  layer.add(rectange_10);

  rectange_11.add(rectange2_11).add(rectange1_11);
  layer.add(rectange_11);

  forth.add(forth3).add(forth1).add(forth2);
  layer.add(forth);

  fifth.add(fifth2).add(fifth1);
  layer.add(fifth);

  sixth.add(sixth3).add(sixth1).add(sixth2);
  layer.add(sixth);

  stage.add(layer);




