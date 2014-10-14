$( document ).ready(function() {

  $('#fullpage').fullpage({
    anchors:['welcome', 'about','work','contact'],
    menu: '#navigation',
    loopBottom: true,
    css3: true,
  });
  
  $('body').fadeTo(500,1);
});

$(function() {
    workBelt();
    workLoad();
});

function workBelt() {
    $('.thumb-unit').click(function() {
        $('.work-slider').addClass("slided");
        $('.work-container').animateShow(1200);
    });
    
    $('.work-return').click(function() {
        $('.work-slider').removeClass("slided");
        $('.work-container').animateShow(800);
    })
};

$.fn.animateShow = function(duration) {
  return this.animate({opacity: "toggle"}, duration || 1000);
};

function workLoad() {
    $.ajaxSetup({ cache: true });
    
    $('.thumb-unit').click(function() {
        var $this = $(this),
            title = $this.find('strong').text(),
            folder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = '/work/'+ folder +'.html';
            
        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(title);
        
    });
}