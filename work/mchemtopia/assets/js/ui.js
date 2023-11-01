$(function(){

	// gnb color type
	if ($('main').hasClass('bg-white') == true){
		$('header').addClass('gnb_type1');
		$('.signin, .total_search').hide();
	} else if ($('main').hasClass('bg-transparent') == true) {
		$('header').addClass('gnb_type2');
		$('.signin, .total_search').hide();
	} else if ($('main').hasClass('proleaders') == true){
		$('header').addClass('gnb_type3');
		$('.total_search').attr('href','proleaders_search.html');
	} else {
		$('header').removeClass('gnb_type1').removeClass('gnb_type2').removeClass('gnb_type3');
		$('.signin, .total_search').show();
		$('.total_search').attr('href','forum_search.html');
	}

	// gnb menu toggle
	var status_menu = true;

	$('.gnb_menu').on('click', function(){
		if (status_menu){
			$(this).addClass('active');
			$('.left_menu').show();
			status_menu = false;
			$('.right_menu').hide();
			status_profile = true;
		} else {
			$(this).removeClass('active');
			$('.left_menu').hide();
			status_menu = true;
		}
	});

	// gnb forum sub menu toggle
	var status_forum = true;

	$('.gnb_forum').on('click', function(){
		if (status_forum){
			$('.forum_sub').slideDown('fast');
			status_forum = false;
		} else {
			$('.forum_sub').slideUp('fast');
			status_forum = true;
		}
	});

	// gnb profile photo toggle
	var status_profile = true;

	$('.gnb_profile').on('click', function(){
		if (status_profile){
			$('.right_menu').show();
			status_profile = false;
			$('.gnb_menu').removeClass('active');
			$('.left_menu').hide();
			status_menu = true;
		} else {
			$('.right_menu').hide();
			status_profile = true;
		}
	});

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled(); didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
		return;

		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('header').animate({top: "-46px"}, 'fast').addClass('nav-up');

		} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('header').animate({top: "0"}, 'fast').removeClass('nav-up');
			}
		}
		lastScrollTop = st;
	}


	//common layer
	function noScroll(){
		$('body').addClass('hidden');
	}

	$('.layer_close, .icon_back').on('click', function(){
		$(this).parents('.layer_wrap').fadeOut();
		$('body').removeClass('hidden');
		if ( $('.active_profile').css('display') == 'block' ) {
			$('.active_profile').hide();
		}
	});

	$('.sign_close').on('click', function(){
		$(this).parents('.layer_wrap').fadeOut();
	});

	$('.file_attach').on('click', function(){
		$('.layer_file_information').fadeIn();
		noScroll();
	});

	$('.view_attach > button').on('click', function(){
		$(this).parent('.view_attach').hide();
	});

	$('.txt_report').on('click', function(){
		$('.layer_report').fadeIn();
		noScroll();
	});

	$('.go-write').on('click', function(){
		$('.layer_write').fadeIn();
		noScroll();
	});

	$('.topic_type > a').on('click', function(){
		$('.layer_topic_type').fadeIn();
		noScroll();
	});

	$('.alink-file').on('click', function(){
		$('.layer_file_attach').fadeIn();
		noScroll();
	});

	$('.btn_password').on('click', function(){
		$('.layer_password').fadeIn();
		noScroll();
	});

	$('.change_profile').on('click', function(){
		$('.modal_profile').fadeIn();
		noScroll();
	});

	$('.change_profile').on('touchstart', function(){
		$('.active_profile').show();
	});

	$('.signin').on('click', function(){
		$('.layer_signup').fadeOut();
		$('.layer_sign').fadeIn();
		noScroll();
	});

	$('.alink_signup').on('click', function(){
		$('.layer_sign').fadeOut();
		$('.layer_signup').fadeIn();
	});

	$('.txt_forgot').on('click', function(){
		$('.modal_forgot').fadeIn();
	});

	$('.btn_signup_next').on('click', function(){
		$('.layer_signup').fadeOut();
		$('.layer_interest').fadeIn();
	});

	$('.check_other').on('click', function(){
		if( $(this).is(":checked") == true) {
			$('.modal_other').fadeIn();
		}
	});

	$('.btn_reset_link').on('click', function(){
		$('.modal_forgot').fadeOut();
		$('.modal_valid').fadeIn();
	});

	$('.btn_confirm').on('click', function(){
		$('.modal_valid').fadeOut();
	});


	//accordion
	$(".acc_topic > li > .fa").on("click", function(e){
    //if($(this).parent().has("ul")) {
      //e.preventDefault();
    //}

    if(!$(this).hasClass("fa-angle-up")) {
      // hide any open menus and remove all other classes
      $(".acc_topic li p").slideUp(300);
      $(".acc_topic li .fa").removeClass("fa-angle-up");
			$(".acc_topic li .fa").addClass("fa-angle-down");
      // open our new menu and add the open class
      $(this).next("p").slideDown(300);
      $(this).addClass("fa-angle-up");
			$(this).removeClass("fa-angle-down");
    }
		else if($(this).hasClass("fa-angle-up")) {
      $(this).removeClass("fa-angle-up");
			$(this).addClass("fa-angle-down");
      $(this).next("p").slideUp(300);
    }
  });


	// goto top

	$(window).scroll(function() {
		if ($(this).scrollTop() > 30) {
			$('.btn_top').fadeIn();
		} else {
			$('.btn_top').fadeOut();
		}
	});

	$(".btn_top").click(function() {
		$('html, body').animate({
				scrollTop : 0
		}, 300);
		return false;
	});

	// Forum
	//like toggle button active
  var $likebtn =  $('.like-btn-toggle');
  var likeOnClass = 'fa-heart';
  var likeOffClass = 'fa-heart-o';

  var $bookmarkbtn =  $('.bookmark-btn-toggle');
  var bookmarkOnClass = 'fa-bookmark';
  var bookmarkOffClass = 'fa-bookmark-o';

//like toggle button
$likebtn.click(function(e){
  e.preventDefault();
  var ishasclass = $(this).hasClass('active');

   if(ishasclass){
    $(this).removeClass('active')
    .find('i').removeClass(likeOnClass).addClass(likeOffClass);
	  }else{
	     $(this).addClass('active')
	     .find('i').removeClass(likeOffClass).addClass(likeOnClass);
	  };
});

//bookmark toggle button
$bookmarkbtn.click(function(e){
  e.preventDefault();
  //var ishasclass = $(this).hasClass('active');
   if($(this).hasClass('active')){
    $(this).removeClass('active')
    .find('i').removeClass(bookmarkOnClass).addClass(bookmarkOffClass);
	  }else{
	     $(this).addClass('active')
	     .find('i').removeClass(bookmarkOffClass).addClass(bookmarkOnClass);
	  };
});

	// share Sns, report layer show,hide
	$('.haslayer').on('click', function(e){
		e.preventDefault();
		if ( $(this).next('.layer_share').css('display') == 'block'){
			$('.layer_share').hide();
		} else {
			$('.layer_share').hide();
			$(this).next('.layer_share').show();
		}
	});

	$('.txt_seemore').on('click', function(){
		$(this).prev('.txt_opinion').toggleClass('txt_opinion_all');
		$(this).html($(this).html() == 'See More' ? 'See Less' : 'See More');
	});

	$('.comment-btn-toggle').on('click', function(){
		$(this).parents('.icon_set').next('.list_comment').slideToggle();
		//$("html, body").scrollTop($(document).height());
		$("body,html").animate({scrollTop: $(this).parents('.opinion_set').offset().top + 1}, 400);
	});

	//select box
	$('#report_type').on('change', function(){
		var Val = $('#report_type option:selected').text();
		$(this).prev('label').html(Val);
	});

	$('.select_month').on('change', function(){
		var Val = $('.select_month > select option:selected').text();
		$('.select_month > label').html(Val);
	});

	$('.select_day').on('change', function(){
		var Val = $('.select_day > select option:selected').text();
		$('.select_day > label').html(Val);
	});

	$('.select_year').on('change', function(){
		var Val = $('.select_year > select option:selected').text();
		$('.select_year > label').html(Val);
	});

});

//file upload

/* ===========================================================
 * Bootstrap: fileinput.js v3.1.3
 * http://jasny.github.com/bootstrap/javascript/#fileinput
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileinput = function (element, options) {
    this.$element = $(element)

    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.name = this.$input.attr('name') || options.name

    this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden">').insertBefore(this.$input)
    }

    this.$preview = this.$element.find('.fileinput-preview')
    var height = this.$preview.css('height')
    if (this.$preview.css('display') !== 'inline' && height !== '0px' && height !== 'none') {
      this.$preview.css('line-height', height)
    }

    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }

    this.listen()
  }

  Fileinput.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))

    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
  },

  Fileinput.prototype.change = function(e) {
    var files = e.target.files === undefined ? (e.target && e.target.value ? [{ name: e.target.value.replace(/^.+\\/, '')}] : []) : e.target.files

    e.stopPropagation()

    if (files.length === 0) {
      this.clear()
      return
    }

    this.$hidden.val('')
    this.$hidden.attr('name', '')
    this.$input.attr('name', this.name)

    var file = files[0]

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match(/^image\/(gif|png|jpeg)$/) : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader()
      var preview = this.$preview
      var element = this.$element

      reader.onload = function(re) {
        var $img = $('<img>')
        $img[0].src = re.target.result
        files[0].result = re.target.result

        element.find('.fileinput-filename').text(file.name)

        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))

        preview.html($img)
        element.addClass('fileinput-exists').removeClass('fileinput-new')

        element.trigger('change.bs.fileinput', files)
      }

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name)
      this.$preview.text(file.name)

      this.$element.addClass('fileinput-exists').removeClass('fileinput-new')

      this.$element.trigger('change.bs.fileinput')
    }
  },

  Fileinput.prototype.clear = function(e) {
    if (e) e.preventDefault()

    this.$hidden.val('')
    this.$hidden.attr('name', this.name)
    this.$input.attr('name', '')

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) {
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('')
    this.$element.find('.fileinput-filename').text('')
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')

    if (e !== undefined) {
      this.$input.trigger('change')
      this.$element.trigger('clear.bs.fileinput')
    }
  },

  Fileinput.prototype.reset = function() {
    this.clear()

    this.$hidden.val(this.original.hiddenVal)
    this.$preview.html(this.original.preview)
    this.$element.find('.fileinput-filename').text('')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')

    this.$element.trigger('reset.bs.fileinput')
  },

  Fileinput.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }


  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  var old = $.fn.fileinput

  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('bs.fileinput')
      if (!data) $this.data('bs.fileinput', (data = new Fileinput(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileinput


  // FILEINPUT NO CONFLICT
  // ====================

  $.fn.fileinput.noConflict = function () {
    $.fn.fileinput = old
    return this
  }


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this)
    if ($this.data('bs.fileinput')) return
    $this.fileinput($this.data())

    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      $target.trigger('click.bs.fileinput')
    }
  })

}(window.jQuery);
