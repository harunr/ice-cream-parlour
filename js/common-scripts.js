
(function($){
	$(function(){
        
        /* Competition Tab Slider */
        if($('.competition-tab-slider-wrap').length){
            $('.competition-tab-slider-wrap').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false,
                        speed: 1500,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false,
                        speed: 1500,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        speed: 1500,
                    }
                },
            ]
        });
        }

        $(".competition-tab-triger ul > li").removeClass("competition-tab-active");
        $(".competition-tab-triger ul > li").eq(0).addClass("competition-tab-active");
        $(".competition-tab-item-wrap > div.competition-tab-item").eq(0).addClass("competition-tab-active");
        $(".competition-tab-triger ul li").each(function (i) {
            $(this).click(function () {
                if ($(this).hasClass("item-active")) return false;
                else {
                    $(".competition-tab-triger ul li").removeClass("competition-tab-active");
                    $(this).addClass("competition-tab-active");
                    $(".competition-tab-item-wrap .competition-tab-item").removeClass("competition-tab-active");
                    $(".competition-tab-item-wrap .competition-tab-item").eq(i).addClass("competition-tab-active");
                }
            });

        });
        /* Competition Tab Slider */
        
        /* Testimonial Sliders */
        if($('.testimonial-sliders').length){
            $('.testimonial-sliders').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 5000,
                loop: false,
                arrows:false,
                dots: true,
                infinite:true,
                fade: true,
                autoplay: true,
            });
        }
       
          // Phone nav click function
        $('#burger').click(function(){
            $('#nav').slideToggle()
        
        }) 






        
	});// End ready function.
  
})(jQuery);

