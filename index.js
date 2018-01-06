function expandMenu() {
    var burger = document.getElementsByClassName('menu-burger');
    var nav = document.getElementsByTagName('nav')
    burger[0].classList.contains("is-expanded") ? burger[0].classList.remove("is-expanded") : burger[0].classList.add("is-expanded");
    nav[0].classList.contains("is-expanded") ? nav[0].classList.remove("is-expanded") : nav[0].classList.add("is-expanded");

}

function closeMenu() {
    var burger = document.getElementsByClassName('menu-burger');
    var nav = document.getElementsByTagName('nav')
    if (burger[0].classList.contains("is-expanded")){
        burger[0].classList.remove("is-expanded")
    }
    if (nav[0].classList.contains("is-expanded")){
        nav[0].classList.remove("is-expanded")
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
        if(visibilityCheck(elem)){
            var num = 1000;
            var counter = 0;
            var interval = num / 3000;
            var id = setInterval(function(){
                elem.innerHTML = "" + counter
                counter++;
                if (counter == num){
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
