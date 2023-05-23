// Getting 'Info' div in js hands
var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'ss',
  width: width ,
  height: height ,

  
});
var layer = new Konva.Layer();
var s_rect = new Konva.Rect({
  x: 110,
  y: 0,
  fill: 'blue',
  width: 120,
  height: 50,
  stroke: 'black',
  strokeWidth: 1,
  draggable: true,
});
//
//var lik = document.getElementById('lik');

var info = document.getElementById('info');

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p){
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
  //
}
addEventListener('click', tellPos, false);


layer.add(s_rect);
// add the layer to the stage
stage.add(layer);




