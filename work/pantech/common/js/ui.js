// ie9 iframe 아래로 레이어 숨는 현상 관련 브라우저 체킹
function getBrowserType(){

	var _ua = navigator.userAgent;
	var rv = -1;

	//IE 11,10,9,8
	var trident = _ua.match(/Trident\/(\d.\d)/i);
	if( trident != null )
	{
		if( trident[1] == "7.0" ) return rv = "IE" + 11;
		if( trident[1] == "6.0" ) return rv = "IE" + 10;
		if( trident[1] == "5.0" ) return rv = "IE" + 9;
		if( trident[1] == "4.0" ) return rv = "IE" + 8;
	}

	//IE 7...
	if( navigator.appName == 'Microsoft Internet Explorer' ) return rv = "IE" + 7;

	/*
	var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	if(re.exec(_ua) != null) rv = parseFloat(RegExp.$1);
	if( rv == 7 ) return rv = "IE" + 7;
	*/

	/*//other
	var agt = _ua.toLowerCase();
	if (agt.indexOf("chrome") != -1) return 'Chrome';
	if (agt.indexOf("opera") != -1) return 'Opera';
	if (agt.indexOf("staroffice") != -1) return 'Star Office';
	if (agt.indexOf("webtv") != -1) return 'WebTV';
	if (agt.indexOf("beonex") != -1) return 'Beonex';
	if (agt.indexOf("chimera") != -1) return 'Chimera';
	if (agt.indexOf("netpositive") != -1) return 'NetPositive';
	if (agt.indexOf("phoenix") != -1) return 'Phoenix';
	if (agt.indexOf("firefox") != -1) return 'Firefox';
	if (agt.indexOf("safari") != -1) return 'Safari';
	if (agt.indexOf("skipstone") != -1) return 'SkipStone';
	if (agt.indexOf("netscape") != -1) return 'Netscape';
	if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla'; */
}

//alert( getBrowserType() );

$(document).ready(function(){

    // 현재페이지 gnb메뉴 1depth on
	var menu_su = $('.gnb_menu > li').length,
		mypg = $('.tit_cont_wrap').attr('id');

		for (var i=0; i<menu_su; i++) {
			if(mypg == 'tit_cont'+i) {
				$('.gm'+i).addClass('gm_on');
			}
		}


	// 서브메뉴 레이어
	var ctrlMenu = function(f) {
		if(f) {
			$('.gnb_wrap').addClass('gnb_wrap_on');
			$('.g2dep').slideDown(0);
			$('.main_prd').slideDown(0);

		}else {
			$('.gnb_wrap').removeClass('gnb_wrap_on');
			$('.g2dep').slideUp('fast');
			$('.main_prd').slideUp('fast');
		}
	};

		$('.gm').on('mouseenter focusin', function(){
			ctrlMenu(true);
		});

		$('#head_wrap').on('mouseleave', function(){
			ctrlMenu(false);
		});

		$('.gnb_info').on('mouseenter focusin', function(){
			ctrlMenu(false);
		});

		$('.logo').on('mouseenter focusin', function(){
			ctrlMenu(false);
		});

		$('.has_list').click(function(event){
			event.preventDefault();
			$(this).toggleClass('has_list_on');
			$(this).children('span').toggleClass('ico_open ico_close');
			$(this).next('.g3dep').slideToggle('fast', function(){

				if ( getBrowserType() == "IE9") {
					var nowHeight = $('.gnb_wrap').height();
					//console.log(nowHeight);
					$('.ly_movie').animate({height:nowHeight}, 0); // ie9일때 iframe 레이어 height 값 부여
				}
			});
		});


		var win = $(window),
			gnbBar = $('.gnb_wrap'),
			schLy = $('#ly_tsch_wrap'),
			winWidth = $(window).innerWidth();

		$(window).on("scroll", function() {

			if (winWidth < 1197) {
					gnbBar.offset({ top: win.scrollTop() });
					schLy.offset({ top: win.scrollTop()	});

					if( schLy.css('display') == 'block') {
						var nowSet = gnbBar.offset().top;
						schLy.css('top',nowSet);
						gnbBar.css('top',nowSet+80);
					}
			}
		});


		// 통합검색 레이어
		$('.btn_tsch').on('click',function(){

			// 1180이하일 경우
			if (winWidth < 1197) {

				var nowSet = gnbBar.offset().top;

					if( schLy.css('display') == 'none') {
						$(".location_wrap").stop().animate({'margin-top': '80px'}, 80, 'swing');
						$(this).css({'background-position-y': '-60px'});
						schLy.css('display','block');
						schLy.css('top',nowSet);
						gnbBar.css('top',nowSet+80);
					} else if( schLy.css('display') == 'block') {
						$(".location_wrap").stop().animate({'margin-top': '0px'}, 80, 'swing');
						$(this).css({'background-position-y': '0px'});
						schLy.css('display','none');
						schLy.css('top',nowSet);
						gnbBar.css('top',nowSet-80);
					}
			} else {
					if( schLy.css('display') == 'none' ) {
						$(".location_wrap").stop().animate({'margin-top': '80px'}, 80, 'swing');
						$(this).css({'background-position-y': '-60px'});
						schLy.css('display','block');
						gnbBar.stop().animate({'top':'80px'}, 80, 'swing');
					} else if( schLy.css('display') == 'block') {
						$(".location_wrap").stop().animate({'margin-top': '0px'}, 80, 'swing');
						$(this).css({'background-position-y': '0px'});
						schLy.slideUp(80);
						gnbBar.stop().animate({'top':'0px'}, 80, 'swing');
					}
			}

		});



	// 로케이션 레이어
	$('.loca_depth').click(function(){

		var myloca = $(this).next('.loca_sub');

		if( myloca.css('display') == 'none'){
			$('.loca_depth').removeClass('loca_open');
			$('.loca_sub').hide();
			$(this).addClass('loca_open');
			myloca.show();
		}else{
			$('.loca_depth').removeClass('loca_open');
			$('.loca_sub').hide();
			$(this).removeClass('loca_open');
			myloca.hide();
		}
	});

	$('.loca_sub li a').on('mouseover focusin', function(){
		$('.loca_sub li a').removeClass('on');
		$(this).addClass('on');
	});


	//게시판 검색 레이어,셀렉트
	$('.more_view > .btn_sch_list').click(function() {
		$(this).toggleClass('ly_pg_sch_on');
		$('.ly_pg_sch').slideToggle('fast');
	});

	var select = $("select#choose_item");

	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});

	// tab on,off
	$('.tab_menu > li').click(function() {
		$(this).addClass('on');
		$(this).siblings('li').removeClass('on');
	});

	// go to top
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.btn-top').fadeIn(duration);
		} else {
			$('.btn-top').fadeOut(duration);
		}
	});

	$('.btn-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})

});

//검색어 입력 체크
function validate(form) {
	if( form.searchKeyword.value == "" ) {
		alert("검색어를 입력하세요.");
		form.searchKeyword.focus();
		return false;
	}
	return(true);
}
