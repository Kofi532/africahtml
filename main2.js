var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'contain',
  width: width,
  height: height,
});

var layer = new Konva.Layer();

var hexagon = new Konva.RegularPolygon({
  x: 0,
  y: 25,
  sides: 6,
  radius: 20,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});

layer.add(hexagon);
stage.add(layer);

var amplitude = 400;
var period = 5000;
// in ms
var centerX =  650;

var anim = new Konva.Animation(function (frame) {
  hexagon.x(
    amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
  );
}, layer);

anim.start();
