function scrollForward(times) {
    document.getElementById("nav-right").style.display = "none";
    var windowWidth = window.innerWidth;
    for(i=0; i<times; i++) {
        window.scrollBy(windowWidth, 0);
        console.log('Scrolled Left')
    }
    setTimeout(function(){ document.getElementById("nav-right").style.display = "inline-block"; }, 800);
}

function scrollBack(times) {
    document.getElementById("nav-left").style.display = "none";
    var windowWidth = window.innerWidth;
    for(i=0; i<times; i++) {
        window.scrollBy(-windowWidth, 0);
        console.log('Scrolled Right')
    }
    setTimeout(function(){ document.getElementById("nav-left").style.display = "inline-block"; }, 800);
}

function scrollToTop() {
    window.scrollTo(0, 0);
}