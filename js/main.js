(function ($) {
    "use strict";


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    
})(jQuery);

function copyToClipboard(button) {
    navigator.clipboard.writeText('IT84W0306932550100000009841').then(() => {
        button.textContent = 'Copiato';
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}