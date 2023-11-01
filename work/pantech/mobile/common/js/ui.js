$(document).ready(function($){

    // 현재페이지 menu on
	var mypg = $('.content').attr('id');
		for (var i=0; i<17; i++) {
			if(mypg == 'p'+i) {
				$('#menu'+i).addClass('menu_on');
				$('#menu'+i).parents('.m2dep').css('display','block');
				$('#menu'+i).parents('.m2dep').prev('a').addClass('m2dep_open');
			}
		}

	var $lateral_menu_trigger = $('#nav_open'),
		$content_wrapper = $('.content'),
		$navigation = $('header');
		$main_navi = $('.main_menu');

	//open nav_menu
	$lateral_menu_trigger.on('click', function(){		
		event.preventDefault();
		if ( $(window).scrollTop() == 0) {
			$('.notice').toggle();
		}
		
		$lateral_menu_trigger.toggleClass('is_clicked');
		$navigation.toggleClass('nav_wrap_open');
		$main_navi.toggleClass('nav_wrap_open');
		$content_wrapper.toggleClass('nav_wrap_open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			//$('body').toggleClass('hflow');
		});
		$('#nav_wrap').toggleClass('nav_wrap_open');

		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			//$('body').toggleClass('hflow');
		}
	});

	//close nav_menu
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#nav_open, #nav_open span') ) {
			$lateral_menu_trigger.removeClass('is_clicked');
			$navigation.removeClass('nav_wrap_open');
			$main_navi.removeClass('nav_wrap_open');
			$content_wrapper.removeClass('nav_wrap_open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('hflow');
			});
			$('#nav_wrap').removeClass('nav_wrap_open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('hflow');
			}

		}
	});

	$('.nav_close').on('click', function(event){
		if( !$(event.target).is('#nav_open, #nav_open span') ) {
			$lateral_menu_trigger.removeClass('is_clicked');
			$navigation.removeClass('nav_wrap_open');
			$main_navi.removeClass('nav_wrap_open');
			$content_wrapper.removeClass('nav_wrap_open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('hflow');
			});
			$('#nav_wrap').removeClass('nav_wrap_open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('hflow');
			}

		}
	});



	// nav_menu layer sub menu
	$('.m1dep').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('m2dep_open').next('.m2dep').slideToggle(200).end().parent('.m1dep').siblings('.m1dep').children('a').removeClass('m2dep_open').next('.m2dep').slideUp(200);
	});


   var offset = 50;
   var top_offset = 100;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
			$('.main_menu').addClass('msticky');
			$('header').addClass('header_sticky');
			$('.nav_icon').removeClass('nav_sticky');
			$('#nav_open').addClass('nav_open_sticky');
        } else {
			$('.main_menu').removeClass('msticky');
			$('.nav_icon').addClass('nav_sticky');
			$('header').removeClass('header_sticky');
			$('#nav_open').removeClass('nav_open_sticky');
        }

		if ($(this).scrollTop() > top_offset) {
			$('.btn-top').fadeIn(500);
		} else {
			$('.btn-top').fadeOut(500);
		}
    });


	$('#btn-top-sub').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});

	// sub page sub menu
	$('main > h1').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu_open').parent('h1').next('.submenu').slideToggle(200);
	});

	// sub page tab menu
	$('.tab_menu > li > a').on('click', function() {
		$('.tab_menu > li').removeClass('on');
		$(this).parent('li').addClass('on');
		$('.tab_menu > li').removeClass('next');
		$(this).parent('li').next('li').addClass('next');
	});

	// sub page tab menu 2tab content view
	$('.tab_2tab > li > a').on('click', function() {
		 $('.tab_cont').removeClass('visible');
		 $(this.rel).addClass('visible');
	});

});