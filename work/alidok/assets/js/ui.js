$(function(){

  //hand
  $('.hand1').fadeIn('slow').queue(function(){
    $('.hand2').show().queue(function(){
      $('.hand3').fadeIn('slow');
    });
  });

  //section waypoints
  $('.tishow').waypoint(function(){
    $(this).find('.ishow').addClass('img_up');
    $(this).find('.tshow').addClass('txt_show');
  },{offset:'50%'});


  var liSu = 0;
  $('.alidok06').waypoint(function(){
    var id = setInterval(liShow, 200);

    function liShow(){
      if(liSu == 3) {
        clearInterval(id);
      } else {
        $('.benefit_list > li').eq(liSu).find('.img_benefit').addClass('benefit_show');
        liSu++;
      }
    }
  },{offset:'60%'});


  // goto top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
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

});
