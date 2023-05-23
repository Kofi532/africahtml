var width = window.innerWidth;
var height = window.innerHeight;

// var width = 1000;
// var height = 1000;

var stage = new Konva.Stage({

  container: 'container',
  width: width*2,
  height: height*2,
});

var layer = new Konva.Layer();

var backg = new Konva.Rect({
    width: width,
    height: height,
    fill: 'black',
  });
layer.add(backg);
// 

// first shpe
var arc_1 = new Konva.Group({
  });

  var oneline_1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/100
    var x2 = width/14
    var y1 = height
      context.beginPath();
      context.moveTo(x1, 0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00FFFF',
    stroke: 'black',
    strokeWidth: 3,
  });

var arc1_1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/90
    var y1 = height/60
      context.beginPath();
      context.moveTo(x1, y1);
      context.quadraticCurveTo(x1+10, y1+20, x1+20,y1);
    //   context.lineTo(205, 0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'violet',
    stroke: 'black',
    strokeWidth: 3,
  });


const arc2_1 = arc1_1.clone();
arc2_1.x(50);

const arc3_1 = arc2_1.clone();
arc3_1.x(25);
arc3_1.y(50);

const arc_2 = arc_1.clone();
arc_2.y(100);
const arc1_2 = arc1_1.clone();
const arc2_2 = arc2_1.clone();
const arc3_2 = arc3_1.clone();

const arc_3 = arc_2.clone();
arc_3.y(200);
const arc1_3 = arc1_2.clone();
const arc2_3 = arc2_2.clone();
const arc3_3 = arc3_2.clone();

const arc_4 = arc_3.clone();
arc_4.y(300);
const arc1_4 = arc1_3.clone();
const arc2_4 = arc2_3.clone();
const arc3_4 = arc3_3.clone();

const arc_5 = arc_4.clone();
arc_5.y(400);
const arc1_5 = arc1_4.clone();
const arc2_5 = arc2_4.clone();
const arc3_5 = arc3_4.clone();

const arc_6 = arc_5.clone();
arc_6.y(500);
const arc1_6 = arc1_5.clone();
const arc2_6 = arc2_5.clone();
const arc3_6 = arc3_5.clone();

const arc_7 = arc_6.clone();
arc_7.y(600);
const arc1_7 = arc1_6.clone();
const arc2_7 = arc2_6.clone();
const arc3_7 = arc3_6.clone();

const arc_8 = arc_7.clone();
arc_8.y(700);
const arc1_8 = arc1_7.clone();
const arc2_8 = arc2_7.clone();
const arc3_8 = arc3_7.clone();
// first shape ends


// second shape
var lines_2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/11
    var x2 = width/9
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1.1, (y1*0.5)*0.41, x1, y1*0.5);
      context.quadraticCurveTo(x1*0.84, (y1*0.5)*1.32, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.88, (y1*0.5)*1.38, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.0, (y1*0.5)*0.37, x2, y1*0);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'blue',
    stroke: 'black',
    strokeWidth: 3,
  });

  var container_2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/13
    var x2 = width/7.5
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00308F',
    stroke: 'black',
    strokeWidth: 3,
  });

//   third shape
//gyawu atico shape

var gyawu_1 = new Konva.Group({
    x: width/6,
    scaleX:0.2,
    scaleY:0.2,
});
//  gyawu.visible(true);
//
var gyawu1_1 = new Konva.Shape({
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

const gyawu2_1 = gyawu1_1.clone();
gyawu2_1.scaleX(-gyawu2_1.scaleX());
gyawu2_1.scaleY(-gyawu2_1.scaleY());
gyawu2_1.x(100);
gyawu2_1.y(130);

const gyawu_2 = gyawu_1.clone();
gyawu_2.y(50);
const gyawu1_2 = gyawu1_1.clone();
const gyawu2_2 = gyawu2_1.clone();

const gyawu_3 = gyawu_2.clone();
gyawu_3.y(100);
const gyawu1_3 = gyawu1_2.clone();
const gyawu2_3 = gyawu2_2.clone();
//gyawu4
const gyawu_4 = gyawu_3.clone();
gyawu_4.y(150);
const gyawu1_4 = gyawu1_3.clone();
const gyawu2_4 = gyawu2_3.clone();
//gyawu5
const gyawu_5 = gyawu_4.clone();
gyawu_5.y(200);
const gyawu1_5 = gyawu1_4.clone();
const gyawu2_5 = gyawu2_4.clone();
//gyawu6
const gyawu_6 = gyawu_5.clone();
gyawu_6.y(250);
const gyawu1_6 = gyawu1_5.clone();
const gyawu2_6 = gyawu2_5.clone();
//gyawu7
const gyawu_7 = gyawu_6.clone();
gyawu_7.y(300);
const gyawu1_7 = gyawu1_6.clone();
const gyawu2_7 = gyawu2_6.clone();
//gyawu8
const gyawu_8 = gyawu_7.clone();
gyawu_8.y(350);
const gyawu1_8 = gyawu1_7.clone();
const gyawu2_8 = gyawu2_7.clone();
// gyawu9
const gyawu_9 = gyawu_8.clone();
gyawu_9.y(400);
const gyawu1_9 = gyawu1_8.clone();
const gyawu2_9 = gyawu2_8.clone();
//gyawu10
const gyawu_10 = gyawu_9.clone();
gyawu_10.y(450);
const gyawu1_10 = gyawu1_9.clone();
const gyawu2_10 = gyawu2_9.clone();
//gyawu11
const gyawu_11 = gyawu_10.clone();
gyawu_11.y(500);
const gyawu1_11 = gyawu1_10.clone();
const gyawu2_11 = gyawu2_10.clone();
//gyawu12
const gyawu_12 = gyawu_11.clone();
gyawu_12.y(550);
const gyawu1_12 = gyawu1_11.clone();
const gyawu2_12 = gyawu2_11.clone();

//gyawu13
const gyawu_13 = gyawu_12.clone();
gyawu_13.y(600);
const gyawu1_13 = gyawu1_12.clone();
const gyawu2_13 = gyawu2_12.clone();
//gyawu14
const gyawu_14 = gyawu_13.clone();
gyawu_14.y(650);
const gyawu1_14 = gyawu1_13.clone();
const gyawu2_14 = gyawu2_13.clone();

const gyawu_15 = gyawu_14.clone();
gyawu_15.y(700);
const gyawu1_15 = gyawu1_14.clone();
const gyawu2_15 = gyawu2_14.clone();

// container3
var container_3 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/7
    var x2 = width/5
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#007FFF',
    stroke: 'black',
    strokeWidth: 3,
  });

// forth shape
var circle_1 = new Konva.Group({
    x: 20,
});

var circle1_1 = new Konva.Circle({
    x:  width/4.5,
    y: 20,
    radius: 10,
    stroke: 'black',
    strokeWidth: 4,
  });

const circle2_1 = circle1_1.clone();
circle2_1.x(width/4.2);
circle2_1.y(50);

//circle2
const circle_2 = circle_1.clone();
circle_2.y(100);
const circle1_2 = circle1_1.clone();
const circle2_2 = circle2_1.clone();
//circle3
const circle_3 = circle_2.clone();
circle_3.y(200);
const circle1_3 = circle1_2.clone();
const circle2_3 = circle2_2.clone();
//circle4
const circle_4 = circle_3.clone();
circle_4.y(300);
const circle1_4 = circle1_3.clone();
const circle2_4 = circle2_3.clone();
//circle5
const circle_5 = circle_4.clone();
circle_5.y(400);
const circle1_5 = circle1_4.clone();
const circle2_5 = circle2_4.clone();
//circle6
const circle_6 = circle_5.clone();
circle_6.y(500);
const circle1_6 = circle1_5.clone();
const circle2_6 = circle2_5.clone();
//circle7
const circle_7 = circle_6.clone();
circle_7.y(600);
const circle1_7 = circle1_6.clone();
const circle2_7 = circle2_6.clone();
//circle8
const circle_8 = circle_7.clone();
circle_8.y(700);
const circle1_8 = circle1_7.clone();
const circle2_8 = circle2_7.clone();

var container_4 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/4.9
    var x2 = width/3.5
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#0a2351',
    stroke: 'black',
    strokeWidth: 3,
  });
//   forth shape ends

// fifth shape starts
var oval_1 = new Konva.Group({
    x: 0,
});

var oval1_1 = new Konva.Ellipse({
    x: width/3.3,
    y: 30,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var oval2_1 = new Konva.Ellipse({
    x: width/3.1,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var oval3_1 = new Konva.Ellipse({
    x: width/2.9,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
    rotation:45,
  });

//oval2
const oval_2 = oval_1.clone();
oval_2.y(60);
const oval1_2 = oval1_1.clone();
const oval2_2 = oval2_1.clone();
const oval3_2 = oval3_1.clone();
//oval3
const oval_3 = oval_2.clone();
oval_3.y(120);
const oval1_3 = oval1_2.clone();
const oval2_3 = oval2_2.clone();
const oval3_3 = oval3_2.clone();
//oval4
const oval_4 = oval_3.clone();
oval_4.y(180);
const oval1_4 = oval1_3.clone();
const oval2_4 = oval2_3.clone();
const oval3_4 = oval3_3.clone();
//oval5
const oval_5 = oval_4.clone();
oval_5.y(240);
const oval1_5 = oval1_4.clone();
const oval2_5 = oval2_4.clone();
const oval3_5 = oval3_4.clone();
//oval6
const oval_6 = oval_5.clone();
oval_6.y(300);
const oval1_6 = oval1_5.clone();
const oval2_6 = oval2_5.clone();
const oval3_6 = oval3_5.clone();
//oval7
const oval_7 = oval_6.clone();
oval_7.y(360);
const oval1_7 = oval1_6.clone();
const oval2_7 = oval2_6.clone();
const oval3_7 = oval3_6.clone();
//oval8
const oval_8 = oval_7.clone();
oval_8.y(420);
const oval1_8 = oval1_7.clone();
const oval2_8 = oval2_7.clone();
const oval3_8 = oval3_7.clone();
//oval9
const oval_9 = oval_8.clone();
oval_9.y(480);
const oval1_9 = oval1_8.clone();
const oval2_9 = oval2_8.clone();
const oval3_9 = oval3_8.clone();
//oval10
const oval_10 = oval_9.clone();
oval_10.y(540);
const oval1_10 = oval1_9.clone();
const oval2_10 = oval2_9.clone();
const oval3_10 = oval3_9.clone();
//oval11
const oval_11 = oval_10.clone();
oval_11.y(600);
const oval1_11 = oval1_10.clone();
const oval2_11 = oval2_10.clone();
const oval3_11 = oval3_10.clone();
//oval12
const oval_12 = oval_11.clone();
oval_12.y(660);
const oval1_12 = oval1_11.clone();
const oval2_12 = oval2_11.clone();
const oval3_12 = oval3_11.clone();
//oval13
const oval_13 = oval_12.clone();
oval_13.y(720);
const oval1_13 = oval1_12.clone();
const oval2_13 = oval2_12.clone();
const oval3_13 = oval3_12.clone();
//oval14
const oval_14 = oval_13.clone();
oval_14.y(780);
const oval1_14 = oval1_13.clone();
const oval2_14 = oval2_13.clone();
const oval3_14 = oval3_13.clone();
//oval15
const oval_15 = oval_14.clone();
oval_15.y(840);
const oval1_15 = oval1_14.clone();
const oval2_15 = oval2_14.clone();
const oval3_15 = oval3_14.clone();

var container_5 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/3.4
    var x2 = width/2.65
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#0039a6',
    stroke: 'black',
    strokeWidth: 3,
  });
// fifth shape ends

// sixth shape start
var oneline_6 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/2.55
    var x2 = width/2.1
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#A3C1AD',
    stroke: 'black',
    strokeWidth: 3,
  });

  var lines_6 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/2.22
    var x2 = width/2.3
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*0.43, x1, y1*0.5);
      context.quadraticCurveTo(x1*0.87, (y1*0.5)*1.33, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.92, (y1*0.5)*1.33, x2, y1*0.5);
      context.quadraticCurveTo(x2*0.98, (y1*0.5)*0.41, x2, y1*0);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'blue',
    stroke: 'black',
    strokeWidth: 3,
  });  

// sixth shape ends

// seventh shape starts
//gyawu atico shape

var container_7 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/2.07
    var x2 = width/1.8
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00BFFF',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_7);

var gyaw_1 = new Konva.Group({
    x: width/1.97,
    scaleX:0.2,
    scaleY:0.2,
});
//  gyawu.visible(true);
//
var gyaw1_1 = new Konva.Shape({
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

const gyaw2_1 = gyaw1_1.clone();
gyaw2_1.scaleX(-gyaw2_1.scaleX());
gyaw2_1.scaleY(-gyaw2_1.scaleY());
gyaw2_1.x(100);
gyaw2_1.y(130);

//gyaw2
const gyaw_2 = gyaw_1.clone();
gyaw_2.y(50);
const gyaw1_2 = gyaw1_1.clone();
gyaw_2.add(gyaw1_2);
const gyaw2_2 = gyaw2_1.clone();
gyaw_2.add(gyaw2_2);
layer.add(gyaw_2);

//gyaw3
const gyaw_3 = gyaw_2.clone();
gyaw_3.y(100);
const gyaw1_3 = gyaw1_2.clone();
gyaw_3.add(gyaw1_3);
const gyaw2_3 = gyaw2_2.clone();
gyaw_3.add(gyaw2_3);
layer.add(gyaw_3);
//gyaw4
const gyaw_4 = gyaw_3.clone();
gyaw_4.y(150);
const gyaw1_4 = gyaw1_3.clone();
gyaw_4.add(gyaw1_4);
const gyaw2_4 = gyaw2_3.clone();
gyaw_4.add(gyaw2_4);
layer.add(gyaw_4);
//gyaw5
const gyaw_5 = gyaw_4.clone();
gyaw_5.y(200);
const gyaw1_5 = gyaw1_4.clone();
gyaw_5.add(gyaw1_5);
const gyaw2_5 = gyaw2_4.clone();
gyaw_5.add(gyaw2_5);
layer.add(gyaw_5);
//gyaw6
const gyaw_6 = gyaw_5.clone();
gyaw_6.y(250);
const gyaw1_6 = gyaw1_5.clone();
gyaw_6.add(gyaw1_6);
const gyaw2_6 = gyaw2_5.clone();
gyaw_6.add(gyaw2_6);
layer.add(gyaw_6);
//gyaw7
const gyaw_7 = gyaw_6.clone();
gyaw_7.y(300);
const gyaw1_7 = gyaw1_6.clone();
gyaw_7.add(gyaw1_7);
const gyaw2_7 = gyaw2_6.clone();
gyaw_7.add(gyaw2_7);
layer.add(gyaw_7);
//gyaw8
const gyaw_8 = gyaw_7.clone();
gyaw_8.y(350);
const gyaw1_8 = gyaw1_7.clone();
gyaw_8.add(gyaw1_8);
const gyaw2_8 = gyaw2_7.clone();
gyaw_8.add(gyaw2_8);
layer.add(gyaw_8);
//gyaw9
const gyaw_9 = gyaw_8.clone();
gyaw_9.y(400);
const gyaw1_9 = gyaw1_8.clone();
gyaw_9.add(gyaw1_9);
const gyaw2_9 = gyaw2_8.clone();
gyaw_9.add(gyaw2_9);
layer.add(gyaw_9);
//gyaw10
const gyaw_10 = gyaw_9.clone();
gyaw_10.y(450);
const gyaw1_10 = gyaw1_9.clone();
gyaw_10.add(gyaw1_10);
const gyaw2_10 = gyaw2_9.clone();
gyaw_10.add(gyaw2_10);
layer.add(gyaw_10);
//gyaw11
const gyaw_11 = gyaw_10.clone();
gyaw_11.y(500);
const gyaw1_11 = gyaw1_10.clone();
gyaw_11.add(gyaw1_11);
const gyaw2_11 = gyaw2_10.clone();
gyaw_11.add(gyaw2_11);
layer.add(gyaw_11);
//gyaw12
const gyaw_12 = gyaw_11.clone();
gyaw_12.y(550);
const gyaw1_12 = gyaw1_11.clone();
gyaw_12.add(gyaw1_12);
const gyaw2_12 = gyaw2_11.clone();
gyaw_12.add(gyaw2_12);
layer.add(gyaw_12);
//gyaw13
const gyaw_13 = gyaw_12.clone();
gyaw_13.y(600);
const gyaw1_13 = gyaw1_12.clone();
gyaw_13.add(gyaw1_13);
const gyaw2_13 = gyaw2_12.clone();
gyaw_13.add(gyaw2_13);
layer.add(gyaw_13);
//gyaw14
const gyaw_14 = gyaw_13.clone();
gyaw_14.y(650);
const gyaw1_14 = gyaw1_13.clone();
gyaw_14.add(gyaw1_14);
const gyaw2_14 = gyaw2_13.clone();
gyaw_14.add(gyaw2_14);
layer.add(gyaw_14);
//gyaw15
const gyaw_15 = gyaw_14.clone();
gyaw_15.y(700);
const gyaw1_15 = gyaw1_14.clone();
gyaw_15.add(gyaw1_15);
const gyaw2_15 = gyaw2_14.clone();
gyaw_15.add(gyaw2_15);
layer.add(gyaw_15);
//gyaw16
const gyaw_16 = gyaw_15.clone();
gyaw_16.y(1330);
const gyaw1_16 = gyaw1_15.clone();
gyaw_16.add(gyaw1_16);
const gyaw2_16 = gyaw2_15.clone();
gyaw_16.add(gyaw2_16);
layer.add(gyaw_16);
//gyaw17
const gyaw_17 = gyaw_16.clone();
gyaw_17.y(1430);
const gyaw1_17 = gyaw1_16.clone();
gyaw_17.add(gyaw1_17);
const gyaw2_17 = gyaw2_16.clone();
gyaw_17.add(gyaw2_17);
layer.add(gyaw_17);
//gyaw18
const gyaw_18 = gyaw_17.clone();
gyaw_18.y(1530);
const gyaw1_18 = gyaw1_17.clone();
gyaw_18.add(gyaw1_18);
const gyaw2_18 = gyaw2_17.clone();
gyaw_18.add(gyaw2_18);
layer.add(gyaw_18);
//gyaw19
const gyaw_19 = gyaw_18.clone();
gyaw_19.y(1630);
const gyaw1_19 = gyaw1_18.clone();
gyaw_19.add(gyaw1_19);
const gyaw2_19 = gyaw2_18.clone();
gyaw_19.add(gyaw2_19);
layer.add(gyaw_19);
//gyaw20
const gyaw_20 = gyaw_19.clone();
gyaw_20.y(1730);
const gyaw1_20 = gyaw1_19.clone();
gyaw_20.add(gyaw1_20);
const gyaw2_20 = gyaw2_19.clone();
gyaw_20.add(gyaw2_20);
layer.add(gyaw_20);
//gyaw21
const gyaw_21 = gyaw_20.clone();
gyaw_21.y(1830);
const gyaw1_21 = gyaw1_20.clone();
gyaw_21.add(gyaw1_21);
const gyaw2_21 = gyaw2_20.clone();
gyaw_21.add(gyaw2_21);
layer.add(gyaw_21);
//gyaw22
const gyaw_22 = gyaw_21.clone();
gyaw_22.y(1930);
const gyaw1_22 = gyaw1_21.clone();
gyaw_22.add(gyaw1_22);
const gyaw2_22 = gyaw2_21.clone();
gyaw_22.add(gyaw2_22);
layer.add(gyaw_22);
//gyaw23
const gyaw_23 = gyaw_22.clone();
gyaw_23.y(2030);
const gyaw1_23 = gyaw1_22.clone();
gyaw_23.add(gyaw1_23);
const gyaw2_23 = gyaw2_22.clone();
gyaw_23.add(gyaw2_23);
layer.add(gyaw_23);
//gyaw24
const gyaw_24 = gyaw_23.clone();
gyaw_24.y(2130);
const gyaw1_24 = gyaw1_23.clone();
gyaw_24.add(gyaw1_24);
const gyaw2_24 = gyaw2_23.clone();
gyaw_24.add(gyaw2_24);
layer.add(gyaw_24);
//gyaw25
const gyaw_25 = gyaw_24.clone();
gyaw_25.y(2230);
const gyaw1_25 = gyaw1_24.clone();
gyaw_25.add(gyaw1_25);
const gyaw2_25 = gyaw2_24.clone();
gyaw_25.add(gyaw2_25);
layer.add(gyaw_25);

// seventh shape ends

// eight shape starts
var container_8 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.76
    var x2 = width/1.55
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00CED1',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_8);

var arcc_1 = new Konva.Group({
    x: width/1.76,
});

var arcc1_1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/90
    var y1 = height/60
      context.beginPath();
      context.moveTo(x1, y1);
      context.quadraticCurveTo(x1+10, y1+20, x1+20,y1);
    //   context.lineTo(205, 0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'violet',
    stroke: 'black',
    strokeWidth: 3,
  });


const arcc2_1 = arcc1_1.clone();
arcc2_1.x(50);

const arcc3_1 = arcc2_1.clone();
arcc3_1.x(25);
arcc3_1.y(50);
arcc_1.add(arcc1_1).add(arcc2_1).add(arcc3_1);
layer.add(arcc_1);
//arcc2
const arcc_2 = arcc_1.clone();
arcc_2.y(100);
const arcc1_2 = arcc1_1.clone();
arcc_2.add(arcc1_2);
const arcc2_2 = arcc2_1.clone();
arcc_2.add(arcc2_2);
const arcc3_2 = arcc3_1.clone();
arcc_2.add(arcc3_2);
layer.add(arcc_2);
//arcc3
const arcc_3 = arcc_2.clone();
arcc_3.y(200);
const arcc1_3 = arcc1_2.clone();
arcc_3.add(arcc1_3);
const arcc2_3 = arcc2_2.clone();
arcc_3.add(arcc2_3);
const arcc3_3 = arcc3_2.clone();
arcc_3.add(arcc3_3);
layer.add(arcc_3);
//arcc4
const arcc_4 = arcc_3.clone();
arcc_4.y(300);
const arcc1_4 = arcc1_3.clone();
arcc_4.add(arcc1_4);
const arcc2_4 = arcc2_3.clone();
arcc_4.add(arcc2_4);
const arcc3_4 = arcc3_3.clone();
arcc_4.add(arcc3_4);
layer.add(arcc_4);
//arcc5
const arcc_5 = arcc_4.clone();
arcc_5.y(400);
const arcc1_5 = arcc1_4.clone();
arcc_5.add(arcc1_5);
const arcc2_5 = arcc2_4.clone();
arcc_5.add(arcc2_5);
const arcc3_5 = arcc3_4.clone();
arcc_5.add(arcc3_5);
layer.add(arcc_5);
//arcc6
const arcc_6 = arcc_5.clone();
arcc_6.y(500);
const arcc1_6 = arcc1_5.clone();
arcc_6.add(arcc1_6);
const arcc2_6 = arcc2_5.clone();
arcc_6.add(arcc2_6);
const arcc3_6 = arcc3_5.clone();
arcc_6.add(arcc3_6);
layer.add(arcc_6);
//arcc7
const arcc_7 = arcc_6.clone();
arcc_7.y(600);
const arcc1_7 = arcc1_6.clone();
arcc_7.add(arcc1_7);
const arcc2_7 = arcc2_6.clone();
arcc_7.add(arcc2_7);
const arcc3_7 = arcc3_6.clone();
arcc_7.add(arcc3_7);
layer.add(arcc_7);
//arcc8
const arcc_8 = arcc_7.clone();
arcc_8.y(700);
const arcc1_8 = arcc1_7.clone();
arcc_8.add(arcc1_8);
const arcc2_8 = arcc2_7.clone();
arcc_8.add(arcc2_8);
const arcc3_8 = arcc3_7.clone();
arcc_8.add(arcc3_8);
layer.add(arcc_8);
//arcc9
const arcc_9 = arcc_8.clone();
arcc_9.y(800);
const arcc1_9 = arcc1_8.clone();
arcc_9.add(arcc1_9);
const arcc2_9 = arcc2_8.clone();
arcc_9.add(arcc2_9);
const arcc3_9 = arcc3_8.clone();
arcc_9.add(arcc3_9);
layer.add(arcc_9);
// eight shape ends

// nine shape start
var container_9 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.53
    var x2 = width/1.36
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#008E97',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_9);

var ovall_1 = new Konva.Group({
    x: width/2.7,
});

var ovall1_1 = new Konva.Ellipse({
    x: width/3.3,
    y: 30,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var ovall2_1 = new Konva.Ellipse({
    x: width/3.1,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var ovall3_1 = new Konva.Ellipse({
    x: width/2.9,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
    rotation:45,
  });
ovall_1.add(ovall1_1).add(ovall2_1).add(ovall3_1);
layer.add(ovall_1);

//ovall2
const ovall_2 = ovall_1.clone();
ovall_2.y(60);
const ovall1_2 = ovall1_1.clone();
ovall_2.add(ovall1_2);
const ovall2_2 = ovall2_1.clone();
ovall_2.add(ovall2_2);
const ovall3_2 = ovall3_1.clone();
ovall_2.add(ovall3_2);
layer.add(ovall_2);
//ovall3
const ovall_3 = ovall_2.clone();
ovall_3.y(120);
const ovall1_3 = ovall1_2.clone();
ovall_3.add(ovall1_3);
const ovall2_3 = ovall2_2.clone();
ovall_3.add(ovall2_3);
const ovall3_3 = ovall3_2.clone();
ovall_3.add(ovall3_3);
layer.add(ovall_3);
//ovall4
const ovall_4 = ovall_3.clone();
ovall_4.y(180);
const ovall1_4 = ovall1_3.clone();
ovall_4.add(ovall1_4);
const ovall2_4 = ovall2_3.clone();
ovall_4.add(ovall2_4);
const ovall3_4 = ovall3_3.clone();
ovall_4.add(ovall3_4);
layer.add(ovall_4);
//ovall5
const ovall_5 = ovall_4.clone();
ovall_5.y(240);
const ovall1_5 = ovall1_4.clone();
ovall_5.add(ovall1_5);
const ovall2_5 = ovall2_4.clone();
ovall_5.add(ovall2_5);
const ovall3_5 = ovall3_4.clone();
ovall_5.add(ovall3_5);
layer.add(ovall_5);
//ovall6
const ovall_6 = ovall_5.clone();
ovall_6.y(300);
const ovall1_6 = ovall1_5.clone();
ovall_6.add(ovall1_6);
const ovall2_6 = ovall2_5.clone();
ovall_6.add(ovall2_6);
const ovall3_6 = ovall3_5.clone();
ovall_6.add(ovall3_6);
layer.add(ovall_6);
//ovall7
const ovall_7 = ovall_6.clone();
ovall_7.y(360);
const ovall1_7 = ovall1_6.clone();
ovall_7.add(ovall1_7);
const ovall2_7 = ovall2_6.clone();
ovall_7.add(ovall2_7);
const ovall3_7 = ovall3_6.clone();
ovall_7.add(ovall3_7);
layer.add(ovall_7);
//ovall8
const ovall_8 = ovall_7.clone();
ovall_8.y(420);
const ovall1_8 = ovall1_7.clone();
ovall_8.add(ovall1_8);
const ovall2_8 = ovall2_7.clone();
ovall_8.add(ovall2_8);
const ovall3_8 = ovall3_7.clone();
ovall_8.add(ovall3_8);
layer.add(ovall_8);
//ovall9
const ovall_9 = ovall_8.clone();
ovall_9.y(480);
const ovall1_9 = ovall1_8.clone();
ovall_9.add(ovall1_9);
const ovall2_9 = ovall2_8.clone();
ovall_9.add(ovall2_9);
const ovall3_9 = ovall3_8.clone();
ovall_9.add(ovall3_9);
layer.add(ovall_9);
//ovall10
const ovall_10 = ovall_9.clone();
ovall_10.y(540);
const ovall1_10 = ovall1_9.clone();
ovall_10.add(ovall1_10);
const ovall2_10 = ovall2_9.clone();
ovall_10.add(ovall2_10);
const ovall3_10 = ovall3_9.clone();
ovall_10.add(ovall3_10);
layer.add(ovall_10);
//ovall11
const ovall_11 = ovall_10.clone();
ovall_11.y(600);
const ovall1_11 = ovall1_10.clone();
ovall_11.add(ovall1_11);
const ovall2_11 = ovall2_10.clone();
ovall_11.add(ovall2_11);
const ovall3_11 = ovall3_10.clone();
ovall_11.add(ovall3_11);
layer.add(ovall_11);
//ovall12
const ovall_12 = ovall_11.clone();
ovall_12.y(660);
const ovall1_12 = ovall1_11.clone();
ovall_12.add(ovall1_12);
const ovall2_12 = ovall2_11.clone();
ovall_12.add(ovall2_12);
const ovall3_12 = ovall3_11.clone();
ovall_12.add(ovall3_12);
layer.add(ovall_12);
//ovall13
const ovall_13 = ovall_12.clone();
ovall_13.y(720);
const ovall1_13 = ovall1_12.clone();
ovall_13.add(ovall1_13);
const ovall2_13 = ovall2_12.clone();
ovall_13.add(ovall2_13);
const ovall3_13 = ovall3_12.clone();
ovall_13.add(ovall3_13);
layer.add(ovall_13);
//ovall14
const ovall_14 = ovall_13.clone();
ovall_14.y(780);
const ovall1_14 = ovall1_13.clone();
ovall_14.add(ovall1_14);
const ovall2_14 = ovall2_13.clone();
ovall_14.add(ovall2_14);
const ovall3_14 = ovall3_13.clone();
ovall_14.add(ovall3_14);
layer.add(ovall_14);
//ovall15
const ovall_15 = ovall_14.clone();
ovall_15.y(840);
const ovall1_15 = ovall1_14.clone();
ovall_15.add(ovall1_15);
const ovall2_15 = ovall2_14.clone();
ovall_15.add(ovall2_15);
const ovall3_15 = ovall3_14.clone();
ovall_15.add(ovall3_15);
layer.add(ovall_15);
// nine shape ends

// ten shape starts
var container_10 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.3
    var x2 = width/1.2
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#6082B6',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_10);

var star_1 = new Konva.Group({
});

var star1_1 = new Konva.Star({
    x: width/1.25,
    y: height / 16,
    numPoints: 9,
    innerRadius: 15,
    outerRadius: 30,
    stroke: 'black',
    strokeWidth: 4,
  });
//star2
const star_2 = star_1.clone();
star_2.y(60);
const star1_2 = star1_1.clone();
star_2.add(star1_2);
layer.add(star_2);
//star3
const star_3 = star_2.clone();
star_3.y(120);
const star1_3 = star1_2.clone();
star_3.add(star1_3);
layer.add(star_3);
//star4
const star_4 = star_3.clone();
star_4.y(180);
const star1_4 = star1_3.clone();
star_4.add(star1_4);
layer.add(star_4);
//star5
const star_5 = star_4.clone();
star_5.y(240);
const star1_5 = star1_4.clone();
star_5.add(star1_5);
layer.add(star_5);
//star6
const star_6 = star_5.clone();
star_6.y(300);
const star1_6 = star1_5.clone();
star_6.add(star1_6);
layer.add(star_6);
//star7
const star_7 = star_6.clone();
star_7.y(360);
const star1_7 = star1_6.clone();
star_7.add(star1_7);
layer.add(star_7);
//star8
const star_8 = star_7.clone();
star_8.y(420);
const star1_8 = star1_7.clone();
star_8.add(star1_8);
layer.add(star_8);
//star9
const star_9 = star_8.clone();
star_9.y(480);
const star1_9 = star1_8.clone();
star_9.add(star1_9);
layer.add(star_9);
//star10
const star_10 = star_9.clone();
star_10.y(540);
const star1_10 = star1_9.clone();
star_10.add(star1_10);
layer.add(star_10);
//star11
const star_11 = star_10.clone();
star_11.y(600);
const star1_11 = star1_10.clone();
star_11.add(star1_11);
layer.add(star_11);
//star12
const star_12 = star_11.clone();
star_12.y(660);
const star1_12 = star1_11.clone();
star_12.add(star1_12);
layer.add(star_12);
//star13
const star_13 = star_12.clone();
star_13.y(720);
const star1_13 = star1_12.clone();
star_13.add(star1_13);
layer.add(star_13);
//star14
const star_14 = star_13.clone();
star_14.y(780);
const star1_14 = star1_13.clone();
star_14.add(star1_14);
layer.add(star_14);
//star15
const star_15 = star_14.clone();
star_15.y(840);
const star1_15 = star1_14.clone();
star_15.add(star1_15);
layer.add(star_15);
// ten shape ends

// eleven shape starts
var lines_11 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.16
    var x2 = width/1.1
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.0, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#99FFFF',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(lines_11);
// eleven shape ends

// twelve shape starts
var container_11 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.09
    var x2 = width/1
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#4C516D',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_11);

//akofena
var akofena_1 = new Konva.Group({
    x: width/1.685,
    y: -170,
    scaleX: 0.5,
    scaleY: 0.5,
  });
  //circle left
  var akofena1_1 = new Konva.Circle({
    x: 1015,
    y: 500,
    radius: 8,
    stroke: 'black',
    strokeWidth: 3,
  });
  
  //rect left 
  var akofena2_1 = new Konva.Rect({
    x: 1012.5,
    y: 482,
    width: 5,
    height: 10,
    stroke: 'black',
    strokeWidth: 1,
  });
  //circle2
  const akofena3_1 = akofena1_1.clone();
  akofena3_1.y(473);
  //circle3
  //line1
  var akofena4_1 = new Konva.Shape({
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
  const akofena5_1 = akofena1_1.clone();
  akofena5_1 .y(385);
  akofena5_1.x(1000);
  akofena5_1.fill('red');
  akofena5_1.radius(5);
   //circle in rod 2
  const akofena6_1 = akofena5_1.clone();
  akofena6_1.y(400); 

//akofena2
const akofena_2 = akofena_1.clone();
akofena_2.y(-70);
const akofena1_2 = akofena1_1.clone();
akofena_2.add(akofena1_2);
const akofena2_2 = akofena2_1.clone();
akofena_2.add(akofena2_2);
const akofena3_2 = akofena3_1.clone();
akofena_2.add(akofena3_2);
const akofena4_2 = akofena4_1.clone();
akofena_2.add(akofena4_2);
const akofena5_2 = akofena5_1.clone();
akofena_2.add(akofena5_2);
const akofena6_2 = akofena6_1.clone();
akofena_2.add(akofena6_2);
layer.add(akofena_2);

//akofena3
const akofena_3 = akofena_2.clone();
akofena_3.y(30);
const akofena1_3 = akofena1_2.clone();
akofena_3.add(akofena1_3);
const akofena2_3 = akofena2_2.clone();
akofena_3.add(akofena2_3);
const akofena3_3 = akofena3_2.clone();
akofena_3.add(akofena3_3);
const akofena4_3 = akofena4_2.clone();
akofena_3.add(akofena4_3);
const akofena5_3 = akofena5_2.clone();
akofena_3.add(akofena5_3);
const akofena6_3 = akofena6_2.clone();
akofena_3.add(akofena6_3);
layer.add(akofena_3);

//akofena4
const akofena_4 = akofena_3.clone();
akofena_4.y(130);
const akofena1_4 = akofena1_3.clone();
akofena_4.add(akofena1_4);
const akofena2_4 = akofena2_3.clone();
akofena_4.add(akofena2_4);
const akofena3_4 = akofena3_3.clone();
akofena_4.add(akofena3_4);
const akofena4_4 = akofena4_3.clone();
akofena_4.add(akofena4_4);
const akofena5_4 = akofena5_3.clone();
akofena_4.add(akofena5_4);
const akofena6_4 = akofena6_3.clone();
akofena_4.add(akofena6_4);
layer.add(akofena_4);

//akofena5
const akofena_5 = akofena_4.clone();
akofena_5.y(230);
const akofena1_5 = akofena1_4.clone();
akofena_5.add(akofena1_5);
const akofena2_5 = akofena2_4.clone();
akofena_5.add(akofena2_5);
const akofena3_5 = akofena3_4.clone();
akofena_5.add(akofena3_5);
const akofena4_5 = akofena4_4.clone();
akofena_5.add(akofena4_5);
const akofena5_5 = akofena5_4.clone();
akofena_5.add(akofena5_5);
const akofena6_5 = akofena6_4.clone();
akofena_5.add(akofena6_5);
layer.add(akofena_5);

//akofena6
const akofena_6 = akofena_5.clone();
akofena_6.y(330);
const akofena1_6 = akofena1_5.clone();
akofena_6.add(akofena1_6);
const akofena2_6 = akofena2_5.clone();
akofena_6.add(akofena2_6);
const akofena3_6 = akofena3_5.clone();
akofena_6.add(akofena3_6);
const akofena4_6 = akofena4_5.clone();
akofena_6.add(akofena4_6);
const akofena5_6 = akofena5_5.clone();
akofena_6.add(akofena5_6);
const akofena6_6 = akofena6_5.clone();
akofena_6.add(akofena6_6);
layer.add(akofena_6);

//akofena7
const akofena_7 = akofena_6.clone();
akofena_7.y(430);
const akofena1_7 = akofena1_6.clone();
akofena_7.add(akofena1_7);
const akofena2_7 = akofena2_6.clone();
akofena_7.add(akofena2_7);
const akofena3_7 = akofena3_6.clone();
akofena_7.add(akofena3_7);
const akofena4_7 = akofena4_6.clone();
akofena_7.add(akofena4_7);
const akofena5_7 = akofena5_6.clone();
akofena_7.add(akofena5_7);
const akofena6_7 = akofena6_6.clone();
akofena_7.add(akofena6_7);
layer.add(akofena_7);



layer.add(container_5);
  
layer.add(container_4);

layer.add(container_3);

layer.add(container_2);

layer.add(oneline_6);

layer.add(oneline_1);

layer.add(lines_6);

akofena_1.add(akofena1_1).add(akofena2_1).add(akofena3_1).add(akofena4_1).add(akofena5_1).add(akofena6_1);
layer.add(akofena_1);

star_1.add(star1_1);
layer.add(star_1);

gyaw_1.add(gyaw1_1).add(gyaw2_1);
layer.add(gyaw_1);

oval_1.add(oval1_1).add(oval2_1).add(oval3_1);
layer.add(oval_1);

oval_2.add(oval1_2).add(oval2_2).add(oval3_2);
layer.add(oval_2);

oval_3.add(oval1_3).add(oval2_3).add(oval3_3);
layer.add(oval_3);

oval_4.add(oval1_4).add(oval2_4).add(oval3_4);
layer.add(oval_4);

oval_5.add(oval1_5).add(oval2_5).add(oval3_5);
layer.add(oval_5);

oval_6.add(oval1_6).add(oval2_6).add(oval3_6);
layer.add(oval_6);

oval_7.add(oval1_7).add(oval2_7).add(oval3_7);
layer.add(oval_7);

oval_8.add(oval1_8).add(oval2_8).add(oval3_8);
layer.add(oval_8);

oval_9.add(oval1_9).add(oval2_9).add(oval3_9);
layer.add(oval_9);

oval_10.add(oval1_10).add(oval2_10).add(oval3_10);
layer.add(oval_10);

oval_11.add(oval1_11).add(oval2_11).add(oval3_11);
layer.add(oval_11);

oval_12.add(oval1_12).add(oval2_12).add(oval3_12);
layer.add(oval_12);

oval_13.add(oval1_13).add(oval2_13).add(oval3_13);
layer.add(oval_13);

oval_14.add(oval1_14).add(oval2_14).add(oval3_14);
layer.add(oval_14);

oval_15.add(oval1_15).add(oval2_15).add(oval3_15);
layer.add(oval_15);

circle_1.add(circle1_1).add(circle2_1);
layer.add(circle_1);

circle_2.add(circle1_2).add(circle2_2);
layer.add(circle_2);

circle_3.add(circle1_3).add(circle2_3);
layer.add(circle_3);

circle_4.add(circle1_4).add(circle2_4);
layer.add(circle_4);

circle_5.add(circle1_5).add(circle2_5);
layer.add(circle_5);

circle_6.add(circle1_6).add(circle2_6);
layer.add(circle_6);

circle_7.add(circle1_7).add(circle2_7);
layer.add(circle_7);

circle_8.add(circle1_8).add(circle2_8);
layer.add(circle_8);


gyawu_1.add(gyawu1_1).add(gyawu2_1);
layer.add(gyawu_1);

gyawu_2.add(gyawu1_2).add(gyawu2_2);
layer.add(gyawu_2);

gyawu_3.add(gyawu1_3).add(gyawu2_3);
layer.add(gyawu_3);

gyawu_4.add(gyawu1_4).add(gyawu2_4);
layer.add(gyawu_4);

gyawu_5.add(gyawu1_5).add(gyawu2_5);
layer.add(gyawu_5);

gyawu_6.add(gyawu1_6).add(gyawu2_6);
layer.add(gyawu_6);

gyawu_7.add(gyawu1_7).add(gyawu2_7);
layer.add(gyawu_7);


gyawu_8.add(gyawu1_8).add(gyawu2_8);
layer.add(gyawu_8);


gyawu_9.add(gyawu1_9).add(gyawu2_9);
layer.add(gyawu_9);

gyawu_10.add(gyawu1_10).add(gyawu2_10);
layer.add(gyawu_10);

gyawu_11.add(gyawu1_11).add(gyawu2_11);
layer.add(gyawu_11);

gyawu_12.add(gyawu1_12).add(gyawu2_12);
layer.add(gyawu_12);

gyawu_13.add(gyawu1_13).add(gyawu2_13);
layer.add(gyawu_13);

gyawu_14.add(gyawu1_14).add(gyawu2_14);
layer.add(gyawu_14);

gyawu_15.add(gyawu1_15).add(gyawu2_15);
layer.add(gyawu_15);

layer.add(lines_2);

arc_1.add(arc1_1).add(arc2_1).add(arc3_1);
layer.add(arc_1);

arc_2.add(arc1_2).add(arc2_2).add(arc3_2);
layer.add(arc_2);

arc_3.add(arc1_3).add(arc2_3).add(arc3_3);
layer.add(arc_3);

arc_4.add(arc1_4).add(arc2_4).add(arc3_4);
layer.add(arc_4);

arc_5.add(arc1_5).add(arc2_5).add(arc3_5);
layer.add(arc_5);

arc_6.add(arc1_6).add(arc2_6).add(arc3_6);
layer.add(arc_6);

arc_7.add(arc1_7).add(arc2_7).add(arc3_7);
layer.add(arc_7);

arc_8.add(arc1_8).add(arc2_8).add(arc3_8);
layer.add(arc_8);
//nav bar oval
var nav_oval = new Konva.Ellipse({
    x: width/2,
    y: height/12,
    radiusX: width/2.2,
    radiusY: height/15,
    // stroke: '#a0522d',
    fill: 'white',
    strokeWidth: 8,
    shadowColor: 'red',
    shadowBlur: 10,
  });
layer.add(nav_oval);
var rect_stage1 = new Konva.Rect({
    x: width/14,
    y: height/3,
    width: width/2.5,
    height: height/2,
    fill: 'white',
    shadowColor:'red',
    shadowBlur: 10,
    cornerRadius: 10,
  });
layer.add(rect_stage1);

const rect_stage2 = rect_stage1.clone();
rect_stage2.x(width/1.85);
layer.add(rect_stage2);

// stage3 up
var rect_stage3 = new Konva.Rect({
  x: width/6,
  y: height/6,
  width: width/1.5,
  height: height/7,
  fill: 'white',
  shadowColor:'red',
  shadowBlur: 10,
  cornerRadius: 10,
});
layer.add(rect_stage3);

// stage 3 text
var stage3text = new Konva.Text({
  x: width/5,
  y: width/12,
  text: 'AFRICA IS COLORFUL',
  fontSize: 80,
  fontFamily: 'Courier',
  fill: 'black',
  fontStyle: 'bold',
});
layer.add(stage3text);

var colors = ["gold", "white", "gray", "silver", "red","blue", "green", "yellow", "orange", "purple", "brown", "pink", "turquoise", "gold", "darkgreen", "darkblue", "lightgray", "navy", "maroon", "teal", "olive", "fuchsia", "lime", "aqua", "salmon", "skyblue", "slategray", "lavender", "deeppink", "sienna",'palegreen','gold','blue','red','orange','indianred','ivory','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan', 'lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lime','limegreen','maroon','mediumaquamarine','mediumorchid','mediumpurple'];
    i = -1;
(function f(){
    i = (i + 1) % colors.length;
    oneline_1.fill(colors[i]);
    oneline_6.fill(colors[i+1]);
    container_2.fill(colors[+2]);
    container_3.fill(colors[i+3]);
    container_4.fill(colors[i+4]);
    container_5.fill(colors[i+5]);
    container_7.fill(colors[i+6]);
    container_8.fill(colors[i+7]);
    container_9.fill(colors[i+8]);
    container_10.fill(colors[i+9]);
    container_11.fill(colors[i+10]);
    setTimeout(f, 5000);
})();
var nav_1 = new Konva.Group({
  draggable: true,
});

// navbar
var nav1_1 = new Konva.Circle({
  x: width / 4,
  y: height / 12,
  radius: 20,
  stroke: 'black',
  strokeWidth: 2,
  fill: 'black',
});

// layer.add(nav_cirlce);


var nav2_1 = new Konva.Rect({
  draggable: true,
  x: width / 4.36,
  y: height/ 16.5,
  width: 80,
  height: 27,
  fill: 'white',
  stroke: 'white',
});
// layer.add(nav_rect);

var nav3_1 = new Konva.Text({
  x: width / 4.37,
  y: height / 16.3,
  text: 'Home',
  fontSize: 25,
  fontFamily: 'Calibri',
  fill: 'black',
});
// layer.add(text_1);
nav_1.add(nav1_1).add(nav2_1).add(nav3_1);
layer.add(nav_1);

//nav2
const nav_2 = nav_1.clone();
nav_2.x(width/6);
const nav1_2 = nav1_1.clone();
nav_2.add(nav1_2);
const nav2_2 = nav2_1.clone();
nav_2.add(nav2_2);
const nav3_2 = nav3_1.clone();
nav3_2.text('About');
nav_2.add(nav3_2);
layer.add(nav_2);
//nav3
const nav_3 = nav_2.clone();
nav_3.x(width/3);
const nav1_3 = nav1_2.clone();
nav_3.add(nav1_3);
const nav2_3 = nav2_2.clone();
nav_3.add(nav2_3);
const nav3_3 = nav3_2.clone();
nav3_3.text('Gallery');
nav_3.add(nav3_3);
layer.add(nav_3);
//nav4
const nav_4 = nav_3.clone();
nav_4.x(width/2);
const nav1_4 = nav1_3.clone();
nav_4.add(nav1_4);
const nav2_4 = nav2_3.clone();
nav_4.add(nav2_4);
const nav3_4 = nav3_3.clone();
nav3_4.text('Contact')
nav_4.add(nav3_4);
layer.add(nav_4);

nav_1.on('mouseover', function (evt) {
  nav1_1.fill('yellow')
});

nav_1.on('mouseout', function (evt) {
  nav1_1.fill('black')
});

nav_2.on('mouseover', function (evt) {
  nav1_2.fill('yellow')
});

nav_2.on('mouseout', function (evt) {
  nav1_2.fill('black')
});

nav_3.on('mouseover', function (evt) {
  nav1_3.fill('yellow')
});
nav_3.on('mouseout', function (evt) {
  nav1_3.fill('black')
});

nav_4.on('mouseover', function (evt) {
  nav1_4.fill('yellow')
});
nav_4.on('mouseout', function (evt) {
  nav1_4.fill('black')
});

Konva.Image.fromURL('/static/african_images.jpg', function (darthNode) {
  darthNode.setAttrs({
    x: width/1.83,
    y: height/2.85,
    width: width/2.5-20,
    height: height/2-20,
    // scaleX: 0.5,
    // scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(darthNode);
});

Konva.Image.fromURL('/static/africa2.jpg', function (darthNode1) {
  darthNode1.setAttrs({
    x: width/13,
    y: height/2.85,
    width: width/2.5-20,
    height: height/2-20,
    // scaleX: 0.5,
    // scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(darthNode1);
});
stage.add(layer);