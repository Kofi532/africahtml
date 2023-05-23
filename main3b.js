// Getting 'Info' div in js hands
var lik = document.getElementById('lik');
var info = document.getElementById('info');
var pic = document.getElementById("pic").src = "{% static '/jax.png' %}";
pic.offsetX(0);
pic.offsetY(0);






function myFunction() {
    lik.innerHTML = 'X: '+pic.offsetLeft+ '<br>Y: '+pic.offsetTop;
  }