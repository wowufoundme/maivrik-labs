// Toggle navigation

var navShown = false

$('#nav-toggle').click(function(){
    $('.nav').toggleClass('show');
    $('.opaque-layer').toggleClass('layer-show');
    if(navShown == false) {
        navShown = true
    }
    else {
        navShown = false
    }
});

$(document).ready(function() {
    $('.main').onepage_scroll({
       sectionContainer: "section", 
       easing: "ease",
       animationTime: 1000,
       pagination: true,
       updateURL: false,
       loop: false,
       keyboard: true,
       responsiveFallback: 720
    });
});

$('.opaque-layer').click(function() {
    $('.opaque-layer').toggleClass('layer-show');
    if (navShown == true) {
        $('.nav').toggleClass('show');
        navShown = false
    }
});