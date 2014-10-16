$( document ).ready(function() {

  $('#fullpage').fullpage({
    anchors:['welcome', 'about','work','contact'],
    menu: '#navigation',
    loopBottom: true,
    css3: true,
    resize: false
  });
  
  $('body').fadeTo(500,1);
});

$(function() {
    workBelt();
    workLoad();
    
    clickBlog();
});

function clickBlog() {
    $('.thumb-unit').click(function() {
        $('.work-slider').addClass("slided");
        $('.work-container').animateShow(1200);
    });
    
    $('.work-return').click(function() {
        $('.work-slider').removeClass("slided");
        $('.work-container').animateShow(800);
    })
}

function workBelt() {
    $('.blog-navitem').click(function(event) {
        var blogHTML = '/blog.html',
            spinner = '<div class="loader">Loading...</div>';
            
        event.preventDefault();
        
        $('#fullpage').animateShow(500);
        setTimeout(function (){
            $('.content').empty();
            $('.content').html(spinner).load(blogHTML);
            $.fn.fullpage.destroy('all');
         }, 500);
    });
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