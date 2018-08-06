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