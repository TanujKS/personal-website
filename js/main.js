(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    } else {
        // Fallback if WOW.js fails to load
        console.warn('WOW.js not loaded, trying alternative CDN');
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/wowjs@1.3.0/dist/wow.min.js';
        script.onload = function() {
            if (typeof WOW !== 'undefined') {
                new WOW().init();
            }
        };
        document.head.appendChild(script);
    }
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            const targetElement = document.querySelector(this.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    function initTyped() {
        if ($('.hero .hero-text h2').length == 1 && typeof Typed !== 'undefined') {
            var typed_strings = $('.hero .hero-text .typed-text').text();
            var typed = new Typed('.hero .hero-text h2', {
                strings: typed_strings.split(', '),
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true
            });
        } else if ($('.hero .hero-text h2').length == 1) {
            // Fallback if Typed.js fails to load
            console.warn('Typed.js not loaded, using fallback text');
            var fallbackText = $('.hero .hero-text .typed-text').text().split(', ')[0];
            $('.hero .hero-text h2').text(fallbackText);
        }
    }
    
    // Try to initialize Typed immediately, or wait for it to load
    if (typeof Typed !== 'undefined') {
        initTyped();
    } else {
        // Wait a bit for the script to load
        setTimeout(function() {
            if (typeof Typed !== 'undefined') {
                initTyped();
            } else {
                console.warn('Typed.js still not available after timeout');
                initTyped(); // This will trigger the fallback
            }
        }, 1000);
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

