var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var amp = document.getElementById("params").amp;
var freq = document.getElementById("params").freq;
var animate = document.getElementById("animate").animate;
var beta = 0;

amp.value = 100;
freq.value = 5;
animate.checked = true;
setInterval(function(){moveWave()},100);

ctx.fillStyle='rgb(00,00,128)';

function moveWave()
{
	var A, f, twopi = 2*Math.PI;
	
	A = parseInt(amp.value, 10);
	f = parseInt(freq.value, 10);
	beta = ((beta+12)%800);
	
	if (animate.checked)
	{
		ctx.clearRect(0,0,800,300);
		for (var t = 0; t < 800; t++)
		{
			var waveValue = Math.sin(twopi*f*(t-beta)/800);
			ctx.fillRect(t, A*waveValue + 150, 2, 2);
		}
		ctx.stroke();
	}
}
