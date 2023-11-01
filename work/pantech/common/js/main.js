$(document).ready(function(){

	// visual img
	var mySlider = $('.bxslider').bxSlider({
		mode: 'horizontal', // fade
		auto: true,
		autoHover: false,
		controls: false,
		pagerCustom: '#bx-pager'
	});

	$(document).on('click','.bx-pager a',function() {
		mySlider.stopAuto();
		mySlider.startAuto();
	});


	// mousewheel
	var winH = $(window).innerHeight();
	if ( winH > 884) {

		$(".section").on("DOMMouseScroll mousewheel",function(event,delta){
			mySlider.stopAuto();
			var prev = $(this).prev();
			var next = $(this).next();

			event.preventDefault();
			if (delta > 0 && prev.length > 0) {
				var prev = $(this).prev().offset().top;
				$("html,body").stop().animate({"scrollTop":prev},1000,"easeInOutExpo"); /* easeOutBack easeInOutExpo */
			}else if (delta < 0 && next.length > 0) {
				var next = $(this).next().offset().top;
				$("html,body").stop().animate({"scrollTop":next},1000,"easeInOutExpo");
			}
			mySlider.startAuto();
		});
	}

	// gnb color 변경
	$(window).on("scroll", function() {

		var header_offset = 882;

		if ($(this).scrollTop() > header_offset) {
			$(".gnb_main_top").fadeOut(70, function() {
				$('.gnb_wrap').removeClass('gnb_main_top');
				$("#main_logo").attr("src", "img/common/logo.png");
				$(".gnb_wrap").fadeIn(70);
			});
		} else {
			$(".gnb_wrap").fadeIn(70, function() {
				$('.gnb_wrap').addClass('gnb_main_top');
				$("#main_logo").attr("src", "img/main/logo.png");
			});
		}

	});


	// 동영상 레이어
	$('.btn_cf').click(function() {
		mySlider.stopAuto();
		$('.ly_cf').fadeIn();
		$('.overlay').addClass('overlay_on');
	});

	var hideMovie = (function(){
		$('.ly_cf').fadeOut();
		$('.overlay').removeClass('overlay_on');
		$('.iframe_cf')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		mySlider.startAuto();
	});
	$('.overlay, .btn_ly_close').on('click', function() {
		hideMovie();
	});

	// 하단 바로가기
	$('.face').on('mouseover focusin', function() {
		$(this).siblings('.face_on').fadeIn(100);
	});
	$('.face_on').on('mouseleave focusout', function() {
		$(this).fadeOut(100);
	});

	// 상단 product 레이어
	$('.ly_open').click(function() {
		mySlider.stopAuto();
		$('.ly_show').animate({right: '0'}, "slow", "swing");
		$('.btn_prod_close').fadeIn(1200);
	});
	$('.btn_prod_close').click(function() {
		$('.ly_show').animate({right: '-100%'}, "fast", "swing");
		$('.btn_prod_close').fadeOut(200);
		mySlider.startAuto();
	});


	// 메인 레이어 팝업 닫기
	$('.btn_today').on('click', function() {
		//$('#ly_notice_bg').removeClass('overlay_on');
		$('.ly_notice').css('display','none');
	});

});