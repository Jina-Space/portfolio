
$(function(){

    //var
    var wW = $(window).width();
	var wH = $(window).height();
    var scTop = $(window).scrollTop();
    var $wrapVisual = $(".wrap_visual");
    var $wrapVisualTitle = $(".wrap_visual .main_tit");
    var $wrapCont01 = $(".wrap_cont01");
    var $wrapCont02 = $(".wrap_cont02");
    var $wrapCont03 = $(".wrap_cont03");
    var $wrapCont04 = $(".wrap_cont04");
    var $wrapCont05 = $(".wrap_cont05");
    var $wrapCont06 = $(".wrap_cont06");

    //offsetop
    var contSize = {};
    var contSizeCalculate = function(){
		contSize = {
            wVisual : {
				top : $wrapVisual.offset().top,
				height : $wrapVisual.height(),
				topH : function(){
					return this.top + this.height;
				}
			},
			wCont01 : {
				top : $wrapCont01.offset().top,
				height : $wrapCont01.height(),
				topH : function(){
					return this.top + this.height;
				}
			},
            wCont02 : {
				top : $wrapCont02.offset().top,
				height : $wrapCont02.height(),
				topH : function(){
					return this.top + this.height;
				}
			},
            wCont03 : {
				top : $wrapCont03.offset().top,
				height : $wrapCont03.height(),
				topH : function(){
					return this.top + this.height;
				}
			},
            wCont04 : {
				top : $wrapCont04.offset().top,
				height : $wrapCont04.height(),
				topH : function(){
					return this.top + this.height;
				}
			},
            wCont05 : {
				top : $wrapCont05.offset().top,
				height : $wrapCont05.height(),
				topH : function(){
					return this.top + this.height;
				}
			},
            wCont06 : {
				top : $wrapCont06.offset().top,
				height : $wrapCont06.height(),
				topH : function(){
					return this.top + this.height;
				}
			},
		}
	};
	contSizeCalculate();

    //resize
    var syncBrowserHeight = function(){
		wW = $(window).width();
		wH = $(window).height();

		contSizeCalculate();
	};

    //scroll
    var scrollDetect = function(){
		scTop = $(window).scrollTop() + 1;
        var visualHalf = Math.round($wrapVisual.height() * 0.4);
        var cont02Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height() * 0.5);
        var cont02Half2 = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height() * 0.8);
        var cont03Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height()) + Math.round($wrapCont02.height() * 0.5);
        var cont04Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height()) + Math.round($wrapCont02.height()) + Math.round($wrapCont03.height() * 0.4);
        var cont05Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height()) + Math.round($wrapCont02.height()) + Math.round($wrapCont03.height()) + Math.round($wrapCont04.height() * 0.4);
        var cont06Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height()) + Math.round($wrapCont02.height()) + Math.round($wrapCont03.height()) + Math.round($wrapCont04.height()) + Math.round($wrapCont05.height() * 0.5);

        if($(window).width() <= 700) {
            var cont02Half2 = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height() * 0.6);
            var cont03Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height()) + Math.round($wrapCont02.height() * 0.3);
            var cont04Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height()) + Math.round($wrapCont02.height()) + Math.round($wrapCont03.height() * 0.1);
            var cont05Half = Math.round($wrapVisual.height()) + Math.round($wrapCont01.height()) + Math.round($wrapCont02.height()) + Math.round($wrapCont03.height()) + Math.round($wrapCont04.height() * 0.1);
         }

		if(scTop >= visualHalf){
			$wrapVisual.find(".tit02").addClass("show");
		}else{
			$wrapVisual.find(".tit02").removeClass("show");
		}

        if(scTop >= cont02Half){
			$wrapCont02.find(".tit02").addClass("show");
		}else{
			$wrapCont02.find(".tit02").removeClass("show");
		}

        if(scTop >= cont02Half2){
			$wrapCont02.addClass("show");
		}else{
			$wrapCont02.removeClass("show");
		}

        if(scTop >= cont03Half){
			$wrapCont03.addClass("show");
		}else{
			$wrapCont03.removeClass("show");
		}

        if(scTop >= cont04Half){
			$wrapCont04.addClass("show");
		}else{
			$wrapCont04.removeClass("show");
		}

        if(scTop >= cont05Half){
			$wrapCont05.addClass("show");
		}else{
			$wrapCont05.removeClass("show");
		}

        if(scTop >= cont06Half){
			$wrapCont06.find(".tit").addClass("show");
		}else{
			$wrapCont06.find(".tit").removeClass("show");
		}
	};

    setTimeout(function (){
		$wrapVisualTitle.addClass("show");
	}, 500);

    $(window).on("scroll", function(){
		scrollDetect();
	}).trigger("scroll");

    $(window).on("resize", function(){
		syncBrowserHeight();
		scrollDetect();
		//s.refresh();
	}).trigger("resize");

    $('.bg_img').hover(function() {
      $(this).siblings(".imgbox").children(".img_hover").css("opacity","1");
    }, function(){
      $(this).siblings(".imgbox").children(".img_hover").css("opacity","0");
    });
    $('.imgbox').hover(function() {
      $(this).children(".img_hover").css("opacity","1");
    }, function(){
      $(this).children(".img_hover").css("opacity","0");
    });

    //swiper
    var swiper = new Swiper('.cont06_slider .swiper-container', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    swiper.on('slideChange', function () {
      $('.cont06_slider .slider_arrow').fadeOut();
    });

});
