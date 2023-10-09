$(function(){

	/* nav event */
	$(function(){
		var menu1=$('#sideNav li');
		var menu2=$('.nav li');
		var menu3=$('.menu_list li');
		var contents=$('#contents>div');

		menu1.click(function(e){
			e.preventDefault();

			var tg=$(this);
			var i=tg.index();
			var section=contents.eq(i);
			var tt=section.offset().top-80;

			$('html, body').stop().animate({scrollTop:tt}, 500);
		});

		menu2.click(function(e){
			e.preventDefault();

			var tg=$(this);
			var i=tg.index();
			var section=contents.eq(i);
			var tt=section.offset().top-80;

			$('html, body').stop().animate({scrollTop:tt}, 500);
		});

		menu3.click(function(e){
			e.preventDefault();

			var tg=$(this);
			var i=tg.index();
			var section=contents.eq(i);
			var tt=section.offset().top-80;

			$('html, body').stop().animate({scrollTop:tt}, 500);
		});

		$(window).scroll(function(){
			var sct=$(window).scrollTop();

			contents.each(function(){
				var tg=$(this);
				var i=tg.index();

				if(tg.offset().top-160<=sct){
					menu1.removeClass('on');
					menu1.eq(i).addClass('on');

					menu2.removeClass('on2');
					menu2.eq(i).addClass('on2');

					menu3.removeClass('on');
					menu3.eq(i).addClass('on');
				}
			});

			if (sct > 0) {
				$('#header').css('padding','0').css('background','#355057');
				$('#header a').css('color','#c3cbcd');

				menu2.removeClass('on1');
				$('.logo img').css('width','55px').css('height','28px').css('padding','26px 0').attr('src','images/logo2.png');
				$('.contact i').css('color','#c3cbcd');

				$('.nav li').hover(function(){
					$(this).find('a').css('color','#ffffff');
				},function(){
					$(this).find('a').css('color','#c3cbcd');
				});

				$('.contact i').hover(function(){
					$(this).css('color','#ffffff');
				},function(){
					$(this).css('color','#c3cbcd');
				});

			} else if (sct <= 0) {
				$('#header').css('padding','40px 0').css('background','#ffffff');
				$('#header a').css('color','#8b8c93');

				menu2.eq(0).removeClass('on2');
				menu2.eq(0).addClass('on1');
				$('.logo img').css('width','63px').css('height','32px').css('padding','24px 0').attr('src','images/logo.png');
				$('.contact i').css('color','#8b8c93');

				$('.nav li').hover(function(){
					$(this).find('a').css('color','#222222');
				},function(){
					$(this).find('a').css('color','#8b8c93');
				});

				$('.contact i').hover(function(){
					$(this).css('color','#222222');
				},function(){
					$(this).css('color','#8b8c93');
				});
			}
		});

		$('.logo').click(function(e){
			e.preventDefault();
			var tt=$('.cont01').offset().top;
			$('html, body').stop().animate({scrollTop:tt},{duration: 500});
		});

		$(".menu_open").on("click",function(){
       $(".menu").stop().animate({ right:0 },300);
    });
		$(".menu_close").on("click",function(){
			$(".menu").stop().animate({ right:-220 },300);
    });

	});

	/* circle progress bar */
	$(function(){
		var circles = $('.circle');
		circles.stop().circleProgress({
			startAngle: -1.55,
			value: 0,
			size: 90,
			fill : {
				color: '#8c8c94'
			},
			animation : {
				duration: 2500
			}
		});
		circles.appear({ force_process: true });
		circles.on('appear', function() {
			var circle = $(this);
			if (!circle.data('inited')) {
				$('#circle-a').stop().circleProgress({
					value : 0.85
				});
				$('#circle-b').stop().circleProgress({
					value : 0.80
				});
				$('#circle-c').stop().circleProgress({
					value : 0.95
				});
				$('#circle-d').stop().circleProgress({
					value : 0.95
				});
				$('#circle-e').stop().circleProgress({
					value : 0.90
				});
				circle.data('inited', true);
			}
		});
	});

	/* swiper */
	var swiper=0;
  $(window).on("load",function(){
        swiper = new Swiper('.swiper-container',{
		slidesPerView: 3.5,
		spaceBetween: 30,
		freeMode: false,
    });
  });

	/* footer totop */
	var footerTotop=$('.footerR .totop');
	footerTotop.click(function(e){
		e.preventDefault();
		var tt=$('.cont01').offset().top-80;
		$('html, body').stop().animate({scrollTop:tt},{duration: 500});
	});

	/* thumb hover scroll */
	$('.frame_safari').hover(function(){
		var containerH = $(this).find('.frame_inner').innerHeight();
		var img = $(this).find('.bgImg');
		var imgH = img.innerHeight();

		img.css('top',containerH-imgH);
		},function(){
			var img = $(this).find('.bgImg');
			img.css('top', '30px');
	});

	$('.link').hover(function(){
		var containerH = $(this).find('.imgContainer').innerHeight();
		var img = $(this).find('.imgContainer img');
		var imgH = img.innerHeight();

		img.css('top',containerH-imgH);
		},function(){
			var img = $(this).find('.imgContainer img');

			img.css('top',0);
	});

});
