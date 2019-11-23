(function () {
    $(".language-picked").click(function () {
        $(".header-language-dropdown").toggleClass("opened");
    });

    $(".popup-car-icon-wrap, .questions-section-info-card-btn").click(function () {
        $(".buy-car-popup-wrap").toggleClass("popup-opened");
    });

    $(".buy-card-btn").click(function () {
        $(".buy-car-modal-wrap").addClass("popup-opened");
    });

    $(".car-anfragen-btn").click(function () {
        $(".car-anfragen-popup").addClass("popup-opened");
    });

    $(".popup-close-btn").click(function () {
        $(".buy-car-popup-wrap, .buy-car-modal-wrap").removeClass("popup-opened");
    });

    $(".mobile-menu-icon-wrap, .mobile-menu-icon-wrap-sticky").click(function () {
        $(".header-menu-wrap-mobile, .header-menu-wrap-mobile-sticky").toggleClass("menu-opened");
    });

    $(document).ready(function() {
        var stickyMenu = $(".header-menu-wrap-mobile, .header-menu-wrap-mobile-sticky");
        var pos = stickyMenu.position();
        $(window).scroll(function() {
            var windowPos = $(window).scrollTop();
            if (windowPos >= pos.top && windowPos <=250) {
                stickyMenu.removeClass("menu-opened");
            }
        });
    });


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 68) {
            $('.small-header-menu-wrap').addClass("sticky-top");
            $(".header-menu-wrap-mobile, .header-menu-wrap-mobile-sticky").addClass("menu-sticky");
        }
        else {
            $('.small-header-menu-wrap').removeClass("sticky-top");
            $(".header-menu-wrap-mobile, .header-menu-wrap-mobile-sticky").removeClass("menu-sticky");
        }
    });


    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('.home-main-header-menu-wrap').addClass("hide-main-header");
        }
        else {
            $('.home-main-header-menu-wrap').removeClass("hide-main-header");
        }
    });


    $('.news-item-info-show-more-btn').click(function() {
        var index = $('.news-item-info-show-more-btn').index(this);
        $('.hide-accordion-wrap').eq(index).addClass("hide");
        $('.accordion-panel').eq(index).addClass("show");

    });

    $('.news-item-info-show-less-btn').click(function() {
        var index = $('.news-item-info-show-less-btn').index(this);
        $('.hide-accordion-wrap').eq(index).removeClass("hide");
        $('.accordion-panel').eq(index).removeClass("show");

    });


    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            nav: false,
            navText: ['<span><</span>',
                      '<span>></span>'],
            dots: true,
            items: 1
        });
        var $this = $('.owl-carousel').owlCarousel({autoWidth: true}).trigger('refresh.owl.carousel');
    });


    $(document).ready(function () {
        $('.buy-car-modal-slider').owlCarousel({
            loop: true,
            nav: false,
            navText: ['<span><</span>',
                '<span>></span>'],
            dots: false,
            items: 1,
            singleItem: true,
        });
        var $this = $('.buy-car-modal-slider').owlCarousell({autoWidth: true}).trigger('refresh.owl.carousel');
    });
})();

