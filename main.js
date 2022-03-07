/*  Show/Hidden menu mobile */
function show_menu_mobile(){
	let header_navbar = document.querySelector(".header-navbar");
	let body = document.getElementById('main-body');
	if(header_navbar.classList.contains('active')){
		header_navbar.classList.remove('active');
		body.classList.remove('blocked');
	}else{
		header_navbar.classList.add('active');
		body.classList.add('blocked');
	}
}
const carrusell = document.querySelector(".carrusell-items");

let maxScrollLeft = carrusell.scrollWidth - carrusell.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusell.scrollLeft = carrusell.scrollLeft + step;
    if (carrusell.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusell.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusell.addEventListener("mouseover", () => {
  stop();
});

carrusell.addEventListener("mouseout", () => {
  start();
});

start();
var timer = 4000;

var i = 0;
var max = $('#c > li').length;
 
	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','25%');
	$("#c > li").eq(i + 2).addClass('active').css('left','50%');
	$("#c > li").eq(i + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');
		$("#c > li").eq(i + 2).css('transition-delay','0.75s');
		$("#c > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);
 