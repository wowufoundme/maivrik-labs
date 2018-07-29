// Toggle navigation

var navShown = false

$('#nav-toggle').click(function(){
    $('.nav').toggleClass('show');
    $('.opaque-layer').toggleClass('layer-show');
    $('.bar-2').toggleClass('bar-open');
    $('.bar-3').toggleClass('bar-open');
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
       pagination: false,
       updateURL: false,
       loop: false,
       keyboard: true,
       responsiveFallback: 960
    });
});

$('.opaque-layer').click(function() {
    $('.opaque-layer').toggleClass('layer-show');
    if (navShown == true) {
        $('.nav').toggleClass('show');
        navShown = false
    }
});


$("#home").on({mouseenter:function(){$(".nav").css("background-color","#2ecc71")},mouseleave:function(){$(".nav").css("background-color","#ffffff")}}),$("#about").on({mouseenter:function(){$(".nav").css("background-color","#DC3023")},mouseleave:function(){$(".nav").css("background-color","#ffffff")}}),$("#projects").on({mouseenter:function(){$(".nav").css("background-color","#1abc9c")},mouseleave:function(){$(".nav").css("background-color","#ffffff")}}),$("#facilities").on({mouseenter:function(){$(".nav").css("background-color","#f1c40f")},mouseleave:function(){$(".nav").css("background-color","#ffffff")}}),$("#academics").on({mouseenter:function(){$(".nav").css("background-color","#32ff7e")},mouseleave:function(){$(".nav").css("background-color","#ffffff")}}),$("#team").on({mouseenter:function(){$(".nav").css("background-color","#7158e2")},mouseleave:function(){$(".nav").css("background-color","#ffffff")}}),$("#contact").on({mouseenter:function(){$(".nav").css("background-color","#ffb8b8")},mouseleave:function(){$(".nav").css("background-color","#ffffff")}});
