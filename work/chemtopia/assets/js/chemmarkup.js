$(function(){


  setupQuestionField();
  dscWriteTextarea();
  searchTab();
  selectBox();
  selectNew();
  selectChooseOnly();
  writeNoticeHide();
  writeMyfileHide();
  fileType();
  //btnEdit();
  editableField();
  //techResSearch();
  radioToggleCheck();
  interestareaModal();

// btn top
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.top-link-block').fadeIn();
  } else {
    $('.top-link-block').fadeOut();
  }
});

// default datepicker
$('.datepicker-box input').datepicker({
  format: 'yyyy/mm/dd',
  autoclose: true
});
// range datepicker
$('.input-daterange').datepicker({
  format: 'yyyy/mm/dd',
   autoclose: true
});


// yymm datepicker
$('.datepicker-box-month input').datepicker({
  format: 'yyyy/mm',
  startView: "year",
  minViewMode: "months",
  autoclose: true
});
// yymm range datepicker
$('.input-daterange-month input').datepicker({
  format: 'yyyy/mm',
  startView: "year",
  minViewMode: "months",
  autoclose: true
});

  //by mjy
  //sign in
  //  $("#signInModal").modal()
    $('#signInModal').on('shown.bs.modal', function () {
    //  $('#myInput').focus()
  });

  $('.openModalChangePwd').click(function(e){
     e.preventDefault();
    //  $('#signInModal').modal('hide').on('hidden.bs.modal', function (e) {
    //         $('#changePwdModal').modal('show');
    //         $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
    //   });

      $('#signInModal').on('hidden.bs.modal', function (e) {
             $('#changePwdModal').modal('show');
             $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
       }).modal('hide');


  });

  /*
  $('.sentPwdModal').click(function(e){
     e.preventDefault();
    //  $('#changePwdModal').modal('hide').on('hidden.bs.modal', function (e) {
    //         $('#sentPwdModal').modal('show');
    //         $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
    //   });
      $('#changePwdModal').on('hidden.bs.modal', function (e) {
             $('#sentPwdModal').modal('show');
             $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
       }).modal('hide');
  });
  */

  $('.signInModal').click(function(e){
     e.preventDefault();
    //  $('#changePwdModal').modal('hide').on('hidden.bs.modal', function (e) {
    //         $('#signInModal').modal('show');
    //         $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
    //   });
      $('#changePwdModal').on('hidden.bs.modal', function (e) {
             $('#signInModal').modal('show');
             $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
       }).modal('hide');
  });

  // Reflect scrolling in navigation
  function goToByScroll(id, topsize){
      // Reove "link" from the ID
    id = id.replace("-link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top - topsize},
        'slow');
    }

  $(document).on('click', '.anchor-nav', function(e){
        // Prevent a page reload when a link is pressed
      e.preventDefault();
        // Call the scroll function
        if($(this).attr("id")=="chemcast-lnb-link"){
          goToByScroll($(this).attr("id"),50);
        }else{
          goToByScroll($(this).attr("id"),101);
        }

  });

  // lnb modal & btnAction
  $('#lnbInModal').on('shown.bs.modal', function () {
  });
  $('#lnbInModal').on('hide.bs.modal', function () {
    $('.lnb-sub').removeClass('lnb-slide-in').addClass('lnb-slide-out');
    $('.lnb-slide-out').parent().hide();
    $('.lnbbtn').removeClass('lnbbtn-focus');
    $('#lnb-close').addClass('lnb-head-left-close');
  });

  var $lnbbtn =  $('.lnbbtn');

  $lnbbtn.each(function(index){
    var $this = $(this);
    var lnblink = $this.data('lnblink');
    //$('#lnb-close').removeClass('lnb-head-left');


    $this.click(function(){
      var subclass = '.'+ lnblink;
      $('.lnb-slide-out').parent().show();
      $this.addClass('lnbbtn-focus')
      $this.closest('li').siblings().find('.lnbbtn').removeClass('lnbbtn-focus');
      //console.log(this);

      $(subclass).removeClass('lnb-slide-out').addClass('lnb-slide-in');
      $(subclass).siblings().removeClass('lnb-slide-in').addClass('lnb-slide-out');
      // $('#lnb-close').removeClass('lnb-head-left-close');

      $('#lnb-close').removeClass('lnb-head-left-close').addClass('lnb-head-left');
        });
    });
    // datepicker
    // default datepicker
    // $('.datepicker-box input').datepicker({
    //   autoclose: true
    // });
    // // range datepicker
    // $('.input-daterange').datepicker({
    //    autoclose: true,
    //     todayBtn: "linked"
    // });


    //  by kka. gnb-sub menu event
    // var $mainGmenu =  $('.gnb-menu-btn');
    // var timerId = 0;

    //   $mainGmenu.each(function(index) {
    //     var $this = $(this);
    //     var gnbSubmenu = $this.data('gnbsub');
    //     var gsm = '.'+ gnbSubmenu;
    //     var currentsm = $(this).parents('.mainnav').find(gsm);
    //     var dmuD = $(this).parent().siblings().children('.gnb-menu-btn');
    //     var dmuD2 = $(this).parent().children('.gnb-menu-btn');
    //
    //   //  add event
    //     $this.on({
    //     mouseenter: function() {
    //         $(dmuD).removeClass('hovering');
    //         $(currentsm).removeClass('gnb-submenu-off').addClass('gnb-submenu-on')
    //       .siblings('.gnb-sub').removeClass('gnb-submenu-on').addClass('gnb-submenu-off');
    //     },
    //     mouseleave:function(){
    //         $(this).addClass('hovering');
    //         $(dmuD).removeClass('hovering');
    //         $(currentsm).removeClass('gnb-submenu-off').addClass('gnb-submenu-on')
    //       .siblings('.gnb-sub').removeClass('gnb-submenu-on').addClass('gnb-submenu-off');
    //     }
    //   });
    //
    //   $(gsm).on({
    //     mouseleave: function() {
    //      $(this).removeClass('gnb-submenu-on').addClass('gnb-submenu-off');
    //      $(dmuD2).removeClass('hovering');
    //      }
    //   });
    // });//gnb-sub menu event end

    // cheminfo structure search layer open close
    $('.structure-search').on('click', function(){
      $('#structureIframe').addClass('open-structure in');
      OpenLayer();
    });
    $('.close-structure, .bg-structure').on('click', function(){
      $('#structureIframe').removeClass('in');
      setTimeout(function(){
        $('#structureIframe').removeClass('open-structure');
        }, 400);
      CloseLayer();
    });

    function OpenLayer(){
      var swidth=(window.innerWidth-$(window).width());
      $('body').addClass('body-open-layer')
      $('body').css('padding-right', swidth)
      $('.main-header-fixed').css('padding-right', swidth)
      $('.gm-wrap').css('padding-right', swidth)
      //$('.main-header-fixed').addClass('fixed-header');
      //$('.gm-wrap').addClass('fixed-header');
    }
    function CloseLayer(){
      $('body').removeClass('body-open-layer')
      $('body').css('padding-right', '')
      $('.main-header-fixed').css('padding-right', '')
      $('.gm-wrap').css('padding-right', '')
    }


  });//end ready
//lnb 스크롤
$(function(){
  function lnbScroll(){
    var winH = $(window).height();
    var lnbTitH = 95;
    var btnH = 103;
    var lnbListH = winH - lnbTitH - btnH;
    $('.lnb-sub-list').css('height', lnbListH);
  };
  lnbScroll();
  $(window).resize(function() {
    lnbScroll();
  });
});
//toggle radio button
function radioToggleCheck() {
  $('.radio-toggle').click(function(){
      var $radioToggle = $(this);
      // if this was previously checked
      if ($radioToggle.data('waschecked') == true)
      {
          $radioToggle.prop('checked', false);
          $radioToggle.data('waschecked', false);
      }
      else
          $radioToggle.data('waschecked', true);

      // remove was checked from other radios
      // $radioToggle.siblings('input[name="rad"]').data('waschecked', false);
  });
};


//end toggle radio button
function setupQuestionField() {
  var $cblb = $('.ckb-label');

  $cblb.each(function (index) {
    var $this = $(this);
    var offimg = $this.data('offimg');
    var onimg = $this.data('onimg');
    var activeimg = $this.data('activeimg');
    var $cb = $this.find('.ckbox');

    // 초기 로딩시 체크드 이미지 처리.
    if ($cb.prop('checked')) {
      $this.css({'background-image': 'url(' + activeimg + ')'});
    } else {
      $this.css({'background-image': 'url(' + offimg + ')'});
    };


    //add event
    $this.on({
      click: function () {
        if ($cb.prop('checked')) {
          $this.css({'background-image': 'url(' + activeimg + ')'});
        } else {
          $this.css({'background-image': 'url(' + offimg + ')'});
        }
      },
      mouseover: function () {
        // Do something on mouseenter
        if ($cb.prop('checked')) {
          $this.css({'background-image': 'url(' + activeimg + ')'});
        } else {
          $this.css({'background-image': 'url(' + onimg + ')'});
        }
      },
      mouseout: function () {
        // Do something on mouseenter
        if ($cb.prop('checked')) {
          $this.css({'background-image': 'url(' + activeimg + ')'});
        } else {
          $this.css({'background-image': 'url(' + offimg + ')'});
        }
      }
    });
    //end add event

        //click event
        $( '#btn-bookmark' ).click(function() {
          $('.bookmark-btn-toggle').addClass('active');
        });


        $('#testdr').on('show.bs.dropdown', function () {
          // do something…
        });

  });
};//end setupQuestionField


function dscWriteTextarea(e){
  $('.editArea').on( 'keydown', 'textarea', function (){
      var wHeight = $(window).height(),
          domHeight = $('header').height() + $('.write-notice').height() + $('.discussion-write h1').height() + $('.discussion-write .write-user-info').height() + $('footer').height(),
          totalHeight = wHeight - domHeight;
      $(this).css({
          'max-height' : totalHeight,
          'height' : 'auto'
      });
      $(this).height( this.scrollHeight + 18);
  });
  $('.editArea').find( 'textarea' ).keyup();
};

function searchTab(){
  $('.dsc-contents-tab-wrap').hide();
  $('.dsc-contents-tab-wrap:first').show();
  $('ul.search-tabs-id li:first').addClass('active-tab-s');

  $('ul.search-tabs-id li').click(function () {
      $('ul.search-tabs-id li').removeClass('active-tab-s');
      $(this).addClass('active-tab-s');
      $('.dsc-contents-tab-wrap').hide();
      var activeTab = $(this).attr('rel');
      $('#' + activeTab).fadeIn();
  });
};


//discussion notice-box hide
function writeNoticeHide(){
  var hideDiv = $('.write-notice');
  var $clickbtn = $(hideDiv).find('.close');

  //page load
  $clickbtn.removeClass('off');

  //clik event
  $clickbtn.click(function(event){
    event.preventDefault();
  //$( event.target ).closest(hideDiv).hide( "slow" );;
   $( event.target ).closest(hideDiv).addClass('off');
    });

};


//myfile write hide
function writeMyfileHide(){
  var hideDivFile = $('.myfile-upload');
  var $clickaddfile = $(hideDivFile).parents('.my-file-content').siblings('.myfile-header').find('.addmyfile');
  var $clickclosefile = $(hideDivFile).find('.file-write-cancel');
  var dataNotice = $(hideDivFile).siblings('.write-notice');


  //page load
  $clickclosefile.removeClass('cancelfile');
  $clickaddfile.removeClass('addfile');
  dataNotice.removeClass('off');


  //clik event
  $clickclosefile.click(function(){
    //$('.btn-upload').slideUp(50);
    //hideDivFile.animate({opacity: "0.0"}, 90).slideUp(200);
    hideDivFile.css('display' , 'none');
    dataNotice.addClass('off');
    $($clickaddfile).css('display' , 'block');
  });

  //addmyfile
  $clickaddfile.click(function(){
    //$('.btn-upload').slideDown();
    //hideDivFile.slideDown(200).animate({opacity: "1"}, 90);
    hideDivFile.css('display' , 'block');
    dataNotice.removeClass('off');
    $($clickaddfile).css('display' , 'none');
  });

  // upload 버튼 트리거
  $('.btn-upload').click(function () {
  $(this).siblings('input[type=file]').trigger('click');
  });

};

//filetype
function fileType(){
  $('.list-myfile-img').mouseover(function(e){
    e.preventDefault();
    var src = $(this).find('img').attr('src');
    var tarr = src.split('/');      // ["static","images","banner","ico-doc.jpg"]
    var file = tarr[tarr.length-1]; // "ico-doc.jpg"
    var dataLong = file.split('.')[0]; // icodoc
    var data = dataLong.split('-')[1];

    $('.list-myfile-img img').attr('title', data);
  });
};

//btn-edit-box
// function btnEdit(){
//   var $btnSave = $('.btn-edit-box').find('.btn-save');
//   var $btnEdit = $('.btn-edit-box').find('.btn-edit');
//
//   $btnSave.click(function(){
//     $(this).parents('.res-career-write').css('display', 'none');
//     $(this).parents('.res-career-write').siblings('.res-career-view').css('display', 'block');
//   });
//
//   $btnEdit.click(function(){
//     $(this).parents('.res-career-view').css('display', 'none');
//     $(this).parents('.res-career-view').siblings('.res-career-write').css('display', 'block');
//   });
// };

//common sample을 위한
function editableField(){

  // $('.editable-field').on({
  //     click: function () {
  //       $(this).addClass('active-f');
  //       // $(this).children('.select-box').addClass('open-select');
  //       $(this).children('.myp-form-edit').addClass('myp-form-edit-view');
  //     },
  //     focusout: function () {
  //       // $(this).children('.select-box').removeClass('open-select');
  //       $(this).removeClass('active-f');
  //       $(this).children('.myp-form-edit').removeClass('myp-form-edit-view');
  //     }
  // });


  //// 161123 재수정 -- mypageProfile.html 페이지
  //// 컨텐츠 상단 input창(ex;Occupation) 클릭시 해당 input창 width 늘어나는부분
  $('.myp-edit-input').on({
      click: function () {
        $(this).closest('.editable-field').children('.select-box').addClass('open-select');
        $(this).closest('.editable-field').addClass('active-f');
        $(this).closest('.editable-field').children('.myp-form-edit').addClass('myp-form-edit-view');
      },
      focusout: function () {
        $(this).closest('.editable-field').children('.select-box').removeClass('open-select');
        $(this).closest('.editable-field').removeClass('active-f');
        $(this).closest('.editable-field').children('.myp-form-edit').removeClass('myp-form-edit-view');
      }
  });




  // $('.editable-field-summary').on({
  //     click: function () {
  //       $(this).addClass('active-f');
  //       $(this).children('.myp-form-edit').addClass('myp-form-edit-view');
  //     }
  // });


  // 20161208 mypage myprofile Summary 및 save 버튼 외 클릭시
  // $(document).on('click',function(event){
  //   if($('.editable-field-summary').hasClass('active-f') == true && !$(event.target).hasClass('btn-brand-blue') && !$(event.target).hasClass('myp-edit-input') ){
  //      $('.editable-field-summary').removeClass('active-f');
  //      $('.editable-field-summary').children('.myp-form-edit').removeClass('myp-form-edit-view');
  //   }
  // });


  //// 161123 추가  mypageProfile.html 페이지 컨텐츠 상단 'county', 'Choose area' 부분 셀렉트박스
  //// 헤당셀렉트박스는 하단에 있는 selectBox() 함수 기능도 포함 작동됨

  $('.editable-field').children('span').click(function(){
    removeCheckField(); // 열려있는 다른 드롭다운 없에기

    // 선택 해당 드롭다운 리스트 띄우기
    $(this).parent('.editable-field').addClass('active-f');
    $(this).parent('.editable-field').children('.select-box').addClass('open-select');
  });

  // 드롭다운 리스트 없에기 함수 (위에서 사용)
  function removeCheckField(){
    $('.editable-field').removeClass('active-f');
    $('.editable-field').children('.select-box').removeClass('open-select');
  }

  // 드롭다운 옵션 선택시 해당 드롭다운 없에기
  $('.editable-field .select-box ul.aList > li > a ').click(function(){
     $(this).closest('.editable-field').removeClass('active-f');
     $(this).closest('.editable-field').children('.select-box').removeClass('open-select');
  });




};
//myp-edit-summary

function selectBox(){
  // $('.input-select').on({
  //     click: function () {
  //       $(this).addClass('active-f');
  //       // $(this).children('.select-box').find('.input-base').focus();
  //       $(this).children('.select-box').addClass('open-select');
  //     },
  //     focusout: function () {
  //       $(this).children('.select-box').removeClass('open-select');
  //       $(this).removeClass('active-f');
  //     }
  // });



  ///// 161123 추가수정 ( 기존 셀렉트 박스 )

  $('.input-select').children('.input-select-search').click(function(){
    removeCheck(); // 기존 열려있는 드롭다운 리스트 없에기

    //선택시 해당 드롭다운 리스트 띄우기
    $(this).parent('.input-select').addClass('active-f');
    $(this).parent('.input-select').children('.select-box').addClass('open-select');

  });

  $('.input-select .select-box ul.aList > li > a').click(function(){
     $(this).closest('.input-select').removeClass('active-f');
     $(this).closest('.input-select').children('.select-box').removeClass('open-select');
  });

  //셀렉트박스 외 다른곳 클릭시 열려있는 드롭다운 리스트 없에기
  $(document).click(function(event){
    if($('.input-select').hasClass('active-f') == true || $('.select-box').hasClass('open-select') == true ){
      if(!$('.input-select').has(event.target).length){
        removeCheck();
      }
    }
  });

  // 드롭다운 리스트 없에기 함수(위에서 사용)
  function removeCheck(){
    $('.input-select').removeClass('active-f');
    $('.input-select').children('.select-box').removeClass('open-select');
  }
};




function selectNew(){

  $('.select-new').on('click focus', '.select-new-input', function(){
      $('.select-new').removeClass('active keyDown');
      $(this).parent('.select-new').addClass('active');
  });

  $('.select-new').on('keypress', '.select-new-input', function(){
      $(this).parent('.select-new').addClass('keyDown');
  })

  $('.select-new').on('click', '.select-new-layer > li > a', function(){
        var $Val = $(this).text();
        var $selectLi = $(this).closest('.select-new-layer').siblings('.select-new-input');
        $selectLi.val($Val);
        $selectLi.addClass('chooseLi');
        $(this).closest('.select-new').removeClass('active keyDown');
  });

  $('body').click(function(e){
    if( $('.select-new').hasClass('active') == true) {
      if( !$('.select-new').has(e.target).length) {
        $('.select-new').removeClass('active keyDown');
      }
    }
  });
};

function selectChooseOnly() {
  $('.select-choose-only').on('click focus', '.select-new-input', function(){
      $('.select-choose-only').removeClass('active keyDown');
      $(this).attr('readonly', 'readonly');
      $(this).parent('.select-choose-only').addClass('active keyDown');
  });

  $('.select-choose-only').on('click', '.select-new-layer > li > a', function(){
        var $Val = $(this).text();
        var $selectLi = $(this).closest('.select-new-layer').siblings('.select-new-input');
        $selectLi.val($Val);
        $selectLi.addClass('chooseLi');
        $(this).closest('.select-choose-only').removeClass('active keyDown');
  });

  $('body').click(function(e){
    if( $('.select-choose-only').hasClass('active') == true) {
      if( !$('.select-choose-only').has(e.target).length) {
        $('.select-choose-only').removeClass('active keyDown');
      }
    }
  });
};

/*
//tech-res search
function techResSearch(){
  var $brandList = $('.enter-input').find('.brand-list-group');
  var $brandBase = $('.enter-input').find('.input-base');

  $brandBase.on({
      keyup: function () {
        $(this).siblings('.brand-list-group').removeClass('display-opacity');
        //$brandList.removeClass('display-opacity');
      },
      focusout: function () {
        $(this).siblings('.brand-list-group').addClass('display-opacity');
      }
  });

};
*/

//InterestareaModal
function interestareaModal(){
  $('#checkbox-answer-etc').click(function(e){
    var isOtherEtc = $('#checkbox-answer-etc').is(":checked");
           if(isOtherEtc){ $('#myModal').modal('show'); }
    /*if(e.target.checked){
      // $('#InterestareaModal').modal('hide').on('hidden.bs.modal', function (e) {
      //        $('#myModal').modal('show');
      //        $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
      //  });

     $('#InterestareaModal').on('hidden.bs.modal', function (e) {
            $('#myModal').modal('show');
            $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
      }).modal('hide');

    }*/
  });

  /*$('#myModal').on('hide.bs.modal', function () {
    $('#myModal').modal().on('hidden.bs.modal', function () {
        $('#InterestareaModal').modal('show');
      $(this).off('hide.bs.modal');
    });
  });*/

};



//like toggle button active 상태 추가
  var $likebtn =  $('.like-btn-toggle');
  var likeOnClass = 'fa-heart';
  var likeOffClass = 'fa-heart-o';

  var $bookmarkbtn =  $('.bookmark-btn-toggle');
  var bookmarkOnClass = 'fa fa-bookmark';
  var bookmarkOffClass = 'fa fa-bookmark-o';


//like toggle button active 상태 추가
  $likebtn.each(function(index){
    var ishasclass = $(this).hasClass('active');
    if(ishasclass){
      $(this).find('i').removeClass(likeOffClass).addClass(likeOnClass);
    }
  });

//bookmark toggle button active 상태 추가
  $bookmarkbtn.each(function(index){
    var ishasbookclass = $(this).hasClass('active');
    if(ishasbookclass){
      $(this).find('i').removeClass(bookmarkOffClass).addClass(bookmarkOnClass);
    }
  });


//like toggle button
$('.like-btn-toggle').click(function(e){
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


//like toggle button
$('.bookmark-btn-toggle').click(function(e){
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


////////////////////////////////////////////////////////////////////////////////////////////
//////  placeholder / multi line : safari , firefox 호환성 대체 대안 (2016.11.17 김병석)  ////

var pl_ho_color = '#95a1aa';  // placeholder 폰트 색상

$.fn.placeholder_fun = function(target){

  $(this).attr('placeholder', target);
  $(this).css('color', pl_ho_color);

  $(this).focus(function(){
    //if($(this).val() === target){
      $(this).attr('placeholder', '');
      $(this).css('color', '#3c454c'); // 글 쓸때 폰트 색상
    // }
  });

  $(this).blur(function(){
    // if($(this).val() ===''){
      $(this).attr('placeholder', target);
      $(this).css('color', pl_ho_color);
    // }
  });

}

//// cheminfoSearchResultView.html
// Detail description
var PheminfoPlaceholderDetaildescription = 'To measure the value of test temperature, pressure etc / used to predict the details input,\n\nExample\n- At 1 bar, experiment value, experimental error <1% \n- Calculation value using Joback group method, absolute error = 1.5K';
$('.cheminfo-placeholder-detail-description').placeholder_fun(PheminfoPlaceholderDetaildescription);

var PheminfoPlaceholderDetaildescription2 = 'Describe the measurement conditions(temperature, pressure, pH…), methods or error range \n\nExample\n. At 1bar, experimental error <1%\n. calculation value using Joback group method, absolute error=1.5K';
$('.cheminfo-placeholder-detail-description2').placeholder_fun(PheminfoPlaceholderDetaildescription2);

var PheminfoPlaceholderDetaildescription3 = '*Effect level :\nExample; 400mg/m3, 2h\n\n*Guide line(method) :\nExample; OECD Guideline 423\n\n*Test type :\nExample; Acute toxicity: Oral\n\n*Route of administration  :\nExample; Oral : drinking water\n\n*Test organisms(Species) :\nExample; Rat(Wistar), female, age 72 weeks';
$('.cheminfo-placeholder-detail-description3').placeholder_fun(PheminfoPlaceholderDetaildescription3);

var PheminfoPlaceholderDetaildescription4 = 'Example; In a low-volume eye test (LVET), 37% formaldehyde solution was applied directly to the cornea of 12 rabbits.\nEyes were macroscopically examined to determine the degree and extent of irritation to the cornea, iris and conjunctiva at 3 hours post instillation and 1-4, 7, 14, 21, 28 and 35 days after treatment. The maximum score obtainable was 110 (cornea = 80, iris = 10, conjunctiva = 20).';
$('.cheminfo-placeholder-detail-description4').placeholder_fun(PheminfoPlaceholderDetaildescription4);

var PheminfoPlaceholderDetaildescription5 = '*Guide line(method) :\nExample; OECD Guideline 423\n\n*Test type :\nExample; Acute toxicity: Oral\n\n*Route of administration :\nExample; Oral : drinking water\n\n*Test organisms(Species) :\nExample; Rat(Wistar), female, age 72 weeks';
$('.cheminfo-placeholder-detail-description5').placeholder_fun(PheminfoPlaceholderDetaildescription5);

var PheminfoPlaceholderDetaildescription6 = 'Describe the measurement conditions\n\nExample\n. State: liquid, Resolution: 300 MHz, Solvent: 5% in TMS\n. KBr disc, 2 cm-1 resolution\n. Anion Radical, Reduction with K in THF';
$('.cheminfo-placeholder-detail-description6').placeholder_fun(PheminfoPlaceholderDetaildescription6);

var PheminfoPlaceholderDetaildescription7 = 'Example\nColorless liquid';
$('.cheminfo-placeholder-detail-description7').placeholder_fun(PheminfoPlaceholderDetaildescription7);

var PheminfoPlaceholderDetaildescription8 = 'Example\nAromatic, gasoline-like';
$('.cheminfo-placeholder-detail-description8').placeholder_fun(PheminfoPlaceholderDetaildescription8);

var PheminfoPlaceholderDetaildescription9 = 'Example\nStable, but very flammable';
$('.cheminfo-placeholder-detail-description9').placeholder_fun(PheminfoPlaceholderDetaildescription9);

var PheminfoPlaceholderDetaildescription10 = 'Example\nBenzene should NOT be used at all unless no safer alternatives are available.\nIf benzene must be used in an experiment, it should be handled at all stages in a fume cupboard.\nWear safety glasses and use protective gloves.';
$('.cheminfo-placeholder-detail-description10').placeholder_fun(PheminfoPlaceholderDetaildescription10);

var PheminfoPlaceholderDetaildescription11 = 'Example\nLiquid';
$('.cheminfo-placeholder-detail-description11').placeholder_fun(PheminfoPlaceholderDetaildescription11);

var PheminfoPlaceholderDetaildescription12 = 'Example\nDrug/Mid-Drug/Non-Drug';
$('.cheminfo-placeholder-detail-description12').placeholder_fun(PheminfoPlaceholderDetaildescription12);

// Reference
var CheminfoPlaceholderReference = 'Whether directly measured values - about the source value of the experimental value records about their study, published in the / etc / the paper provides url address records.\n\nExample\n- URL sample : http://www.sciencedirect.com/science/article/pii/S0167732214005480 \n- Journal description :  Journal of Molecular Liquids, Volume 201, January 2015, Pages 21-29 \n- Directly measured.';
$('.cheminfo-placeholder-Reference').placeholder_fun(CheminfoPlaceholderReference);

var CheminfoPlaceholderReference2 = 'Cite your source\n\nExample\n- URL sample : http://www.sciencedirect.com/science/article/pii/S0167732214005480 \n- Journal description :  Journal of Molecular Liquids, Volume 201, January 2015, Pages 21-29 \n- Directly measured.';
$('.cheminfo-placeholder-Reference2').placeholder_fun(CheminfoPlaceholderReference2);

// Detail description (절반 폭)
var PheminfoPlaceholderDetaildescription_half = 'To measure the value of test temperature,\npressure etc / used to predict the details input,\nExample\n- At 1 bar, experiment value, experimental error\n<1%- Calculation value using Joback group method,\nabsolute error = 1.5K';
$('.cheminfo-placeholder-detail-description-half').placeholder_fun(PheminfoPlaceholderDetaildescription_half);
// Reference (절반 폭)
var CheminfoPlaceholderReference_half = 'Whether directly measured values - about the\nsource value of the experimental value records\nabout their study, published\nin the / etc / the paper provides url address records.\n\nExample\n- URL sample : http://www.sciencedirect.com/\nscience/article/pii/S0167732214005480\n- Journal description :  Journal of Molecular Liquids, Volume 201, January 2015, Pages 21-29\n\n- directly measured.';
$('.cheminfo-placeholder-Reference-half').placeholder_fun(CheminfoPlaceholderReference_half);

// Introduction
var CheminfoPlaceholderIntroduction = 'Please explain briefly about your company.\n\nExample\n- In coming months, my company will introduce new carbonated drinks that are fortified with vitamins and minerals.';
$('.cheminfo-placeholder-Introduction').placeholder_fun(CheminfoPlaceholderIntroduction);


// 로딩중 띄우기
function LoadingIng(){
  $('#modal-loading').addClass('open-loading in');
}

// 로딩중 아웃
function LoadingOut(){
  $('#modal-loading').removeClass('in');
  setTimeout(function(){
    $('#modal-loading').removeClass('open-loading');
    }, 400);
}
