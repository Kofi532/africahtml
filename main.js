var width = window.innerWidth;
var height = window.innerHeight;

// var width = 1000;
// var height = 1000;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});

var layer = new Konva.Layer();



var nav1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(0, 100);
      context.quadraticCurveTo(width, 100, width, 100);
      context.quadraticCurveTo(width-10, 105, width-10, 110);
      context.lineTo(10,110);
      context.quadraticCurveTo(20, 110,0, 100);
     context.fillStrokeShape(shape);
    },
    fill: '#905700',
    stroke: 'black',
    strokeWidth: 0,
    shadowOpacity: 0.5,
    shadowBlur: 20,
    shadowOffset: { x: 10, y: 10 },
  });

  var nav2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(10, 98);
      context.lineTo(width-10,98);
     context.fillStrokeShape(shape);
    },
    stroke: 'black',
    strokeWidth: 3,

  });


  var pot1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(55, 30);
      context.quadraticCurveTo(152.5, 160,250, 30);
     context.fillStrokeShape(shape);
    },
    stroke: 'black',
    strokeWidth: 3,
    fill: '#CCAA75',

  });

  var oval1 = new Konva.Ellipse({
    x: 152.5,
    y: 30,
    radiusX: 97,
    radiusY: 20,
    fill: '#9D9D9D',
    stroke: 'black',
    strokeWidth: 3,
    // shadowOpacity: 0.5,
    // shadowBlur: 20,
    // shadowOffset: { x: -10, y: 10 },

  });

var pots1 = new Konva.Group({
  });

const pots2 = pots1.clone();
pots2.x(stage.width()/2 - oval1.x());

const pot2 = pot1.clone();

const oval2 = oval1.clone();

const pots3 = pots2.clone();
pots3.x(stage.width()-oval1.x()*2);

const pot3 = pot2.clone();

const oval3 = oval2.clone();


var grasses = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(stage.width/3, stage.height/5);
      context.quadraticCurveTo(stage.width/3, stage.height/5-35,stage.width/3-10, stage.height/5-30);

     context.fillStrokeShape(shape);
    },
    stroke: 'black',
    strokeWidth: 3,

  });

layer.add(grasses);

pots1.add(pot1).add(oval1);
layer.add(pots1);

pots2.add(pot2).add(oval2);
layer.add(pots2);

pots3.add(pot3).add(oval3);
layer.add(pots3);

layer.add(nav1).add(nav2);

// add the layer to the stage
stage.add(layer);
