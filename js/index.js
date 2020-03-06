var velY, velX, posY = 0, posX = 0, x = 0;

function myMove() {
  var check = document.getElementById('check');
  var short = document.getElementById('short');
	var ang = document.getElementById('ang').value; 
	var a = document.getElementById('acel').value;
	var vel = document.getElementById('vel').value;
	var elem = document.getElementsByClassName('animate')[0];
	var id = setInterval(frame, 10);

  x = 0;
  document.documentElement.scrollTop = 0;

	a /= 200;
	velY = vel * Math.sin(ang * Math.PI / 180);
	velX = vel * Math.cos(ang * Math.PI / 180);


	function frame() {
		x++;
		posY = x * (velY - a * x);
		posX = velX * x;
		elem.style.bottom = posY + 'px';
		elem.style.left = posX + 'px';
    short.scrollLeft = check.checked ? posX : 0;

		if (posY <= 0) {
			clearInterval(id);
    }
	}
}

function reload() {
	window.location.reload();
}

var bola = document.getElementById('bola');
var short = document.getElementById('short');
bola.onclick = function() {
  short.scrollLeft = posX;
};