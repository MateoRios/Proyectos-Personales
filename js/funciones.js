// variables
var nubes = document.getElementById("imgNubes");
var planeta = document.getElementById("planeta");

// funcion para restab lecer el css del menu
function init(){

	for(var i=0; i<document.getElementsByTagName('li').length; i++){

		document.getElementsByTagName('li')[i].style.color = 'silver';
		document.getElementsByTagName('li')[i].style.fontSize = '1.4em';
	}

	document.getElementsByClassName('anillo')[0].style.visibility = 'hidden';
	document.getElementsByClassName('ovni')[0].style.bottom = '-100px';
	document.getElementsByClassName('ovni')[0].style.visibility = 'hidden';
	document.getElementsByClassName('ovni')[0].style.webkitAnimationPlayState = "initial";
	document.getElementsByClassName('ovni')[0].style.webkitAnimationPlayState = "paused";
}

// planeta Mercurio
function mercurio(){

	nubes.style.visibility = 'hidden';
	planeta.style.background = 'url("img/mercurio.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByTagName('li')[0].style.color = 'white';
	document.getElementsByTagName('li')[0].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'Mercurio';
	document.getElementsByTagName('p')[0].innerHTML = 'Es el planeta más cercano al Sol y el segundo más pequeño del Sistema Solar. Mercurio es menor que la Tierra, pero más grande que la Luna. Si nos situásemos sobre Mercurio, el Sol nos parecería dos veces y media más grande. El cielo, sin embargo, lo veríamos siempre negro, porque no tiene atmósfera que pueda dispersar la luz.';
}

// planeta Venus
function venus(){

	nubes.style.visibility = 'hidden';
	planeta.style.background = 'url("img/venus.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByTagName('li')[1].style.color = 'white';
	document.getElementsByTagName('li')[1].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'Venus';
	document.getElementsByTagName('p')[0].innerHTML = 'Es el segundo planeta del Sistema Solar y el más semejante a La Tierra por su tamaño, masa, densidad y volumen. Los dos se formaron en la misma época, a partir de la misma nebulosa. Sin embargo, es diferente de la Tierra. No tiene océanos y su densa atmósfera provoca un efecto invernadero que eleva la temperatura hasta los 480 ºC. Es abrasador.';
}

// planeta Tierra
function tierra(){

	nubes.style.visibility = 'visible';
	planeta.style.background = 'url("img/mapa.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByTagName('li')[2].style.color = 'white';
	document.getElementsByTagName('li')[2].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'La Tierra';
	document.getElementsByTagName('p')[0].innerHTML = 'Es nuestro planeta y el único habitado. Está en la ecosfera, un espacio que rodea al Sol y que tiene las condiciones necesarias para que exista vida. La Tierra es el mayor de los planetas rocosos. Eso hace que pueda retener una capa de gases, la atmósfera, que dispersa la luz y absorbe calor. De día evita que la Tierra se caliente demasiado y, de noche, que se enfríe.';
}

// planeta Marte
function marte(){

	nubes.style.visibility = 'hidden';
	planeta.style.background = 'url("img/marte.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByClassName('ovni')[0].style.visibility = 'visible';
	document.getElementsByClassName('ovni')[0].style.webkitAnimationPlayState = "initial";
	document.getElementsByTagName('li')[3].style.color = 'white';
	document.getElementsByTagName('li')[3].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'Marte';
	document.getElementsByTagName('p')[0].innerHTML = 'Es el cuarto planeta del Sistema Solar. Conocido como el planeta rojo por sus tonos rosados, los romanos lo identificaban con la sangre y le pusieron el nombre de su dios de la guerra. El planeta Marte tiene una atmósfera muy fina, formada principalmente por dióxido de carbono, que se congela alternativamente en cada uno de los polos. Contiene sólo un 0,03% de agua, mil veces menos que la Tierra.';
}

// planeta Jupiter
function jupiter(){

	nubes.style.visibility = 'hidden';
	planeta.style.background = 'url("img/jupiter.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByTagName('li')[4].style.color = 'white';
	document.getElementsByTagName('li')[4].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'Jupiter';
	document.getElementsByTagName('p')[0].innerHTML = 'Es el planeta más grande del Sistema Solar, tiene más materia que todos los otros planetas juntos y su volumen es mil veces el de la Tierra. Júpiter tiene un tenue sistema de anillos, invisible desde la Tierra. También tiene muchos satélites. Cuatro de ellos fueron descubiertos por Galileo en 1610. Era la primera vez que alguien observaba el cielo con un telescopio.';
}

// planeta Saturno
function saturno(){

	nubes.style.visibility = 'hidden';
	planeta.style.background = 'url("img/saturno.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByClassName('anillo')[0].style.visibility = 'visible';
	document.getElementsByTagName('li')[5].style.color = 'white';
	document.getElementsByTagName('li')[5].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'Saturno';
	document.getElementsByTagName('p')[0].innerHTML = 'Saturno es el segundo planeta más grande del Sistema Solar y el único con anillos visibles desde la Tierra. Se ve claramente achatado por los polos a causa de la rápida rotación. La atmósfera es de hidrógeno, con un poco de helio y metano. Es el único planeta que tiene una densidad menor que el agua. Si encontrásemos un océano suficientemente grande, Saturno flotaría.';
}

// planeta Urano
function urano(){

	nubes.style.visibility = 'hidden';
	planeta.style.background = 'url("img/urano.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByTagName('li')[6].style.color = 'white';
	document.getElementsByTagName('li')[6].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'Urano';
	document.getElementsByTagName('p')[0].innerHTML = 'Es el septimo planeta desde el Sol y el tercero más grande del Sistema Solar. Urano es también el primero que se descubrió gracias al telescopio, en 1781. La atmósfera de Urano está formada por hidrógeno, metano y otros hidrocarburos. El metano absorbe la luz roja, por eso refleja los tonos azules y verdes.';
}

// planeta Neptuno
function neptuno(){

	nubes.style.visibility = 'hidden';
	planeta.style.background = 'url("img/neptuno.png")';
	planeta.style.backgroundSize = 'cover';
	init();
	document.getElementsByTagName('li')[7].style.color = 'white';
	document.getElementsByTagName('li')[7].style.fontSize = '1.8em';
	document.getElementsByTagName('h2')[0].innerHTML = 'Neptuno';
	document.getElementsByTagName('p')[0].innerHTML = 'Es el planeta más exterior de los gigantes gaseosos y el primero que fue descubierto, en septiembre de 1846, gracias a predicciones matemáticas. El interior de Neptuno es roca fundida con agua, metano y amoníaco líquidos. El exterior es hidrógeno, helio, vapor de agua y metano, que le da el color azul.';
}