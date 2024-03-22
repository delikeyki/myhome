$( function() {

    // persist menu display
  $(window).on('resize load',function(){

    // GNB navigation
    var dWidth = $(document).width();

    if (dWidth > 580) {
      //console.log('large');
      $('.gnb').show();
      $('.gnb li a').on('click touchstart', function(e){
        //e.preventDefault();
        if (!$(e.target).is('.hasit')){
          $('.gnb').show();
          $('.sub_gnb').hide();
          $('.gnb li:first').removeClass('has_sub');
          $('.gnb > ul > li:nth-child(2) > a').removeClass('no_border');
        }
      });
    } else if (dWidth < 580) {
      $('.gnb').hide();
      $('.btn-gnb').removeClass('active');
      //console.log('small');
      $('.gnb li a').on('click touchstart', function(e){
        //e.preventDefault();
        if (!$(e.target).is('.hasit')){
          $('.gnb').hide();
          $('.btn-gnb').removeClass('active');
        }
      });
    }
  });

  $('.hasit').on('click touchstart', function(e){
    e.preventDefault();
    //console.log('i have sub');
    $('.sub_gnb').toggle();
    $('.gnb > ul > li:first').toggleClass('has_sub');
    $('.gnb > ul > li:nth-child(2) > a').toggleClass('no_border');
  });

  /*
  $('.hasit').on('mouseover', function(e){
    e.preventDefault();
    $('.sub_gnb').show();
    $('.gnb li:first').addClass('has_sub');
    $('.gnb li:nth-child(2) > a').addClass('no_border');
  });*/


  // hambuger
  var burger = $('.btn-gnb');

  burger.each(function(){
    var $this = $(this);

    $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.gnb').slideToggle(400);
    })
  });


  $('body').click(function(e){
    if(!$(e.target).is('.hasit')) {
      //console.log('false');
      $('.sub_gnb').hide();
      $('.gnb li:first').removeClass('has_sub');
      $('.gnb > ul > li:nth-child(2) > a').removeClass('no_border');
    }
    if(!$(e.target).is('#btn_cvt')) {
      //console.log('false');
      $('.input_value').removeClass('show_result');
    } else if($(e.target).is('#btn_cvt')) {
      //console.log('true');
      $('.input_value').addClass('show_result');
      $('.area_result').slideDown('fast');
    }
    if(!$(e.target).is('.icon_info')){
      $('.layer_tip').hide();
    }
  });

  // goto top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.go_top').fadeIn();
    } else {
      $('.go_top').fadeOut();
    }
  });

  $(".go_top").click(function() {
      $('html, body').animate({
          scrollTop : 0
      }, 400);
      return false;
  });

  //infomation icon toggle
  $(".icon_info").each(function(){
    $(this).on('click', function(){
      $(this).children('.layer_tip').toggle();
    })
  })

});
