function expandMenu() {
    var burger = document.getElementsByClassName('menu-burger');
    var nav = document.getElementsByTagName('nav')
    var cover = document.getElementById('cover');
    cover.classList.contains("is-expanded") ? cover.classList.remove("is-expanded") : cover.classList.add("is-expanded");
    burger[0].classList.contains("is-expanded") ? burger[0].classList.remove("is-expanded") : burger[0].classList.add("is-expanded");
    nav[0].classList.contains("is-expanded") ? nav[0].classList.remove("is-expanded") : nav[0].classList.add("is-expanded");

}

function closeMenu() {
    var burger = document.getElementsByClassName('menu-burger');
    var nav = document.getElementsByTagName('nav')
    var cover = document.getElementById('cover');
    if (burger[0].classList.contains("is-expanded")){
        burger[0].classList.remove("is-expanded")
    }
    if (nav[0].classList.contains("is-expanded")){
        nav[0].classList.remove("is-expanded")
    }
    if (cover.classList.contains("is-expanded")){
        cover.classList.remove("is-expanded")
    }

}

function easeIntoView() {
    var els = document.getElementsByClassName("target");
    var elsArray = Array.prototype.slice.call(els);
    elsArray.forEach(function(elem){
        if(visibilityCheck(elem)){
            if (!elem.classList.contains("is-visable")) {
                elem.classList.add("is-visable");
            }
        }
    })
}

function count() {
    var els = document.getElementsByClassName("stats-counter");
    var elsArray = Array.prototype.slice.call(els);
    elsArray.forEach(function(elem){
        if(visibilityCheck(elem) && elem.innerHTML == "0"){
            var num = elem.getAttribute('data-count');
            var counter = 0;
            var interval = parseInt(5000/ num);
            var id = setInterval(function(){
                elem.innerHTML = "" + counter
                counter ++;
                increment = (num - (num % 10)) / 10;
                if (counter == num){
                    elem.innerHTML = "" + counter
                    clearInterval(id);
                }
            }, interval)
        }
    });
}

function visibilityCheck(elem){
    var windowHeight = window.innerHeight;
    var currentPos = self.pageYOffset;
        if(windowHeight + currentPos > elem.offsetTop - 25){
            return true;
        }
        else{
            return false
        }
}

function carouselScroll() {
	var testimonials = document.getElementsByClassName('testimonial');
	var dots = document.getElementsByClassName('testimonial-dot');
	for (var i = 0; i < 3; i++) {
		var nextIndex = (i + 1) % 3;
		if (testimonials[i].classList.contains('is-active')) {
			testimonials[i].classList.remove('is-active');
            testimonials[nextIndex].classList.add('is-active');
			dots[i].classList.remove('is-active');
			dots[nextIndex].classList.add('is-active');
			break;
		}
	}
}
