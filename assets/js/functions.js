$( document ).ready(function() {
  if (selectorExists('#fullpage')) {
    $('#fullpage').fullpage({
      anchors:['welcome', 'about','work','contact'],
      menu: '#navigation',
      loopBottom: true,
      css3: true,
      resize: false
    });
  }

  $('body').fadeTo(500,1);
});

$(function() {
    workLoad();
    
    clickBlog();
    sidebarButtonHandler();
    detectScreenSize();
});

$(window).resize(function() {
    detectScreenSize();
});

function selectorExists(selector) {
  return $(selector).length;
}

function detectScreenSize() {
    if (($(window).width() <= 1023)) {
        var body = $('body');
        if (!body.hasClass('hide-sidebar'))
        {
            body.addClass('hide-sidebar');
        }
    } else {
        var body = $('body');
        if (body.hasClass('hide-sidebar'))
        {
            body.removeClass('hide-sidebar');
        }
    }
}

function clickBlog() {
    $('.thumb-unit').click(function() {
        $('.work-slider').addClass("slided");
        $('.work-container').animateShow(1200);
        $('.thumb-container').animateShow(1200);
    });
    
    $('.work-return').click(function() {
        $('.work-slider').removeClass("slided");
        $('.work-container').animateShow(800);
        $('.thumb-container').animateShow(800);
    })
}

function sidebarButtonHandler() {
    $(".sidebar-button").click(function(e){
        e.preventDefault();
        var body = $('body');
        if (body.hasClass('hide-sidebar'))
        {
            body.removeClass('hide-sidebar');
        }
        else
        {
            body.addClass('hide-sidebar');
        }
    });
}

$.fn.animateShow = function(duration) {
  return this.animate({opacity: "toggle"}, duration || 1000);
};

function workLoad() {
    $.ajaxSetup({ cache: false });
    
    $('.thumb-unit').click(function() {
        var $this = $(this),
            title = $this.find('.thumb-description').text(),
            folder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = '/work/'+ folder +'.html';
            
        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(title);
        
    });
}
